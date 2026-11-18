#pragma once

#include <QCoreApplication>
#include <QTranslator>
#include "common/context.hpp"
#include <expected>
#include <QUrl>

class IpcCommandHandler {
  Q_DECLARE_TR_FUNCTIONS(IpcCommandHandler)
public:
  std::expected<void, std::string> handleUrl(const QUrl &url);
  IpcCommandHandler(ApplicationContext &ctx);

private:
  ApplicationContext &m_ctx;
};
