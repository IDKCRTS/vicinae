#include "windows-login-item.hpp"

#include <QCoreApplication>
#include <QDir>
#include <QSettings>
#include <qlogging.h>
#include <windows.h>
#include <comdef.h>
#include <sddl.h>
#include <shellapi.h>
#include <taskschd.h>
#include <wrl/client.h>
#include <filesystem>
#include <format>
#include <fstream>
#include <optional>
#include <string>
#include "vicinae.hpp"

using Microsoft::WRL::ComPtr;

namespace vicinae::windows {

namespace {

constexpr auto RUN_KEY = "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run";
constexpr auto VALUE_NAME = "Vicinae";
constexpr wchar_t TASK_NAME[] = L"Vicinae";

std::filesystem::path markerPath() { return Omnicast::stateDir() / "login-item-registered"; }

// COM must stay initialized for as long as we hold COM pointers, so every entry
// point below opens its own scope and does all of its work inside it.
struct ComScope {
  const HRESULT hr;
  ComScope() : hr(CoInitializeEx(nullptr, COINIT_MULTITHREADED)) {}
  ~ComScope() {
    if (SUCCEEDED(hr)) CoUninitialize();
  }
  bool ok() const { return SUCCEEDED(hr) || hr == RPC_E_CHANGED_MODE; }
};

std::wstring exePath() {
  return QDir::toNativeSeparators(QCoreApplication::applicationFilePath()).toStdWString();
}

// account names fail to resolve for Microsoft accounts (ERROR_NONE_MAPPED);
// task triggers accept SID strings, which always work
std::wstring currentUserSid() {
  HANDLE token = nullptr;
  if (!OpenProcessToken(GetCurrentProcess(), TOKEN_QUERY, &token)) return {};

  DWORD len = 0;
  GetTokenInformation(token, TokenUser, nullptr, 0, &len);
  std::string buf(len, '\0');
  const auto *user = reinterpret_cast<const TOKEN_USER *>(buf.data());
  if (!GetTokenInformation(token, TokenUser, const_cast<TOKEN_USER *>(user), len, &len)) {
    CloseHandle(token);
    return {};
  }
  CloseHandle(token);

  wchar_t *sid = nullptr;
  if (!ConvertSidToStringSidW(user->User.Sid, &sid)) return {};
  std::wstring result(sid);
  LocalFree(sid);
  return result;
}

void removeLegacyRunEntry() {
  QSettings settings(RUN_KEY, QSettings::NativeFormat);
  settings.remove(VALUE_NAME);
}

// run schtasks elevated so that it can register the task with
// TASK_RUNLEVEL_HIGHEST; pops a single UAC prompt
bool elevatedRegisterTask() {
  const std::wstring args =
      std::format(L"/Create /F /TN \"{}\" /SC ONLOGON /RL HIGHEST /TR \"\\\"{}\\\"\"", TASK_NAME, exePath());
  const auto result = reinterpret_cast<INT_PTR>(
      ShellExecuteW(nullptr, L"runas", L"schtasks.exe", args.c_str(), nullptr, SW_SHOWNORMAL));
  if (result <= 32) {
    qWarning() << "Elevated schtasks registration was declined:"
               << QString::asprintf("%ld", static_cast<long>(result));
    return false;
  }
  return true;
}

struct LogonTaskInfo {
  std::wstring path;
  TASK_RUNLEVEL_TYPE runLevel = TASK_RUNLEVEL_LUA;
  bool enabled = false;
};

// state of the registered task, or nullopt when it does not exist
std::optional<LogonTaskInfo> registeredLogonTask() {
  ComScope com;
  if (!com.ok()) return std::nullopt;

  ComPtr<ITaskService> service;
  HRESULT hr = CoCreateInstance(CLSID_TaskScheduler, nullptr, CLSCTX_INPROC_SERVER, IID_PPV_ARGS(&service));
  if (FAILED(hr)) return std::nullopt;

  hr = service->Connect(_variant_t(), _variant_t(), _variant_t(), _variant_t());
  if (FAILED(hr)) return std::nullopt;

  ComPtr<ITaskFolder> folder;
  hr = service->GetFolder(_bstr_t(L"\\"), &folder);
  if (FAILED(hr)) return std::nullopt;

  ComPtr<IRegisteredTask> task;
  hr = folder->GetTask(_bstr_t(TASK_NAME), &task);
  if (FAILED(hr)) return std::nullopt;

  LogonTaskInfo info;
  VARIANT_BOOL enabled;
  if (FAILED(task->get_Enabled(&enabled))) return std::nullopt;
  info.enabled = enabled == VARIANT_TRUE;

  ComPtr<ITaskDefinition> def;
  if (FAILED(task->get_Definition(&def))) return std::nullopt;

  ComPtr<IPrincipal> principal;
  if (FAILED(def->get_Principal(&principal))) return std::nullopt;
  TASK_RUNLEVEL_TYPE level = TASK_RUNLEVEL_LUA;
  principal->get_RunLevel(&level);
  info.runLevel = level;

  ComPtr<IActionCollection> actions;
  if (FAILED(def->get_Actions(&actions))) return std::nullopt;
  ComPtr<IAction> action;
  if (FAILED(actions->get_Item(1, &action))) return std::nullopt;
  ComPtr<IExecAction> exec;
  if (FAILED(action.As(&exec))) return std::nullopt;
  BSTR path = nullptr;
  if (FAILED(exec->get_Path(&path))) return std::nullopt;
  info.path.assign(path, SysStringLen(path));
  SysFreeString(path);

  return info;
}

// the launcher must start with the highest privileges the account has so that
// its keyboard hook keeps working over elevated applications (UIPI).
// Registering with TASK_RUNLEVEL_HIGHEST requires an elevated caller: ask once
// through a UAC prompt and let schtasks perform the registration. When the
// prompt is declined, fall back to a limited task so that autostart keeps
// working (retry the elevation by toggling the setting off and on).
bool registerLogonTask() {
  ComScope com;
  if (!com.ok()) {
    qWarning() << "Failed to initialize COM for the login task:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(com.hr));
    return false;
  }

  ComPtr<ITaskService> service;
  HRESULT hr = CoCreateInstance(CLSID_TaskScheduler, nullptr, CLSCTX_INPROC_SERVER, IID_PPV_ARGS(&service));
  if (FAILED(hr)) {
    qWarning() << "Failed to create the Task Scheduler COM instance:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  hr = service->Connect(_variant_t(), _variant_t(), _variant_t(), _variant_t());
  if (FAILED(hr)) {
    qWarning() << "Failed to connect to the Task Scheduler service:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  ComPtr<ITaskFolder> folder;
  hr = service->GetFolder(_bstr_t(L"\\"), &folder);
  if (FAILED(hr)) {
    qWarning() << "Failed to open the task root folder:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  ComPtr<ITaskDefinition> def;
  hr = service->NewTask(0, &def);
  if (FAILED(hr)) {
    qWarning() << "Failed to create a task definition:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  ComPtr<IPrincipal> principal;
  hr = def->get_Principal(&principal);
  if (FAILED(hr)) {
    qWarning() << "Failed to get the task principal:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }
  principal->put_LogonType(TASK_LOGON_INTERACTIVE_TOKEN);
  principal->put_RunLevel(TASK_RUNLEVEL_HIGHEST);

  ComPtr<ITaskSettings> settings;
  hr = def->get_Settings(&settings);
  if (FAILED(hr)) {
    qWarning() << "Failed to get the task settings:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }
  settings->put_DisallowStartIfOnBatteries(VARIANT_FALSE);
  settings->put_StopIfGoingOnBatteries(VARIANT_FALSE);
  // the launcher is a long-running process: never apply the default time limit
  settings->put_ExecutionTimeLimit(_bstr_t(L"PT0S"));
  settings->put_MultipleInstances(TASK_INSTANCES_IGNORE_NEW);

  ComPtr<ITriggerCollection> triggers;
  hr = def->get_Triggers(&triggers);
  if (FAILED(hr)) {
    qWarning() << "Failed to get the trigger collection:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  ComPtr<ITrigger> trigger;
  hr = triggers->Create(TASK_TRIGGER_LOGON, &trigger);
  if (FAILED(hr)) {
    qWarning() << "Failed to create the logon trigger:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  ComPtr<ILogonTrigger> logon;
  if (SUCCEEDED(trigger.As(&logon))) {
    const auto sid = currentUserSid();
    if (!sid.empty()) { logon->put_UserId(_bstr_t(sid.c_str())); }
  }

  ComPtr<IActionCollection> actions;
  hr = def->get_Actions(&actions);
  if (FAILED(hr)) {
    qWarning() << "Failed to get the action collection:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  ComPtr<IAction> action;
  hr = actions->Create(TASK_ACTION_EXEC, &action);
  if (FAILED(hr)) {
    qWarning() << "Failed to create the exec action:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  ComPtr<IExecAction> exec;
  if (FAILED(action.As(&exec))) {
    qWarning() << "Failed to query the exec action interface";
    return false;
  }
  exec->put_Path(_bstr_t(exePath().c_str()));

  ComPtr<IRegisteredTask> registered;
  hr = folder->RegisterTaskDefinition(_bstr_t(TASK_NAME), def.Get(), TASK_CREATE_OR_UPDATE, _variant_t(),
                                      _variant_t(), TASK_LOGON_INTERACTIVE_TOKEN, _variant_t(),
                                      registered.GetAddressOf());
  if (SUCCEEDED(hr)) return true;

  if (hr == HRESULT_FROM_WIN32(ERROR_ACCESS_DENIED)) {
    qWarning() << "Registering an elevated logon task requires elevation, requesting via schtasks";
    return elevatedRegisterTask();
  }

  qWarning() << "Failed to register the Vicinae logon task:"
             << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));

  // limited autostart is better than no autostart at all
  principal->put_RunLevel(TASK_RUNLEVEL_LUA);
  ComPtr<IRegisteredTask> limited;
  hr = folder->RegisterTaskDefinition(_bstr_t(TASK_NAME), def.Get(), TASK_CREATE_OR_UPDATE, _variant_t(),
                                      _variant_t(), TASK_LOGON_INTERACTIVE_TOKEN, _variant_t(),
                                      limited.GetAddressOf());
  if (FAILED(hr)) {
    qWarning() << "Failed to register the limited Vicinae logon task:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
  }
  return SUCCEEDED(hr);
}

bool deleteLogonTask() {
  ComScope com;
  if (!com.ok()) {
    qWarning() << "Failed to initialize COM for the login task:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(com.hr));
    return false;
  }

  ComPtr<ITaskService> service;
  HRESULT hr = CoCreateInstance(CLSID_TaskScheduler, nullptr, CLSCTX_INPROC_SERVER, IID_PPV_ARGS(&service));
  if (FAILED(hr)) {
    qWarning() << "Failed to create the Task Scheduler COM instance:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  hr = service->Connect(_variant_t(), _variant_t(), _variant_t(), _variant_t());
  if (FAILED(hr)) {
    qWarning() << "Failed to connect to the Task Scheduler service:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  ComPtr<ITaskFolder> folder;
  hr = service->GetFolder(_bstr_t(L"\\"), &folder);
  if (FAILED(hr)) {
    qWarning() << "Failed to open the task root folder:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  hr = folder->DeleteTask(_bstr_t(TASK_NAME), 0);
  if (FAILED(hr) && hr != HRESULT_FROM_WIN32(ERROR_FILE_NOT_FOUND)) {
    qWarning() << "Failed to delete the Vicinae logon task:"
               << QString::asprintf("0x%08lX", static_cast<unsigned long>(hr));
    return false;
  }

  return true;
}

} // namespace

// the marker file stores the desired state ("1" or "0"): failed registrations
// are retried on the next launch, while an explicit opt-out is respected
void registerLoginItemOnce() {
  std::ifstream ifs(markerPath(), std::ios::binary);
  std::string want;
  std::getline(ifs, want);

  if (want.empty()) { want = "1"; } // first launch, or a legacy marker from the Run key era

  setLoginItemEnabled(want == "1");
}

bool isLoginItemSupported() { return true; }

bool isLoginItemEnabled() {
  return registeredLogonTask().transform([](const auto &info) { return info.enabled; }).value_or(false);
}

void setLoginItemEnabled(bool enabled) {
  // the old autostart mechanism predates the scheduled task: make sure the Run
  // entry is always gone so that we never start twice
  removeLegacyRunEntry();

  if (!enabled) {
    deleteLogonTask();
    std::ofstream{markerPath()} << "0\n";
    return;
  }

  // nothing to do when the task is already registered for this binary with the
  // requested run level: re-registering from a non-elevated process would pop a
  // pointless UAC prompt on every launch
  if (const auto info = registeredLogonTask()) {
    if (info->enabled && info->runLevel == TASK_RUNLEVEL_HIGHEST &&
        _wcsicmp(info->path.c_str(), exePath().c_str()) == 0) {
      std::ofstream{markerPath()} << "1\n";
      return;
    }
  }

  if (!registerLogonTask()) {
    qWarning() << "Failed to register the Vicinae logon task";
    return;
  }
  std::ofstream{markerPath()} << "1\n";
}

} // namespace vicinae::windows
