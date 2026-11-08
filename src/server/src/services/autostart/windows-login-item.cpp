#include "windows-login-item.hpp"

#include <QCoreApplication>
#include <QSettings>
#include <qlogging.h>
#include <filesystem>
#include <fstream>
#include "vicinae.hpp"

namespace vicinae::windows {

namespace {

constexpr auto RUN_KEY = "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run";
constexpr auto VALUE_NAME = "Vicinae";

std::filesystem::path markerPath() { return Omnicast::stateDir() / "login-item-registered"; }

} // namespace

// we only set it once, otherwise we would end up overriding the user preference
// every single time
void registerLoginItemOnce() {
  const auto marker = markerPath();

  if (!std::filesystem::exists(marker)) {
    setLoginItemEnabled(true);

    // only mark as done if the registration actually took effect, so that we
    // retry on the next launch if it failed
    if (isLoginItemEnabled()) std::ofstream{marker};
    return;
  }

  // the user preference was already applied: respect it, but keep the stored
  // path in sync in case the executable moved (fresh install, build dir, ...)
  if (isLoginItemEnabled()) setLoginItemEnabled(true);
}

bool isLoginItemSupported() { return true; }

bool isLoginItemEnabled() {
  QSettings settings(RUN_KEY, QSettings::NativeFormat);
  return settings.contains(VALUE_NAME);
}

void setLoginItemEnabled(bool enabled) {
  QSettings settings(RUN_KEY, QSettings::NativeFormat);

  if (enabled) {
    settings.setValue(VALUE_NAME, QStringLiteral("\"%1\"").arg(QCoreApplication::applicationFilePath()));
  } else {
    settings.remove(VALUE_NAME);
  }
}

} // namespace vicinae::windows
