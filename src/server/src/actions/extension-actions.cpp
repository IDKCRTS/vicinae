#include "extension-actions.hpp"
#include "ui/alert/alert.hpp"
#include "service-registry.hpp"
#include "services/extension-registry/extension-registry.hpp"
#include "services/toast/toast-service.hpp"
#include "navigation-controller.hpp"
#include <QCryptographicHash>
#include <QFutureWatcher>

void InstallExtensionAction::execute(ApplicationContext *ctx) {
  using Watcher = QFutureWatcher<DownloadResult>;
  auto toast = ctx->services->toastService();
  auto registry = ctx->services->extensionRegistry();
  auto watcher = new Watcher;

  toast->dynamic(tr("Downloading extension..."));

  QObject::connect(
      watcher, &Watcher::finished, [registry, toast, watcher, id = m_installId, checksum = m_checksum]() {
        auto result = watcher->result();
        watcher->deleteLater();

        if (!result) {
          toast->failure(tr("Failed to download extension"));
          return;
        }

        // the archive is only trusted when it matches the checksum advertised by the store
        if (!checksum.isEmpty()) {
          const QString digest =
              QString::fromUtf8(QCryptographicHash::hash(*result, QCryptographicHash::Sha256).toHex());
          if (digest.compare(checksum, Qt::CaseInsensitive) != 0) {
            qWarning() << "Checksum mismatch for extension" << id;
            toast->failure(tr("Extension archive failed checksum verification"));
            return;
          }
        }

        registry->installFromZip(id, result->toStdString(), [toast](bool ok) {
          if (!ok) {
            toast->failure(tr("Failed to extract extension archive"));
            return;
          }
          toast->success(tr("Extension installed"));
        });
      });

  watcher->setFuture(m_downloader(ctx));
}

void UninstallExtensionAction::execute(ApplicationContext *ctx) {
  auto alert = new CallbackAlertWidget();

  alert->setTitle(tr("Are you sure?"));
  alert->setMessage(
      tr("All this extension data will be permanently lost. If you "
         "just want the extension to not appear in the root search anymore, consider disabling it instead."));
  alert->setConfirmText(tr("Uninstall"), SemanticColor::Red);
  alert->setCallback([ctx, id = m_id](bool ok) {
    if (!ok) return;
    if (ctx->services->extensionRegistry()->uninstall(id)) {
      ctx->services->toastService()->setToast(tr("Extension uninstalled"));
    } else {
      ctx->services->toastService()->setToast(tr("Failed to uninstall extension"), ToastStyle::Danger);
    }
  });

  ctx->navigation->setDialog(alert);
}
