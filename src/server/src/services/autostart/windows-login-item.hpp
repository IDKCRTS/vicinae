#pragma once

namespace vicinae::windows {

void registerLoginItemOnce();
bool isLoginItemSupported();
bool isLoginItemEnabled();
void setLoginItemEnabled(bool enabled);

} // namespace vicinae::windows
