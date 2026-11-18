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

  // extensions run as full user code and the store payload cannot be trusted
  // blindly: require an explicit confirmation before downloading anything
  auto alert = new CallbackAlertWidget();

  alert->setTitle(tr("Install \"%1\"?").arg(m_extensionTitle.isEmpty() ? m_installId : m_extensionTitle));
  alert->setMessage(tr("Extensions run with the same privileges as Vicinae and can access your data. "
                       "Only install extensions from sources you trust.\n\nIdentifier: %1")
                        .arg(m_installId));
  alert->setConfirmText(tr("Install"), SemanticColor::Accent);

  // copy everything the action panel may destroy before the dialog resolves
  alert->setCallback([ctx, registry, toast, watcher, id = m_installId, checksum = m_checksum,
                      downloader = m_downloader, title = m_extensionTitle](bool ok) {
    if (!ok) return;

    toast->dynamic(tr("Downloading extension..."));

    QObject::connect(watcher, &Watcher::finished, [registry, toast, watcher, id, checksum]() {
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

    watcher->setFuture(downloader(ctx));
  });

  ctx->navigation->setDialog(alert);
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
