#pragma once

#include <QtGlobal>

/**
 * Platform-neutral access to the "launch at login" setting. Backed by
 * SMAppService on macOS and the per-user Run registry key on Windows.
 */
#if defined(Q_OS_MACOS)
#include "services/autostart/macos-login-item.hpp"
namespace vicinae::autostart {
using vicinae::macos::isLoginItemEnabled;
using vicinae::macos::isLoginItemSupported;
using vicinae::macos::registerLoginItemOnce;
using vicinae::macos::setLoginItemEnabled;
} // namespace vicinae::autostart
#elif defined(Q_OS_WIN)
#include "services/autostart/windows-login-item.hpp"
namespace vicinae::autostart {
using vicinae::windows::isLoginItemEnabled;
using vicinae::windows::isLoginItemSupported;
using vicinae::windows::registerLoginItemOnce;
using vicinae::windows::setLoginItemEnabled;
} // namespace vicinae::autostart
#else
namespace vicinae::autostart {

inline bool isLoginItemSupported() { return false; }
inline bool isLoginItemEnabled() { return false; }
inline void setLoginItemEnabled(bool) {}
inline void registerLoginItemOnce() {}

} // namespace vicinae::autostart
#endif
