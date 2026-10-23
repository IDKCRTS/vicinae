<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja_JP" sourcelanguage="en_US">
<context>
    <name>AI::AbstractTool</name>
    <message>
        <location filename="../src/builtins/system/bash-tool.cpp" line="+87"/>
        <source>Command cancelled.</source>
        <translation>コマンドをキャンセルしました。</translation>
    </message>
</context>
<context>
    <name>AI::Agent</name>
    <message>
        <location filename="../src/services/ai/agentic-loop.cpp" line="+209"/>
        <source>The agent reached its step limit.</source>
        <translation>エージェントがステップ数の上限に達しました。</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>This model is not available right now.</source>
        <translation>このモデルは現在利用できません。</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Could not start the response.</source>
        <translation>応答を開始できませんでした。</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>The model returned an invalid tool call.</source>
        <translation>モデルが無効なツール呼び出しを返しました。</translation>
    </message>
    <message>
        <location line="+45"/>
        <location line="+40"/>
        <source>This tool is not enabled.</source>
        <translation>このツールは無効です。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>The user declined to run this tool.</source>
        <translation>ユーザーがこのツールの実行を拒否しました。</translation>
    </message>
    <message>
        <location line="+49"/>
        <source>The tool did not return a result.</source>
        <translation>ツールが結果を返しませんでした。</translation>
    </message>
    <message>
        <location line="+51"/>
        <source>Tool execution was cancelled.</source>
        <translation>ツールの実行がキャンセルされました。</translation>
    </message>
</context>
<context>
    <name>AI::ClaudeCodeProvider</name>
    <message>
        <location filename="../src/services/ai/cli/claude-code-provider.cpp" line="+416"/>
        <source>Claude Code is not installed, or could not be found.</source>
        <translation>Claude Codeがインストールされていないか、見つかりません。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No executable at %1.</source>
        <translation>%1に実行ファイルがありません。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Checking Claude Code…</source>
        <translation>Claude Codeを確認中…</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Could not run Claude Code.</source>
        <translation>Claude Codeを実行できませんでした。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Not signed in. Run &quot;claude auth login&quot; in a terminal.</source>
        <translation>サインインしていません。ターミナルで「claude auth login」を実行してください。</translation>
    </message>
</context>
<context>
    <name>AI::CodexProvider</name>
    <message>
        <location filename="../src/services/ai/cli/codex-provider.cpp" line="+419"/>
        <source>Codex is not installed, or could not be found.</source>
        <translation>Codexがインストールされていないか、見つかりません。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No executable at %1.</source>
        <translation>%1に実行ファイルがありません。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Checking Codex…</source>
        <translation>Codexを確認中…</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Codex stopped unexpectedly.</source>
        <translation>Codexが予期せず終了しました。</translation>
    </message>
    <message>
        <location line="+52"/>
        <source>Not signed in. Run &quot;codex login&quot; in a terminal.</source>
        <translation>サインインしていません。ターミナルで「codex login」を実行してください。</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Could not list Codex models.</source>
        <translation>Codexのモデル一覧を取得できませんでした。</translation>
    </message>
</context>
<context>
    <name>AI::LocalProvider</name>
    <message>
        <location filename="../src/services/ai/local/local-provider.cpp" line="+22"/>
        <source>Vicinae-managed models, mostly for dictation purposes.</source>
        <translation>Vicinaeが管理するモデルです。主にディクテーション用です。</translation>
    </message>
</context>
<context>
    <name>AIChatCommand</name>
    <message>
        <location filename="../src/builtins/ai/ai-extension.hpp" line="+28"/>
        <source>AI Chat</source>
        <translation>AIチャット</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open your AI conversations in a dedicated window.</source>
        <translation>AI会話を専用ウィンドウで開きます。</translation>
    </message>
</context>
<context>
    <name>AIModelDeleteDialog</name>
    <message>
        <location filename="../src/ui/qml/settings/AIModelDeleteDialog.qml" line="+28"/>
        <source>Delete %1?</source>
        <translation>%1を削除しますか？</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>The model file will be removed from disk. You can download it again at any time.</source>
        <translation>モデルファイルをディスクから削除します。いつでも再ダウンロードできます。</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Delete</source>
        <translation>削除</translation>
    </message>
</context>
<context>
    <name>AIModelRow</name>
    <message>
        <location filename="../src/ui/qml/settings/AIModelRow.qml" line="+106"/>
        <source>Download</source>
        <translation>ダウンロード</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Downloading</source>
        <translation>ダウンロード中</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>%1%</source>
        <translation>%1%</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Delete model file</source>
        <translation>モデルファイルを削除</translation>
    </message>
</context>
<context>
    <name>AIProviderPicker</name>
    <message>
        <location filename="../src/ui/qml/settings/AIProviderPicker.qml" line="+121"/>
        <source>Search providers…</source>
        <translation>プロバイダーを検索…</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>No providers match.</source>
        <translation>一致するプロバイダーがありません。</translation>
    </message>
    <message>
        <location line="+95"/>
        <source>Add another</source>
        <translation>別のプロバイダーを追加</translation>
    </message>
</context>
<context>
    <name>AIProviderSetupDialog</name>
    <message>
        <location filename="../src/ui/qml/settings/AIProviderSetupDialog.qml" line="+86"/>
        <source>Set up %1</source>
        <translation>%1をセットアップ</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Instance ID</source>
        <translation>インスタンスID</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>A unique identifier for this instance.</source>
        <translation>このインスタンスの一意の識別子です。</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>This instance ID is already in use.</source>
        <translation>このインスタンスIDは既に使用されています。</translation>
    </message>
    <message>
        <location line="+104"/>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Add</source>
        <translation>追加</translation>
    </message>
</context>
<context>
    <name>AIProviderView</name>
    <message>
        <location filename="../src/ui/qml/settings/AIProviderView.qml" line="+103"/>
        <source>Providers</source>
        <translation>プロバイダー</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Remove</source>
        <translation>削除</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Configuration</source>
        <translation>構成</translation>
    </message>
    <message>
        <location line="+113"/>
        <source>Models</source>
        <translation>モデル</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>No models available. Check the connection and configuration.</source>
        <translation>利用可能なモデルがありません。接続と構成を確認してください。</translation>
    </message>
</context>
<context>
    <name>AIProvidersOverview</name>
    <message>
        <location filename="../src/ui/qml/settings/AIProvidersOverview.qml" line="+182"/>
        <source>Your providers</source>
        <translation>プロバイダー</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Add provider</source>
        <translation>プロバイダーを追加</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Models from every provider you set up are available to all AI features, including dictation.</source>
        <translation>設定したすべてのプロバイダーのモデルは、ディクテーションを含むすべてのAI機能で利用できます。</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>API keys are stored unencrypted. To protect them, turn on Encrypt sensitive data in the Advanced settings.</source>
        <translation>APIキーは暗号化せずに保存されます。保護するには、詳細設定で「機密データを暗号化」を有効にしてください。</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>No providers yet. Add one to start using AI features.</source>
        <translation>プロバイダーがまだありません。追加してAI機能を使い始めましょう。</translation>
    </message>
</context>
<context>
    <name>AISettingsModel</name>
    <message>
        <location filename="../src/ui/settings/ai-settings-model.cpp" line="+53"/>
        <source>Built-in</source>
        <translation>内蔵</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Cloud APIs</source>
        <translation>クラウドAPI</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Self-hosted</source>
        <translation>セルフホスト</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>CLI sign-ins</source>
        <translation>CLIサインイン</translation>
    </message>
    <message>
        <location line="+279"/>
        <source>No models installed</source>
        <translation>モデルがインストールされていません</translation>
    </message>
    <message numerus="yes">
        <location line="+1"/>
        <source>%n model(s) installed</source>
        <translation>
            <numerusform>%n個のモデルがインストールされています</numerusform>
        </translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No models found</source>
        <translation>モデルが見つかりません</translation>
    </message>
    <message numerus="yes">
        <location line="+2"/>
        <source>%n model(s)</source>
        <translation>
            <numerusform>%n個のモデル</numerusform>
        </translation>
    </message>
    <message>
        <location line="+123"/>
        <location line="+65"/>
        <source>Not connected</source>
        <translation>未接続</translation>
    </message>
</context>
<context>
    <name>AboutSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/AboutSettingsPage.qml" line="+61"/>
        <source>Version %1 - Commit %2
(%3)</source>
        <translation>バージョン %1 - コミット %2
(%3)</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Documentation</source>
        <translation>ドキュメント</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Report a Bug</source>
        <translation>不具合を報告</translation>
    </message>
</context>
<context>
    <name>ActionListPanel</name>
    <message>
        <location filename="../src/ui/qml/actions/ActionListPanel.qml" line="+116"/>
        <source>No matching actions</source>
        <translation>一致するアクションがありません</translation>
    </message>
    <message>
        <location line="+136"/>
        <source>Filter actions...</source>
        <translation>アクションを絞り込み...</translation>
    </message>
</context>
<context>
    <name>AddVocabCommand</name>
    <message>
        <location filename="../src/builtins/dictation/dictation-extension.hpp" line="+27"/>
        <source>Add Word to Vocabulary</source>
        <translation>ボキャブラリに単語を追加</translation>
    </message>
</context>
<context>
    <name>AdvancedSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/AdvancedSettingsPage.qml" line="+35"/>
        <source>Input &amp; Navigation</source>
        <translation>入力と移動</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Pop on backspace</source>
        <translation>Backspaceで前の画面に戻る</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pop back in navigation on backspace when no input is present.</source>
        <translation>入力欄が空のとき、Backspaceで前の画面に戻ります。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Activate on single click</source>
        <translation>シングルクリックで実行</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Activate items with a single click instead of requiring a double click.</source>
        <translation>項目をダブルクリックではなくシングルクリックで実行します。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Wrap navigation</source>
        <translation>一覧の端で移動を循環</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Wrap around to the opposite end when moving past the first or last item.</source>
        <translation>先頭または末尾を越えて移動すると、反対側の端に移ります。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>IME handling</source>
        <translation>IMEの入力を検索に反映</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Include IME Preedit strings as part of search queries.</source>
        <translation>IMEの変換確定前の文字列も検索に使用します。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Keybinding Scheme</source>
        <translation>キー操作方式</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Default uses the standard macOS keys (arrows, Ctrl+N/P); Vim uses Ctrl+J/K and Ctrl+H/L; Emacs uses Ctrl+N/P and Ctrl+Opt+B/F for navigation, plus Emacs editing in the search bar.</source>
        <translation>標準ではmacOSの標準キー（矢印キー、Ctrl+N/P）を使用します。VimではCtrl+J/KとCtrl+H/L、EmacsではCtrl+N/PとCtrl+Opt+B/Fで移動します。Emacsでは検索欄の編集にもEmacsのキー操作を使用します。</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Default and Vim use Ctrl+J/K and Ctrl+H/L; Emacs uses Ctrl+N/P and Ctrl+Alt+B/F for navigation, plus Emacs editing in the search bar.</source>
        <translation>標準とVimではCtrl+J/KとCtrl+H/Lで移動します。EmacsではCtrl+N/PとCtrl+Alt+B/Fで移動し、検索欄の編集にもEmacsのキー操作を使用します。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Search</source>
        <translation>検索</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Root file search</source>
        <translation>メイン画面でファイルを検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Files are searched asynchronously, so if enabled you should expect a slight delay for file search results to show up.</source>
        <translation>ファイルは非同期で検索されるため、有効にすると検索結果の表示まで少し時間がかかります。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Favicon Fetching</source>
        <translation>ファビコンの取得</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The favicon provider used to load favicons where needed. Select &apos;None&apos; to turn off favicon loading.</source>
        <translation>ファビコンの取得元を選択します。「なし」を選ぶと読み込まなくなります。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>System</source>
        <translation>システム</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Input server</source>
        <translation>入力サーバー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Whether to spawn the input server at startup. This needs to be enabled in order to support snippets, paste to active window, and other features that require input monitoring or injection.</source>
        <translation>起動時に入力サーバーを起動します。スニペット、アクティブなウィンドウへの貼り付けなど、入力の監視や送信が必要な機能を使うには有効にしてください。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Tray icon</source>
        <translation>トレイアイコン</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show the Vicinae icon in the system tray. You may need to restart Vicinae.</source>
        <translation>システムトレイにVicinaeのアイコンを表示します。Vicinaeの再起動が必要になる場合があります。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Update notice</source>
        <translation>更新通知</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show a notice in the launcher when an update is available.</source>
        <translation>更新が利用可能なときにランチャーに通知を表示します。</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Security</source>
        <translation>セキュリティ</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Encrypt sensitive data</source>
        <translation>機密データを暗号化</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Encrypt sensitive data at rest, such as clipboard history and internal databases (OAuth tokens, extension local storage, API keys). Note that some components, such as on-disk clipboard history, may not be retroactively affected when toggling this option. Turning on this option may ask you to unlock your keychain. Requires a restart in order to apply.</source>
        <translation>クリップボード履歴や内部データベース（OAuthトークン、拡張機能のローカルストレージ、APIキー）などの機密データを暗号化して保存します。ディスクに保存済みのクリップボード履歴など、一部のデータには設定変更が適用されない場合があります。有効にするとキーチェーンのロック解除を求められることがあります。反映には再起動が必要です。</translation>
    </message>
</context>
<context>
    <name>AiExtension</name>
    <message>
        <location filename="../src/builtins/ai/ai-extension.hpp" line="+39"/>
        <source>AI</source>
        <translation>AI</translation>
    </message>
</context>
<context>
    <name>AiPreferences</name>
    <message>
        <location filename="../src/services/ai/ai-preferences.cpp" line="+39"/>
        <source>None</source>
        <translation>なし</translation>
    </message>
</context>
<context>
    <name>AlertWidget</name>
    <message>
        <location filename="../src/ui/alert/alert.hpp" line="+15"/>
        <source>Are you sure?</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>This action cannot be undone</source>
        <translation>この操作は取り消せません</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Confirm</source>
        <translation>実行</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
</context>
<context>
    <name>AliasFormView</name>
    <message>
        <location filename="../src/ui/qml/views/AliasFormView.qml" line="+16"/>
        <source>Alias</source>
        <translation>別名</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Additional words to index this item against</source>
        <translation>この項目を検索するための追加キーワード</translation>
    </message>
</context>
<context>
    <name>AliasFormViewHost</name>
    <message>
        <location filename="../src/builtins/root/alias-form-view-host.cpp" line="+27"/>
        <source>Set alias - %1</source>
        <translation>別名を設定 - %1</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Submit</source>
        <translation>保存</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Alias modified</source>
        <translation>別名を変更しました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to modify alias</source>
        <translation>別名を変更できませんでした</translation>
    </message>
</context>
<context>
    <name>AppPreferences</name>
    <message>
        <location filename="../src/services/app-service/app-preferences.hpp" line="+36"/>
        <source>Default action</source>
        <translation>既定のアクション</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Action to perform when the return key is pressed. Always default to &apos;launch&apos; if the app has no open window.</source>
        <translation>Enterを押したときのアクションです。アプリのウィンドウが開いていない場合は、常に起動します。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Focus window</source>
        <translation>ウィンドウを前面に表示</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Launch app</source>
        <translation>アプリを起動</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Launch Prefix</source>
        <translation>起動コマンドの接頭辞</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Custom app launcher to use. Affects applications as well as their sub-actions.</source>
        <translation>アプリの起動に使うカスタムコマンドです。アプリ本体とサブアクションに適用されます。</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+9"/>
        <location line="+6"/>
        <source>Application directories</source>
        <translation>アプリのフォルダー</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Directories applications are sourced from. The list cannot be modified directly. In order to do so, you need to append additonal paths to the &lt;b&gt;XDG_DATA_DIRS&lt;/b&gt; environment variables.</source>
        <translation>アプリの読み込み元フォルダーです。この一覧は直接編集できません。追加するには環境変数&lt;b&gt;XDG_DATA_DIRS&lt;/b&gt;にパスを追加してください。</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Directories applications are sourced from.</source>
        <translation>アプリの読み込み元フォルダーです。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Directories applications are sourced from. System directories are always scanned and cannot be removed.</source>
        <translation>アプリの読み込み元フォルダーです。システムフォルダーは常に検索され、除外できません。</translation>
    </message>
</context>
<context>
    <name>AppRootItem</name>
    <message>
        <location filename="../src/root-search/apps/app-root-provider.cpp" line="+18"/>
        <location line="+24"/>
        <source>Application</source>
        <translation>アプリ</translation>
    </message>
    <message>
        <location line="-9"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Where</source>
        <translation>場所</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Opens in terminal</source>
        <translation>ターミナルで開く</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Yes</source>
        <translation>はい</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>No</source>
        <translation>いいえ</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Open Application</source>
        <translation>アプリを開く</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy App ID</source>
        <translation>アプリIDをコピー</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy App Location</source>
        <translation>アプリの場所をコピー</translation>
    </message>
</context>
<context>
    <name>AppRootProvider</name>
    <message>
        <location line="+94"/>
        <source>Applications</source>
        <translation>アプリ</translation>
    </message>
</context>
<context>
    <name>AppSelectorModel</name>
    <message>
        <location filename="../src/ui/views/app-selector-model.cpp" line="+18"/>
        <location line="+49"/>
        <source>%1 (Default)</source>
        <translation>%1（既定）</translation>
    </message>
</context>
<context>
    <name>AppearanceSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/AppearanceSettingsPage.qml" line="+35"/>
        <location line="+7"/>
        <source>Theme</source>
        <translation>テーマ</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Font</source>
        <translation>フォント</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Font size</source>
        <translation>フォントサイズ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The base point size used to compute font sizes. Fractional values are accepted. Recommended range is [10.0;12.0].</source>
        <translation>フォントサイズの基準となるポイント数です。小数も指定できます。推奨範囲は10.0～12.0です。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>e.g. 11</source>
        <translation>例：11</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Icon Theme</source>
        <translation>アイコンテーマ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The icon theme used for system icons (applications, mime types, folder icons...). Does not affect builtin Vicinae icons.</source>
        <translation>システムのアイコン（アプリ、MIMEタイプ、フォルダーなど）に使うテーマです。Vicinae内蔵のアイコンには影響しません。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Window</source>
        <translation>ウィンドウ</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Window material</source>
        <translation>ウィンドウの背景効果</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Background material applied to the launcher window. Lower the window opacity to see it.</source>
        <translation>ランチャーの背景に適用する効果です。不透明度を下げると見えるようになります。</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Window opacity</source>
        <translation>ウィンドウの不透明度</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>e.g. 1.0</source>
        <translation>例：1.0</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Compact mode</source>
        <translation>コンパクトモード</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show only the search bar at root; expand when a query is entered.</source>
        <translation>メイン画面では検索欄だけを表示し、入力すると展開します。</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Floating status bar</source>
        <translation>ステータスバーを重ねて表示</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Let the status bar float over the content, which stays slightly visible under it. Disable to keep the content strictly above the status bar.</source>
        <translation>ステータスバーをコンテンツに重ね、背後の内容を薄く表示します。無効にするとコンテンツはステータスバーの上端まで表示されます。</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Use layer shell</source>
        <translation>レイヤーシェルを使用</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Anchor the launcher as a Wayland layer surface (wlr-layer-shell) instead of a regular window. May require reopening Vicinae to fully apply.</source>
        <translation>通常のウィンドウの代わりに、Waylandのレイヤーサーフェス（wlr-layer-shell）としてランチャーを配置します。完全に反映するにはVicinaeを開き直す必要がある場合があります。</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Client-side decorations</source>
        <translation>アプリ側でウィンドウを装飾</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Let Vicinae draw its own rounded borders and shadow instead of relying on the windowing system.</source>
        <translation>ウィンドウシステムに任せず、Vicinaeが角丸の枠線と影を描画します。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Corner rounding</source>
        <translation>角の丸み</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Radius of the launcher window corners, in pixels.</source>
        <translation>ランチャーウィンドウの角の半径（ピクセル）です。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>e.g. 10</source>
        <translation>例：10</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Border width</source>
        <translation>枠線の太さ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Thickness of the launcher window border, in pixels.</source>
        <translation>ランチャーウィンドウの枠線の太さ（ピクセル）です。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>e.g. 3</source>
        <translation>例：3</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Shadow size</source>
        <translation>影のサイズ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Size of the drop shadow cast by the launcher window, in pixels.</source>
        <translation>ランチャーウィンドウの影の大きさ（ピクセル）です。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>e.g. 12</source>
        <translation>例：12</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Native font rendering</source>
        <translation>OS標準のフォント描画</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use the platform&apos;s native text rendering for system-consistent text. Disable for Qt distance-field rendering (usually faster). May require reopening Vicinae to fully apply.</source>
        <translation>OS標準の文字描画を使い、システムと表示を統一します。無効にするとQtのディスタンスフィールド描画（通常はこちらが高速）を使います。完全に反映するにはVicinaeを開き直す必要がある場合があります。</translation>
    </message>
</context>
<context>
    <name>AppleShortcutRootItem</name>
    <message>
        <location filename="../src/root-search/apple-shortcuts/apple-shortcut-root-provider.cpp" line="+66"/>
        <location line="+3"/>
        <source>Apple Shortcut</source>
        <translation>Appleのショートカット</translation>
    </message>
</context>
<context>
    <name>AppleShortcutRootProvider</name>
    <message>
        <location line="+30"/>
        <source>Could not load Apple Shortcuts</source>
        <translation>Appleのショートカットを読み込めませんでした</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Apple Shortcuts</source>
        <translation>Appleのショートカット</translation>
    </message>
</context>
<context>
    <name>AppleShortcuts</name>
    <message>
        <location filename="../src/services/apple-shortcuts/apple-shortcuts.mm" line="+36"/>
        <source>Allow Vicinae to control Shortcuts Events in System Settings &gt; Privacy &amp; Security &gt; Automation.</source>
        <translation>「システム設定」&gt;「プライバシーとセキュリティ」&gt;「オートメーション」で、VicinaeによるShortcuts Eventsの制御を許可してください。</translation>
    </message>
    <message>
        <location line="+31"/>
        <location line="+40"/>
        <source>Shortcuts Events is unavailable.</source>
        <translation>Shortcuts Eventsを利用できません。</translation>
    </message>
    <message>
        <location line="-30"/>
        <source>Could not read Apple Shortcuts.</source>
        <translation>Appleのショートカットを読み取れませんでした。</translation>
    </message>
</context>
<context>
    <name>AttachmentCard</name>
    <message>
        <location filename="../src/ui/qml/attachments/AttachmentCard.qml" line="+79"/>
        <source>Preparing…</source>
        <translation>準備中…</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Remove %1</source>
        <translation>%1を削除</translation>
    </message>
</context>
<context>
    <name>AttachmentContent</name>
    <message>
        <location filename="../src/ui/quick/attachment-content.cpp" line="+17"/>
        <source>The original file is no longer available.</source>
        <translation>元のファイルは利用できなくなりました。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Could not copy the file.</source>
        <translation>ファイルをコピーできませんでした。</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Could not copy the attachment contents.</source>
        <translation>添付ファイルの内容をコピーできませんでした。</translation>
    </message>
</context>
<context>
    <name>AttachmentDropArea</name>
    <message>
        <location filename="../src/ui/qml/attachments/AttachmentDropArea.qml" line="+26"/>
        <source>Drop images or text files</source>
        <translation>画像やテキストファイルをドロップ</translation>
    </message>
</context>
<context>
    <name>AttachmentMenu</name>
    <message>
        <location filename="../src/ui/qml/attachments/AttachmentMenu.qml" line="+16"/>
        <source>Preview Image</source>
        <translation>画像をプレビュー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy File</source>
        <translation>ファイルをコピー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy Image</source>
        <translation>画像をコピー</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Copy Text</source>
        <translation>テキストをコピー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Remove Attachment</source>
        <translation>添付ファイルを削除</translation>
    </message>
</context>
<context>
    <name>AttachmentModel</name>
    <message>
        <location filename="../src/ui/quick/attachment-model.cpp" line="+60"/>
        <source>You can attach up to %1 files per message.</source>
        <translation>1メッセージあたり最大%1個のファイルを添付できます。</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Text attachments must total less than %1 KB per message.</source>
        <translation>テキスト添付は1メッセージあたり合計%1KB未満にする必要があります。</translation>
    </message>
    <message>
        <location line="+52"/>
        <source>Pasted image</source>
        <translation>貼り付けた画像</translation>
    </message>
    <message>
        <location line="+42"/>
        <source>This image could not be read.</source>
        <translation>この画像を読み取れませんでした。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>This image could not be prepared.</source>
        <translation>この画像を準備できませんでした。</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Choose an image or a text file.</source>
        <translation>画像またはテキストファイルを選択してください。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>This file could not be opened.</source>
        <translation>このファイルを開けませんでした。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Files must be smaller than %1 MB.</source>
        <translation>ファイルは%1MB未満にしてください。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>This file could not be read.</source>
        <translation>このファイルを読み取れませんでした。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>This file is too large.</source>
        <translation>このファイルは大きすぎます。</translation>
    </message>
    <message>
        <location line="+14"/>
        <location line="+8"/>
        <source>Only images and UTF-8 text files are supported.</source>
        <translation>画像とUTF-8のテキストファイルのみ対応しています。</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Text files must be smaller than %1 KB.</source>
        <translation>テキストファイルは%1KB未満にしてください。</translation>
    </message>
</context>
<context>
    <name>AudioCppFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="+249"/>
        <source>Keep models loaded</source>
        <translation>モデルをメモリに保持</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>How long a model stays in memory after its last use.</source>
        <translation>最後に使用した後、モデルをどのくらいメモリに保持するかです。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Unload immediately</source>
        <translation>すぐにアンロード</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 minute</source>
        <translation>1分</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>5 minutes</source>
        <translation>5分</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>15 minutes</source>
        <translation>15分</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Until Vicinae quits</source>
        <translation>Vicinaeが終了するまで</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Run models on</source>
        <translation>モデルの実行デバイス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Falls back to the CPU when no compatible GPU is available.</source>
        <translation>互換性のあるGPUがない場合はCPUにフォールバックします。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>GPU</source>
        <translation>GPU</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>CPU</source>
        <translation>CPU</translation>
    </message>
</context>
<context>
    <name>AvailableFallbackSection</name>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-model.cpp" line="+50"/>
        <source>Enable fallback</source>
        <translation>フォールバックを有効にする</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-model.hpp" line="+49"/>
        <source>Available</source>
        <translation>利用可能</translation>
    </message>
</context>
<context>
    <name>BashRun</name>
    <message>
        <location filename="../src/builtins/system/bash-tool.cpp" line="-28"/>
        <source>Command timed out.</source>
        <translation>コマンドがタイムアウトしました。</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Could not start Bash: %1</source>
        <translation>Bashを開始できませんでした：%1</translation>
    </message>
    <message>
        <location line="+57"/>
        <source>
[Output truncated at 64 KiB]</source>
        <translation>
[出力は64KiBで切り詰められました]</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Command crashed.</source>
        <translation>コマンドがクラッシュしました。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Exit code %1</source>
        <translation>終了コード%1</translation>
    </message>
</context>
<context>
    <name>BashTool</name>
    <message>
        <location line="+64"/>
        <source>Enter a Bash command without NUL characters.</source>
        <translation>NUL文字を含まないBashコマンドを入力してください。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>The timeout must be between 1 and 120000 milliseconds.</source>
        <translation>タイムアウトは1〜120000ミリ秒の範囲で指定してください。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>The working directory must be an existing absolute path.</source>
        <translation>作業ディレクトリには、存在する絶対パスを指定してください。</translation>
    </message>
</context>
<context>
    <name>BringToWorkspaceAction</name>
    <message>
        <location filename="../src/actions/window-actions.hpp" line="+72"/>
        <source>Bring to current workspace</source>
        <translation>現在のワークスペースに移動</translation>
    </message>
</context>
<context>
    <name>BrowseAppsPreferences</name>
    <message>
        <location filename="../src/builtins/system/browse-apps-preferences.hpp" line="+13"/>
        <source>Sort alphabetically</source>
        <translation>名前順に並べ替え</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show hidden apps</source>
        <translation>非表示のアプリを表示</translation>
    </message>
</context>
<context>
    <name>BrowseAppsSection</name>
    <message>
        <location filename="../src/builtins/system/browse-apps-model.cpp" line="+19"/>
        <source>Hidden</source>
        <translation>非表示</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Open Application</source>
        <translation>アプリを開く</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Copy App ID</source>
        <translation>アプリIDをコピー</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy App Location</source>
        <translation>アプリの場所をコピー</translation>
    </message>
    <message>
        <location filename="../src/builtins/system/browse-apps-model.hpp" line="+32"/>
        <source>Applications ({count})</source>
        <translation>アプリ（{count}）</translation>
    </message>
</context>
<context>
    <name>BrowseAppsViewHost</name>
    <message>
        <location filename="../src/builtins/system/browse-apps-view-host.cpp" line="+13"/>
        <source>Search apps...</source>
        <translation>アプリを検索...</translation>
    </message>
</context>
<context>
    <name>BrowseFontsCommand</name>
    <message>
        <location filename="../src/builtins/font/browse-fonts-command.hpp" line="+8"/>
        <source>Search Fonts</source>
        <translation>フォントを検索</translation>
    </message>
</context>
<context>
    <name>BrowserBookmarksSection</name>
    <message>
        <location filename="../src/builtins/browser/browser-bookmarks-model.cpp" line="+38"/>
        <source>Copy URL</source>
        <translation>URLをコピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy Title</source>
        <translation>タイトルをコピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Convert to shortcut</source>
        <translation>ショートカットに変換</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Hide Details</source>
        <translation>詳細を隠す</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Show Details</source>
        <translation>詳細を表示</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Delete Bookmark</source>
        <translation>ブックマークを削除</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Delete bookmark?</source>
        <translation>ブックマークを削除しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>&quot;%1&quot; will be removed from your browser. This cannot be undone.</source>
        <translation>「%1」をブラウザーから削除します。この操作は取り消せません。</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to delete bookmark: %1</source>
        <translation>ブックマークを削除できませんでした：%1</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Bookmark deleted</source>
        <translation>ブックマークを削除しました</translation>
    </message>
    <message>
        <location filename="../src/builtins/browser/browser-bookmarks-model.hpp" line="+21"/>
        <source>Bookmarks ({count})</source>
        <translation>ブックマーク ({count})</translation>
    </message>
</context>
<context>
    <name>BrowserBookmarksView</name>
    <message>
        <location filename="../src/ui/qml/views/BrowserBookmarksView.qml" line="+27"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>BrowserBookmarksViewHost</name>
    <message>
        <location filename="../src/builtins/browser/browser-bookmarks-view-host.cpp" line="+59"/>
        <source>Search bookmarks...</source>
        <translation>ブックマークを検索...</translation>
    </message>
    <message>
        <location line="+75"/>
        <source>All Bookmarks</source>
        <translation>すべてのブックマーク</translation>
    </message>
    <message>
        <location line="+50"/>
        <source>Title</source>
        <translation>タイトル</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Folder</source>
        <translation>フォルダー</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Added</source>
        <translation>追加日</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Bookmark access needed</source>
        <translation>ブックマークへのアクセスが必要です</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browser extension update needed</source>
        <translation>ブラウザー拡張機能の更新が必要です</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>No browser connected</source>
        <translation>ブラウザーが接続されていません</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Allow the Vicinae browser extension to read your bookmarks. Your browser will ask you to confirm.</source>
        <translation>Vicinaeブラウザー拡張機能によるブックマークの読み取りを許可します。ブラウザーで確認を求められます。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Update the Vicinae browser extension to search your bookmarks.</source>
        <translation>ブックマークを検索するには、Vicinaeブラウザー拡張機能を更新してください。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You need to connect at least one browser to vicinae using the browser extension in order to use this command.</source>
        <translation>このコマンドを使うには、ブラウザー拡張機能で少なくとも1つのブラウザーをVicinaeに接続してください。</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Allow in %1</source>
        <translation>%1で許可</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Failed to request access: %1</source>
        <translation>アクセス権を要求できませんでした：%1</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Check your browser to allow access</source>
        <translation>アクセスを許可するにはブラウザーで確認してください</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Open documentation</source>
        <translation>ドキュメントを開く</translation>
    </message>
</context>
<context>
    <name>BrowserExtension</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.hpp" line="+12"/>
        <source>Browser Extension</source>
        <translation>ブラウザー拡張機能</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Browser extension related commands.</source>
        <translation>ブラウザー拡張機能に関するコマンドです。</translation>
    </message>
</context>
<context>
    <name>BrowserHistorySection</name>
    <message>
        <location filename="../src/builtins/browser/browser-history-model.cpp" line="+36"/>
        <source>Copy URL</source>
        <translation>URLをコピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy Title</source>
        <translation>タイトルをコピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Convert to shortcut</source>
        <translation>ショートカットに変換</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Hide Details</source>
        <translation>詳細を隠す</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Show Details</source>
        <translation>詳細を表示</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Delete from History</source>
        <translation>履歴から削除</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Delete from history?</source>
        <translation>履歴から削除しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Every visit to %1 will be removed from your browser history. This cannot be undone.</source>
        <translation>%1へのアクセス履歴をすべてブラウザーから削除します。この操作は取り消せません。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to delete from history: %1</source>
        <translation>履歴から削除できませんでした：%1</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Deleted from history</source>
        <translation>履歴から削除しました</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Clear Browser History</source>
        <translation>ブラウザーの履歴を消去</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Browser is no longer connected</source>
        <translation>ブラウザーとの接続が切断されました</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Clear all %1 history?</source>
        <translation>%1の履歴をすべて消去しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Your entire browsing history in %1 will be deleted. This cannot be undone.</source>
        <translation>%1でのブラウジング履歴をすべて削除します。この操作は取り消せません。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to clear history: %1</source>
        <translation>履歴を消去できませんでした：%1</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>History cleared</source>
        <translation>履歴を消去しました</translation>
    </message>
    <message>
        <location filename="../src/builtins/browser/browser-history-model.hpp" line="+22"/>
        <source>History ({count}+)</source>
        <translation>履歴 ({count}+)</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>History ({count})</source>
        <translation>履歴 ({count})</translation>
    </message>
</context>
<context>
    <name>BrowserHistoryView</name>
    <message>
        <location filename="../src/ui/qml/views/BrowserHistoryView.qml" line="+27"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>BrowserHistoryViewHost</name>
    <message>
        <location filename="../src/builtins/browser/browser-history-view-host.cpp" line="+31"/>
        <source>Search history...</source>
        <translation>履歴を検索...</translation>
    </message>
    <message>
        <location line="+104"/>
        <source>Title</source>
        <translation>タイトル</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Last Visited</source>
        <translation>最終アクセス</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Visits</source>
        <translation>アクセス回数</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>History access needed</source>
        <translation>履歴へのアクセスが必要です</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browser extension update needed</source>
        <translation>ブラウザー拡張機能の更新が必要です</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>No browser connected</source>
        <translation>ブラウザーが接続されていません</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Allow the Vicinae browser extension to read your browsing history. Your browser will ask you to confirm.</source>
        <translation>Vicinaeブラウザー拡張機能による閲覧履歴の読み取りを許可します。ブラウザーで確認を求められます。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Update the Vicinae browser extension to search your browsing history.</source>
        <translation>閲覧履歴を検索するには、Vicinaeブラウザー拡張機能を更新してください。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You need to connect at least one browser to vicinae using the browser extension in order to use this command.</source>
        <translation>このコマンドを使うには、ブラウザー拡張機能で少なくとも1つのブラウザーをVicinaeに接続してください。</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Allow in %1</source>
        <translation>%1で許可</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Failed to request access: %1</source>
        <translation>アクセス権を要求できませんでした：%1</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Check your browser to allow access</source>
        <translation>アクセスを許可するにはブラウザーで確認してください</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Open documentation</source>
        <translation>ドキュメントを開く</translation>
    </message>
</context>
<context>
    <name>BrowserTabActionGenerator</name>
    <message>
        <location filename="../src/actions/browser-tab-actions.hpp" line="+24"/>
        <source>Switch to tab</source>
        <translation>タブに切り替え</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to switch to tab: %1</source>
        <translation>タブを切り替えられませんでした：%1</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Convert to shortcut</source>
        <translation>ショートカットに変換</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Close tab</source>
        <translation>タブを閉じる</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Failed to close tab: %1</source>
        <translation>タブを閉じられませんでした：%1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy URL</source>
        <translation>URLをコピー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy Title</source>
        <translation>タイトルをコピー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy ID</source>
        <translation>IDをコピー</translation>
    </message>
</context>
<context>
    <name>BrowserTabProvider</name>
    <message>
        <location filename="../src/root-search/browser-tabs/browser-tabs-provider.hpp" line="+69"/>
        <source>Browser Tabs</source>
        <translation>ブラウザーのタブ</translation>
    </message>
</context>
<context>
    <name>BrowserTabRootItem</name>
    <message>
        <location line="-51"/>
        <source>Browser Tab</source>
        <translation>ブラウザーのタブ</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Tab</source>
        <translation>タブ</translation>
    </message>
</context>
<context>
    <name>BrowserTabsSection</name>
    <message>
        <location filename="../src/builtins/browser/browser-tabs-model.cpp" line="+13"/>
        <source>Muted</source>
        <translation>ミュート中</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Playing</source>
        <translation>再生中</translation>
    </message>
    <message>
        <location filename="../src/builtins/browser/browser-tabs-model.hpp" line="+22"/>
        <source>Playing Media ({count})</source>
        <translation>再生中のメディア（{count}）</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Tabs ({count})</source>
        <translation>タブ（{count}）</translation>
    </message>
</context>
<context>
    <name>BrowserTabsViewHost</name>
    <message>
        <location filename="../src/builtins/browser/browser-tabs-view-host.cpp" line="+12"/>
        <source>Search, focus and close tabs</source>
        <translation>タブの検索・切り替え・終了</translation>
    </message>
</context>
<context>
    <name>BuiltinIconsSection</name>
    <message>
        <location filename="../src/builtins/vicinae/builtin-icons-model.cpp" line="+15"/>
        <source>Copy Icon Name</source>
        <translation>アイコン名をコピー</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/builtin-icons-model.hpp" line="+20"/>
        <source>Icons ({count})</source>
        <translation>アイコン（{count}）</translation>
    </message>
</context>
<context>
    <name>BuiltinIconsViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/builtin-icons-view-host.cpp" line="+10"/>
        <source>Search icons...</source>
        <translation>アイコンを検索...</translation>
    </message>
</context>
<context>
    <name>CalcHistoryListView</name>
    <message>
        <location filename="../src/ui/qml/views/CalcHistoryListView.qml" line="+13"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>CalcHistorySection</name>
    <message>
        <location filename="../src/builtins/calculator/calc-history-model.cpp" line="+39"/>
        <source>Copy answer</source>
        <translation>計算結果をコピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy question</source>
        <translation>計算式をコピー</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy question and answer</source>
        <translation>計算式と結果をコピー</translation>
    </message>
</context>
<context>
    <name>CalcHistoryViewHost</name>
    <message>
        <location filename="../src/builtins/calculator/calc-history-view-host.cpp" line="+92"/>
        <source>Search past calculations...</source>
        <translation>過去の計算を検索...</translation>
    </message>
</context>
<context>
    <name>CalcLiveSection</name>
    <message>
        <location line="-14"/>
        <source>Copy unformatted answer</source>
        <translation>書式なしで計算結果をコピー</translation>
    </message>
    <message>
        <location filename="../src/builtins/calculator/calc-history-view-host.hpp" line="+28"/>
        <source>Calculator</source>
        <translation>電卓</translation>
    </message>
</context>
<context>
    <name>CalculatorExtension</name>
    <message>
        <location filename="../src/builtins/calculator/calculator-extension.hpp" line="+95"/>
        <source>Calculator</source>
        <translation>電卓</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Do maths, convert units or search past calculations...</source>
        <translation>計算、単位の変換、過去の計算の検索...</translation>
    </message>
</context>
<context>
    <name>CalculatorHistoryCommand</name>
    <message>
        <location line="-78"/>
        <source>Calculator history</source>
        <translation>計算履歴</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browse past calculations. You need to copy the result of a calculation for it to be saved in history.</source>
        <translation>過去の計算を表示します。計算結果をコピーすると履歴に保存されます。</translation>
    </message>
</context>
<context>
    <name>CalculatorPreferences</name>
    <message>
        <location line="+56"/>
        <source>Calculator Backend</source>
        <translation>計算エンジン</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Which backend to use to perform calculations</source>
        <translation>計算に使用するエンジン</translation>
    </message>
</context>
<context>
    <name>CalculatorRefreshRatesCommand</name>
    <message>
        <location line="-46"/>
        <source>Refresh Exchange Rates</source>
        <translation>為替レートを更新</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Refresh exchange rates used by the calculator to provide currency conversion features. Not all backends may support currency conversions or manually refreshing the rates.</source>
        <translation>通貨換算に使う為替レートを更新します。通貨換算やレートの手動更新に対応していない計算エンジンもあります。</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>%1 can&apos;t refresh rates</source>
        <translation>%1は為替レートを更新できません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Refreshing rates...</source>
        <translation>為替レートを更新中...</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Rates successfully refreshed</source>
        <translation>為替レートを更新しました</translation>
    </message>
</context>
<context>
    <name>CalculatorResultDelegate</name>
    <message>
        <location filename="../src/ui/qml/list/CalculatorResultDelegate.qml" line="+61"/>
        <source>Expression</source>
        <translation>計算式</translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Result</source>
        <translation>結果</translation>
    </message>
</context>
<context>
    <name>CalculatorService</name>
    <message>
        <location filename="../src/services/calculator-service/calculator-service.cpp" line="+125"/>
        <source>Pinned</source>
        <translation>ピン留め済み</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Today</source>
        <translation>今日</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>This week</source>
        <translation>今週</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>This month</source>
        <translation>今月</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>This year</source>
        <translation>今年</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>A few years ago</source>
        <translation>数年前</translation>
    </message>
</context>
<context>
    <name>ChangeEmojiSkinToneAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="+102"/>
        <source>%1 skin tone</source>
        <translation>肌の色：%1</translation>
    </message>
</context>
<context>
    <name>ChatComposer</name>
    <message>
        <location filename="../src/ui/qml/controls/ChatComposer.qml" line="+202"/>
        <source>Attach images or text files</source>
        <translation>画像やテキストファイルを添付</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Choose a model</source>
        <translation>モデルを選択</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Stop response</source>
        <translation>応答を停止</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Send message</source>
        <translation>メッセージを送信</translation>
    </message>
</context>
<context>
    <name>ChatConversation</name>
    <message>
        <location filename="../src/ui/qml/chat/ChatConversation.qml" line="+63"/>
        <source>Find in conversation…</source>
        <translation>会話内を検索…</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Add an AI provider to start a conversation.</source>
        <translation>会話を始めるにはAIプロバイダーを追加してください。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Set up AI</source>
        <translation>AIをセットアップ</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>Message…</source>
        <translation>メッセージ…</translation>
    </message>
</context>
<context>
    <name>ChatDocumentBlock</name>
    <message numerus="yes">
        <location filename="../src/ui/qml/views/ChatDocumentBlock.qml" line="+120"/>
        <source>%n tool calls</source>
        <translation>
            <numerusform>%n回のツール呼び出し</numerusform>
        </translation>
    </message>
    <message>
        <location line="+1"/>
        <source>%1 · %2</source>
        <translation>%1 · %2</translation>
    </message>
    <message>
        <location line="+55"/>
        <source>Thinking</source>
        <translation>思考中</translation>
    </message>
</context>
<context>
    <name>ChatGreeting</name>
    <message>
        <location filename="../src/ui/qml/views/ChatGreeting.qml" line="+12"/>
        <source>Still up? 🌙</source>
        <translation>まだ起きてる？🌙</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Hello, night owl 🦉</source>
        <translation>こんばんは、夜ふかしさん🦉</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Good morning ☀️</source>
        <translation>おはようございます☀️</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Morning ☕</source>
        <translation>おはよう☕</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Hello 👋</source>
        <translation>こんにちは👋</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Good afternoon 👋</source>
        <translation>こんにちは👋</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Afternoon!</source>
        <translation>こんにちは！</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Good evening 👋</source>
        <translation>こんばんは👋</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Evening!</source>
        <translation>こんばんは！</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Choose a model to start chatting.</source>
        <translation>チャットを始めるにはモデルを選択してください。</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Send a message to start a conversation.</source>
        <translation>メッセージを送信して会話を始めましょう。</translation>
    </message>
</context>
<context>
    <name>ChatSession</name>
    <message>
        <location filename="../src/builtins/ai/chat-session.cpp" line="+100"/>
        <source>Could not open conversation.</source>
        <translation>会話を開けませんでした。</translation>
    </message>
    <message>
        <location line="+100"/>
        <source>This conversation was deleted.</source>
        <translation>この会話は削除されました。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Choose a model that supports images for this conversation.</source>
        <translation>この会話では、画像に対応したモデルを選択してください。</translation>
    </message>
    <message>
        <location line="+194"/>
        <source>Load Tools</source>
        <translation>ツールを読み込む</translation>
    </message>
    <message>
        <location line="+143"/>
        <source>This response was interrupted.</source>
        <translation>この応答は中断されました。</translation>
    </message>
    <message>
        <location filename="../src/builtins/ai/chat-session.hpp" line="+78"/>
        <source>New chat</source>
        <translation>新規チャット</translation>
    </message>
</context>
<context>
    <name>ChatSidebar</name>
    <message>
        <location filename="../src/ui/qml/chat/ChatSidebar.qml" line="+78"/>
        <source>Hide sidebar</source>
        <translation>サイドバーを隠す</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Search conversations</source>
        <translation>会話を検索</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>New chat</source>
        <translation>新規チャット</translation>
    </message>
    <message>
        <location line="+96"/>
        <source>Conversation title</source>
        <translation>会話タイトル</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Rename…</source>
        <translation>名前を変更…</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Delete…</source>
        <translation>削除…</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Your conversations will appear here.</source>
        <translation>会話がここに表示されます。</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>AI settings</source>
        <translation>AI設定</translation>
    </message>
</context>
<context>
    <name>ChatTranscript</name>
    <message>
        <location filename="../src/ui/qml/views/ChatTranscript.qml" line="+161"/>
        <source>Jump to latest</source>
        <translation>最新に移動</translation>
    </message>
</context>
<context>
    <name>ChatWindow</name>
    <message>
        <location filename="../src/ui/qml/chat/ChatWindow.qml" line="+23"/>
        <source>%1 — Vicinae</source>
        <translation>%1 — Vicinae</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>AI Chat — Vicinae</source>
        <translation>AIチャット — Vicinae</translation>
    </message>
    <message>
        <location line="+107"/>
        <source>Show sidebar</source>
        <translation>サイドバーを表示</translation>
    </message>
    <message>
        <location line="+13"/>
        <location line="+19"/>
        <source>New chat</source>
        <translation>新規チャット</translation>
    </message>
    <message>
        <location line="-18"/>
        <source>Conversation title</source>
        <translation>会話タイトル</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Conversation actions</source>
        <translation>会話のアクション</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Find in conversation…</source>
        <translation>会話内を検索…</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Rename…</source>
        <translation>名前を変更…</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Delete…</source>
        <translation>削除…</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Dismiss</source>
        <translation>閉じる</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Delete conversation?</source>
        <translation>会話を削除しますか？</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>“%1” and its attachments will be permanently deleted.</source>
        <translation>「%1」とその添付ファイルを完全に削除します。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Delete</source>
        <translation>削除</translation>
    </message>
    <message>
        <location filename="../src/ui/windows/chat-window.cpp" line="+158"/>
        <source>Could not delete conversation.</source>
        <translation>会話を削除できませんでした。</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Could not open conversation search.</source>
        <translation>会話の検索を開けませんでした。</translation>
    </message>
</context>
<context>
    <name>ClaudeCodeFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="-81"/>
        <source>Executable</source>
        <translation>実行ファイル</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Path to the codex executable. Leave empty to find it automatically.</source>
        <translation>codex実行ファイルのパスです。空欄にすると自動的に検出します。</translation>
    </message>
</context>
<context>
    <name>ClearBrowserHistoryCommand</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.cpp" line="+128"/>
        <source>Clear Browser History</source>
        <translation>ブラウザーの履歴を消去</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Clear the browsing history of all connected browsers that allowed history access</source>
        <translation>履歴アクセスを許可している接続中のすべてのブラウザーの閲覧履歴を消去します</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>No browser connected</source>
        <translation>ブラウザーが接続されていません</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>No browser allowed history access</source>
        <translation>履歴アクセスを許可しているブラウザーがありません</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Clear browser history?</source>
        <translation>ブラウザーの履歴を消去しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Your entire browsing history in %1 will be deleted. This cannot be undone.</source>
        <translation>%1でのブラウジング履歴をすべて削除します。この操作は取り消せません。</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Failed to clear history: %1</source>
        <translation>履歴を消去できませんでした：%1</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>History cleared</source>
        <translation>履歴を消去しました</translation>
    </message>
</context>
<context>
    <name>ClearClipboardHistoryCommand</name>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-extension.cpp" line="+38"/>
        <source>Clear Clipboard History</source>
        <translation>クリップボード履歴を消去</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clear the clipboard history</source>
        <translation>クリップボードの履歴を消去します</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Are you sure?</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Your clipboard history will be gone forever :(</source>
        <translation>クリップボード履歴は完全に削除されます :(</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to clear clipboard history</source>
        <translation>クリップボード履歴を消去できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Clipboard history cleared</source>
        <translation>クリップボード履歴を消去しました</translation>
    </message>
</context>
<context>
    <name>ClipboardClearCommand</name>
    <message>
        <location line="-43"/>
        <source>Clear Current Clipboard Data</source>
        <translation>現在のクリップボードを消去</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clear the current content of the clipboard</source>
        <translation>クリップボードの現在の内容を消去します</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to clear clipboard</source>
        <translation>クリップボードを消去できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Clipboard cleared</source>
        <translation>クリップボードを消去しました</translation>
    </message>
</context>
<context>
    <name>ClipboardExtension</name>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-extension.hpp" line="+13"/>
        <source>Clipboard</source>
        <translation>クリップボード</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>System clipboard integration</source>
        <translation>システムのクリップボードとの連携</translation>
    </message>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-extension.cpp" line="+37"/>
        <source>Search Clipboard History</source>
        <translation>クリップボード履歴を検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Find entries in your clipboard history.</source>
        <translation>クリップボード履歴のエントリを検索します。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Read Clipboard Entry</source>
        <translation>クリップボードのエントリを読み取る</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Read the full text of a clipboard history entry.</source>
        <translation>クリップボード履歴のエントリの全文を読み取ります。</translation>
    </message>
</context>
<context>
    <name>ClipboardHistoryCommand</name>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-history-command.hpp" line="+12"/>
        <source>Clipboard History</source>
        <translation>クリップボード履歴</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browse your clipboard&apos;s history, pin, edit and remove entries.</source>
        <translation>クリップボード履歴を表示し、項目のピン留め・編集・削除を行います。</translation>
    </message>
</context>
<context>
    <name>ClipboardHistoryPreferences</name>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-preferences.hpp" line="+115"/>
        <source>Default Action</source>
        <translation>既定のアクション</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The default action to perform on pressing return. Paste is only available if your environment supports it.</source>
        <translation>Enterを押したときに実行するアクションです。貼り付けは対応する環境でのみ使えます。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Paste</source>
        <translation>貼り付け</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
</context>
<context>
    <name>ClipboardHistorySection</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-model.cpp" line="+43"/>
        <source>Failed to read clipboard data</source>
        <translation>クリップボードのデータを読み取れませんでした</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Open Settings</source>
        <translation>設定を開く</translation>
    </message>
    <message>
        <location line="+84"/>
        <source>Open</source>
        <translation>開く</translation>
    </message>
</context>
<context>
    <name>ClipboardHistoryView</name>
    <message>
        <location filename="../src/ui/qml/views/ClipboardHistoryView.qml" line="+205"/>
        <source>Type</source>
        <translation>種類</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copied at</source>
        <translation>コピー日時</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Preview not available for this content type</source>
        <translation>この種類の内容はプレビューできません</translation>
    </message>
</context>
<context>
    <name>ClipboardHistoryViewHost</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-view-host.cpp" line="+75"/>
        <source>All</source>
        <translation>すべて</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Text</source>
        <translation>テキスト</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Images</source>
        <translation>画像</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Links</source>
        <translation>リンク</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Files</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Browse clipboard history...</source>
        <translation>クリップボード履歴を検索...</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Clipboard monitoring unavailable</source>
        <translation>クリップボードの監視を利用できません</translation>
    </message>
    <message>
        <location line="+84"/>
        <source>Pause clipboard</source>
        <translation>クリップボードの記録を一時停止</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Resume clipboard</source>
        <translation>クリップボードの記録を再開</translation>
    </message>
    <message numerus="yes">
        <location line="+8"/>
        <source>%n Items</source>
        <translation>
            <numerusform>%n件</numerusform>
        </translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Decryption failed</source>
        <translation>復号できませんでした</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Vicinae could not decrypt the data for this selection. It was most likely encrypted with a different key and cannot be recovered. You can remove this entry from the history.</source>
        <translation>この項目のデータを復号できませんでした。別の鍵で暗号化された可能性が高く、復元できません。この項目は履歴から削除できます。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Data unavailable</source>
        <translation>データを利用できません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The data for this selection could not be found on disk.</source>
        <translation>この項目のデータがディスク上に見つかりませんでした。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Data is encrypted</source>
        <translation>データは暗号化されています</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Data for this selection was previously encrypted but the clipboard is not currently configured to use encryption. You should be able to fix this by enabling it in the settings.</source>
        <translation>この項目のデータは暗号化されていますが、現在のクリップボード設定では暗号化が無効です。設定で有効にすると読み込める可能性があります。</translation>
    </message>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-view-host.hpp" line="+106"/>
        <source>Loading...</source>
        <translation>読み込み中...</translation>
    </message>
</context>
<context>
    <name>ClipboardPreferences</name>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-preferences.hpp" line="-61"/>
        <source>Clipboard monitoring</source>
        <translation>クリップボードの監視</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Whether new clipboard selections are appended to the history</source>
        <translation>クリップボードにコピーした内容を履歴に追加します</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Ignore Passwords</source>
        <translation>パスワードを除外</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Ignore selections that can be identified as a password. May not work with all apps.</source>
        <translation>パスワードと識別できる内容を除外します。一部のアプリでは機能しない場合があります。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Preserve tagged</source>
        <translation>タグ付き項目を保持</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Never evict or mass delete selections that have been explicitly tagged (pinned, custom keyword)</source>
        <translation>ピン留めや独自のキーワードを設定した項目を、自動削除や一括削除の対象から外します</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Excluded apps</source>
        <translation>除外するアプリ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Never add selections copied from these apps to the history</source>
        <translation>これらのアプリからコピーした内容は履歴に追加しません</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Eviction threshold</source>
        <translation>保持期間</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Automatically delete selections older than this threshold</source>
        <translation>この期間を過ぎた項目を自動的に削除します</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Never</source>
        <translation>なし</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>15 minutes</source>
        <translation>15分</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 hour</source>
        <translation>1時間</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 day</source>
        <translation>1日</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 week</source>
        <translation>1週間</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 month</source>
        <translation>1か月</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 year</source>
        <translation>1年</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Erase on startup</source>
        <translation>起動時に消去</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Erase clipboard history every time the vicinae server is started</source>
        <translation>Vicinaeサーバーの起動時にクリップボード履歴を消去します</translation>
    </message>
</context>
<context>
    <name>ClipboardService</name>
    <message>
        <location filename="../src/services/clipboard/clipboard-service.cpp" line="+565"/>
        <source>Image (%1x%2)</source>
        <translation>画像（%1x%2）</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Image</source>
        <translation>画像</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Unknown</source>
        <translation>不明</translation>
    </message>
</context>
<context>
    <name>CloseWindowAction</name>
    <message>
        <location filename="../src/actions/window-actions.hpp" line="-37"/>
        <source>Close window</source>
        <translation>ウィンドウを閉じる</translation>
    </message>
</context>
<context>
    <name>CodexFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="+9"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>How this server is shown in model lists.</source>
        <translation>このサーバーをモデル一覧に表示するときの名前です。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Server URL</source>
        <translation>サーバーURL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The address of your llama-server instance.</source>
        <translation>llama-serverインスタンスのアドレスです。</translation>
    </message>
</context>
<context>
    <name>CommandLineSection</name>
    <message>
        <location filename="../src/builtins/system/system-run-model.cpp" line="+38"/>
        <source>Open in %1 (hold)</source>
        <translation>%1で開く（終了後も表示）</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open in %1</source>
        <translation>%1で開く</translation>
    </message>
    <message>
        <location filename="../src/builtins/system/system-run-model.hpp" line="+49"/>
        <source>Execute query</source>
        <translation>入力内容を実行</translation>
    </message>
</context>
<context>
    <name>CommandListView</name>
    <message>
        <location filename="../src/ui/qml/views/CommandListView.qml" line="+13"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>CommandRootItem</name>
    <message>
        <location filename="../src/root-search/extensions/extension-root-provider.cpp" line="+28"/>
        <location line="+49"/>
        <source>Command</source>
        <translation>コマンド</translation>
    </message>
    <message>
        <location line="-44"/>
        <location line="+28"/>
        <source>Open command</source>
        <translation>コマンドを開く</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Copy extension path</source>
        <translation>拡張機能のパスをコピー</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Internal Command</source>
        <translation>内部コマンド</translation>
    </message>
</context>
<context>
    <name>CompletionPopup</name>
    <message>
        <location filename="../src/ui/qml/controls/CompletionPopup.qml" line="+15"/>
        <source>Filter...</source>
        <translation>絞り込み...</translation>
    </message>
</context>
<context>
    <name>ConfigGlobalShortcuts</name>
    <message>
        <location filename="../src/services/global-shortcuts/config-global-shortcuts.cpp" line="+25"/>
        <source>Toggle Vicinae</source>
        <translation>Vicinaeの表示を切り替え</translation>
    </message>
</context>
<context>
    <name>ConversationHistoryCommand</name>
    <message>
        <location filename="../src/builtins/ai/ai-extension.hpp" line="-14"/>
        <source>Browse AI Conversations</source>
        <translation>AI会話を閲覧</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Reopen and continue previous AI conversations.</source>
        <translation>過去のAI会話を開き直して続きを行えます。</translation>
    </message>
</context>
<context>
    <name>ConversationHistoryViewHost</name>
    <message>
        <location filename="../src/builtins/ai/conversation-history-view-host.hpp" line="+30"/>
        <source>Filter conversations...</source>
        <translation>会話を絞り込み...</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Open Conversation</source>
        <translation>会話を開く</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Delete Conversation</source>
        <translation>会話を削除</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Could not delete conversation.</source>
        <translation>会話を削除できませんでした。</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Could not load conversations.</source>
        <translation>会話を読み込めませんでした。</translation>
    </message>
</context>
<context>
    <name>ConversationListModel</name>
    <message>
        <location filename="../src/builtins/ai/conversation-list-model.cpp" line="+29"/>
        <source>Today</source>
        <translation>今日</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Yesterday</source>
        <translation>昨日</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Previous 7 days</source>
        <translation>過去7日間</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Older</source>
        <translation>それ以前</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Could not load conversations.</source>
        <translation>会話を読み込めませんでした。</translation>
    </message>
</context>
<context>
    <name>ConversationStore</name>
    <message>
        <location filename="../src/server.cpp" line="+435"/>
        <source>Could not save conversation.</source>
        <translation>会話を保存できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/services/ai/conversation-store.cpp" line="+332"/>
        <source>Tool execution was interrupted; no result was recorded.</source>
        <translation>ツールの実行が中断されたため、結果は記録されませんでした。</translation>
    </message>
</context>
<context>
    <name>CopyCalculatorAnswerAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="+29"/>
        <source>Answer copied to clipboard</source>
        <translation>計算結果をクリップボードにコピーしました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to copy answer</source>
        <translation>計算結果をコピーできませんでした</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy Result</source>
        <translation>結果をコピー</translation>
    </message>
</context>
<context>
    <name>CopyCalculatorQuestionAndAnswerAction</name>
    <message>
        <location line="+18"/>
        <source>Answer copied to clipboard</source>
        <translation>計算結果をクリップボードにコピーしました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to copy answer</source>
        <translation>計算結果をコピーできませんでした</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy Question And Answer</source>
        <translation>計算式と結果をコピー</translation>
    </message>
</context>
<context>
    <name>CopyClipboardSelection</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="+33"/>
        <source>Selection copied to clipboard</source>
        <translation>選択した内容をクリップボードにコピーしました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to copy to clipboard</source>
        <translation>クリップボードにコピーできませんでした</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy to clipboard</source>
        <translation>クリップボードにコピー</translation>
    </message>
</context>
<context>
    <name>CopyItemDeeplink</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="+99"/>
        <source>Deeplink copied in clipboard</source>
        <translation>ディープリンクをクリップボードにコピーしました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy Deeplink</source>
        <translation>ディープリンクをコピー</translation>
    </message>
</context>
<context>
    <name>CopyShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="+269"/>
        <source>Copied to clipboard</source>
        <translation>クリップボードにコピーしました</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy shortcut</source>
        <translation>ショートカットをコピー</translation>
    </message>
</context>
<context>
    <name>CopyToClipboardAction</name>
    <message>
        <location filename="../src/actions/clipboard-actions.hpp" line="+21"/>
        <source>Copied to clipboard</source>
        <translation>クリップボードにコピーしました</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy to clipboard</source>
        <translation>クリップボードにコピー</translation>
    </message>
</context>
<context>
    <name>CreateDictationStyleCommand</name>
    <message>
        <location filename="../src/builtins/dictation/dictation-extension.hpp" line="+46"/>
        <source>Create Dictation Style</source>
        <translation>ディクテーションスタイルを作成</translation>
    </message>
</context>
<context>
    <name>CreateExtensionCommand</name>
    <message>
        <location filename="../src/builtins/developer/developer-extension.hpp" line="+10"/>
        <source>Create Extension</source>
        <translation>拡張機能を作成</translation>
    </message>
</context>
<context>
    <name>CreateExtensionFormView</name>
    <message>
        <location filename="../src/ui/qml/views/CreateExtensionFormView.qml" line="+16"/>
        <source>Author</source>
        <translation>作者</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>If you plan on submitting your extension to the &lt;a href=&quot;vicinae://launch/core/store&quot;&gt;Vicinae store&lt;/a&gt;, this must exactly match your GitHub handle. Otherwise, you can set it to anything.</source>
        <translation>拡張機能を&lt;a href=&quot;vicinae://launch/core/store&quot;&gt;Vicinae store&lt;/a&gt;に公開する場合は、GitHubのユーザー名と完全に一致させてください。それ以外の場合は自由に設定できます。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Username</source>
        <translation>ユーザー名</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Extension Title</source>
        <translation>拡張機能の名前</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>My Extension</source>
        <translation>自分の拡張機能</translation>
    </message>
    <message>
        <location line="+8"/>
        <location line="+43"/>
        <source>Description</source>
        <translation>説明</translation>
    </message>
    <message>
        <location line="-37"/>
        <source>An extension that does super cool things</source>
        <translation>便利な機能を提供する拡張機能</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Location</source>
        <translation>場所</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Command Title</source>
        <translation>コマンド名</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>My Wonderful Command</source>
        <translation>便利なコマンド</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>My command does this, and that...</source>
        <translation>このコマンドでできること...</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Template</source>
        <translation>テンプレート</translation>
    </message>
</context>
<context>
    <name>CreateExtensionSuccessViewHost</name>
    <message>
        <location filename="../src/builtins/developer/create-extension-success-view-host.cpp" line="+8"/>
        <source>
# Extension successfully created

Your new extension %1 has been succesfully created at `%2`.

For commands from this extension to be picked up by Vicinae, you need to run your extension in development mode at least once:

```bash
cd &apos;%2&apos;
npm install
npm run dev
```

You can learn more about extension development in the [Vicinae documentation](https://docs.vicinae.com/).
</source>
        <translation>
# 拡張機能を作成しました

新しい拡張機能「%1」を`%2`に作成しました。

この拡張機能のコマンドをVicinaeで認識させるには、一度は開発モードで実行する必要があります。

```bash
cd &apos;%2&apos;
npm install
npm run dev
```

拡張機能の開発については[Vicinaeのドキュメント](https://docs.vicinae.com/)を参照してください。
</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Open in %1</source>
        <translation>%1で開く</translation>
    </message>
</context>
<context>
    <name>CreateExtensionViewHost</name>
    <message>
        <location filename="../src/builtins/developer/create-extension-view-host.cpp" line="+37"/>
        <source>Create extension</source>
        <translation>拡張機能を作成</translation>
    </message>
    <message>
        <location line="+19"/>
        <location line="+4"/>
        <location line="+19"/>
        <location line="+5"/>
        <source>Min. 3 chars</source>
        <translation>3文字以上</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Min. 16 chars</source>
        <translation>16文字以上</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Must exist</source>
        <translation>存在する必要があります</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Form has errors</source>
        <translation>入力内容に誤りがあります</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Failed to create extension</source>
        <translation>拡張機能を作成できませんでした</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Extension created!</source>
        <translation>拡張機能を作成しました！</translation>
    </message>
</context>
<context>
    <name>CreateShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-53"/>
        <source>Create shortcut</source>
        <translation>ショートカットを作成</translation>
    </message>
</context>
<context>
    <name>CreateShortcutCommand</name>
    <message>
        <location filename="../src/builtins/shortcut/shortcut-extension.hpp" line="+13"/>
        <source>Create Shortcut</source>
        <translation>ショートカットを作成</translation>
    </message>
</context>
<context>
    <name>CreateShortcutFromActiveBrowserTabCommand</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.cpp" line="-133"/>
        <source>Create Shortcut from Active Tab</source>
        <translation>アクティブなタブからショートカットを作成</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Create a vicinae shortcut from the currently active browser tab. May yield unexpected results if many browsers are connected at once.</source>
        <translation>現在アクティブなブラウザータブからVicinaeのショートカットを作成します。複数のブラウザーが同時に接続されていると、意図しないタブが使われる場合があります。</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>No active tab!</source>
        <translation>アクティブなタブがありません</translation>
    </message>
</context>
<context>
    <name>CreateSnippetCommand</name>
    <message>
        <location filename="../src/builtins/snippet/create-snippet-command.hpp" line="+10"/>
        <source>Create Snippet</source>
        <translation>スニペットを作成</translation>
    </message>
</context>
<context>
    <name>DMenuSection</name>
    <message>
        <location filename="../src/ui/views/dmenu-model.cpp" line="+96"/>
        <source>Select entry</source>
        <translation>項目を選択</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Select entry (index)</source>
        <translation>項目を選択（インデックス）</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Pass search text</source>
        <translation>検索文字列を渡す</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Select and copy entry</source>
        <translation>項目を選択してコピー</translation>
    </message>
</context>
<context>
    <name>DMenuView</name>
    <message>
        <location filename="../src/ui/qml/views/DMenuView.qml" line="+81"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Path</source>
        <translation>パス</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Type</source>
        <translation>種類</translation>
    </message>
</context>
<context>
    <name>DMenuViewHost</name>
    <message>
        <location filename="../src/ui/views/dmenu-view-host.cpp" line="+36"/>
        <source>Search entries...</source>
        <translation>項目を検索...</translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Pass search text</source>
        <translation>検索文字列を渡す</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Pass and copy search text</source>
        <translation>検索文字列を渡してコピー</translation>
    </message>
</context>
<context>
    <name>DetailListView</name>
    <message>
        <location filename="../src/ui/qml/views/DetailListView.qml" line="+32"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>DeveloperExtension</name>
    <message>
        <location filename="../src/builtins/developer/developer-extension.hpp" line="+12"/>
        <source>Developer</source>
        <translation>開発者</translation>
    </message>
</context>
<context>
    <name>DictationExtension</name>
    <message>
        <location filename="../src/builtins/dictation/dictation-extension.hpp" line="+14"/>
        <source>Dictation</source>
        <translation>ディクテーション</translation>
    </message>
</context>
<context>
    <name>DictationHistoryCommand</name>
    <message>
        <location line="-49"/>
        <source>Dictation History</source>
        <translation>ディクテーション履歴</translation>
    </message>
</context>
<context>
    <name>DictationHistoryViewHost</name>
    <message>
        <location filename="../src/builtins/dictation/dictation-history-view-host.hpp" line="+33"/>
        <source>Search dictations...</source>
        <translation>ディクテーションを検索...</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No dictations yet</source>
        <translation>ディクテーションはまだありません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Everything you dictate shows up here.</source>
        <translation>ディクテーションの内容がここに表示されます。</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Dictated at</source>
        <translation>ディクテーション日時</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Duration</source>
        <translation>録音時間</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Words</source>
        <translation>単語数</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Language</source>
        <translation>言語</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Auto-detected</source>
        <translation>自動検出</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Style</source>
        <translation>スタイル</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Snippet</source>
        <translation>スニペット</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy Original</source>
        <translation>元のテキストをコピー</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Remove Dictation</source>
        <translation>ディクテーションを削除</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove dictation</source>
        <translation>ディクテーションを削除できませんでした</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Remove All Dictations</source>
        <translation>すべてのディクテーションを削除</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Remove all dictations?</source>
        <translation>すべてのディクテーションを削除しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Your whole dictation history will be lost forever.</source>
        <translation>ディクテーション履歴は完全に失われます。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove all</source>
        <translation>すべて削除</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Dictation history cleared</source>
        <translation>ディクテーション履歴を消去しました</translation>
    </message>
</context>
<context>
    <name>DictationRewrite</name>
    <message>
        <location filename="../src/services/dictation/dictation-rewrite.cpp" line="+69"/>
        <source>The model took too long to respond.</source>
        <translation>モデルの応答に時間がかかりすぎました。</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>The model of this style is not available.</source>
        <translation>このスタイルのモデルは利用できません。</translation>
    </message>
    <message>
        <location line="+17"/>
        <location line="+12"/>
        <source>Could not start the rewrite.</source>
        <translation>リライトを開始できませんでした。</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>The model returned an empty response.</source>
        <translation>モデルが空の応答を返しました。</translation>
    </message>
</context>
<context>
    <name>DictationSession</name>
    <message>
        <location filename="../src/services/dictation/dictation-session.cpp" line="+34"/>
        <source>Used original text</source>
        <translation>元のテキストを使用</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Cancel dictation</source>
        <translation>ディクテーションをキャンセル</translation>
    </message>
</context>
<context>
    <name>DictationStyleFormView</name>
    <message>
        <location filename="../src/ui/qml/views/DictationStyleFormView.qml" line="+29"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Clean up</source>
        <translation>クリーンアップ</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Instructions</source>
        <translation>指示</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Fix grammar and remove filler words. Keep my wording.</source>
        <translation>文法を直して言い淀みを取り除きます。言葉遣いはそのまま使います。</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Model</source>
        <translation>モデル</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Applications</source>
        <translation>アプリ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Used when you finish dictating in one of these apps.</source>
        <translation>これらのアプリでディクテーションを終えたときに使用されます。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>+ Add app…</source>
        <translation>+ アプリを追加…</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Used in apps that have no style of their own.</source>
        <translation>固有のスタイルが設定されていないアプリで使用されます。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Use as default</source>
        <translation>デフォルトとして使用</translation>
    </message>
</context>
<context>
    <name>DictationStyleFormViewHost</name>
    <message>
        <location filename="../src/builtins/dictation/style-form-view-host.cpp" line="+33"/>
        <source>Edit &quot;%1&quot;</source>
        <translation>「%1」を編集</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Create Dictation Style</source>
        <translation>ディクテーションスタイルを作成</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Save Style</source>
        <translation>スタイルを保存</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Create Style</source>
        <translation>スタイルを作成</translation>
    </message>
    <message>
        <location line="+52"/>
        <source>%1 already uses %2</source>
        <translation>%1は既に%2を使用しています</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Enter a name</source>
        <translation>名前を入力してください</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Another style has this name</source>
        <translation>同じ名前のスタイルがあります</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Describe how to rewrite the text</source>
        <translation>テキストの書き直し方を入力してください</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Choose a model</source>
        <translation>モデルを選択</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Failed to save style</source>
        <translation>スタイルを保存できませんでした</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Style saved</source>
        <translation>スタイルを保存しました</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Style created</source>
        <translation>スタイルを作成しました</translation>
    </message>
</context>
<context>
    <name>DictationStylesCommand</name>
    <message>
        <location filename="../src/builtins/dictation/dictation-extension.hpp" line="+22"/>
        <source>Manage Dictation Styles</source>
        <translation>ディクテーションスタイルを管理</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Have AI rewrite what you dictate, with a different style for each app.</source>
        <translation>ディクテーションの内容をAIが書き直します。アプリごとに異なるスタイルを設定できます。</translation>
    </message>
</context>
<context>
    <name>DictationStylesViewHost</name>
    <message>
        <location filename="../src/builtins/dictation/styles-view-host.cpp" line="+28"/>
        <source>Set up an AI provider</source>
        <translation>AIプロバイダーをセットアップ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dictation styles need a language model to rewrite your text. Add an AI provider in the settings.</source>
        <translation>ディクテーションスタイルがテキストを書き直すには言語モデルが必要です。設定でAIプロバイダーを追加してください。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Open AI Settings</source>
        <translation>AI設定を開く</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Search styles...</source>
        <translation>スタイルを検索...</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No styles yet</source>
        <translation>スタイルはまだありません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Create a style to have AI rewrite what you dictate.</source>
        <translation>スタイルを作成すると、AIがディクテーションの内容を書き直します。</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Model unavailable</source>
        <translation>モデルを利用できません</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Default</source>
        <translation>標準</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Not in use</source>
        <translation>未使用</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Model</source>
        <translation>モデル</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Unavailable</source>
        <translation>利用不可</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Applications</source>
        <translation>アプリ</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Edit Style</source>
        <translation>スタイルを編集</translation>
    </message>
    <message>
        <location line="+5"/>
        <location line="+34"/>
        <source>Create Style</source>
        <translation>スタイルを作成</translation>
    </message>
    <message>
        <location line="-28"/>
        <source>Stop Using as Default</source>
        <translation>デフォルトとして使用をやめる</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Use as Default</source>
        <translation>デフォルトとして使用</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Delete Style</source>
        <translation>スタイルを削除</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Delete &quot;%1&quot;?</source>
        <translation>「%1」を削除しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dictation will no longer use this style.</source>
        <translation>ディクテーションでこのスタイルが使われなくなります。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Delete</source>
        <translation>削除</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to delete style</source>
        <translation>スタイルを削除できませんでした</translation>
    </message>
    <message>
        <location filename="../src/builtins/dictation/styles-view-host.hpp" line="+39"/>
        <source>Styles ({count})</source>
        <translation>スタイル ({count})</translation>
    </message>
</context>
<context>
    <name>DisableApplication</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="+8"/>
        <source>Disable item</source>
        <translation>項目を無効にする</translation>
    </message>
</context>
<context>
    <name>DisableItemAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="+111"/>
        <source>Are you sure?</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>You will need to go in the settings to manually re-enable it.</source>
        <translation>再び有効にするには、設定から手動で変更する必要があります。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Disable</source>
        <translation>無効にする</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Item disabled</source>
        <translation>項目を無効にしました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to disable</source>
        <translation>無効にできませんでした</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Disable item</source>
        <translation>項目を無効にする</translation>
    </message>
</context>
<context>
    <name>DismissNewsAction</name>
    <message>
        <location filename="../src/services/news/news-service.cpp" line="+34"/>
        <source>Dismiss</source>
        <translation>閉じる</translation>
    </message>
</context>
<context>
    <name>DocumentFindBar</name>
    <message>
        <location filename="../src/ui/qml/document/DocumentFindBar.qml" line="+10"/>
        <source>Find in document…</source>
        <translation>ドキュメント内を検索…</translation>
    </message>
    <message>
        <location line="+61"/>
        <source>%1 / %2</source>
        <translation>%1 / %2</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>No matches</source>
        <translation>一致なし</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Previous match</source>
        <translation>前の一致</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Next match</source>
        <translation>次の一致</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Close find</source>
        <translation>検索を閉じる</translation>
    </message>
</context>
<context>
    <name>DocumentSelectionMenu</name>
    <message>
        <location filename="../src/ui/qml/document/DocumentSelectionMenu.qml" line="+10"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Select All</source>
        <translation>すべて選択</translation>
    </message>
</context>
<context>
    <name>DuplicateShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-26"/>
        <source>Duplicate link</source>
        <translation>リンクを複製</translation>
    </message>
</context>
<context>
    <name>EditAppleShortcutAction</name>
    <message>
        <location filename="../src/root-search/apple-shortcuts/apple-shortcut-root-provider.cpp" line="-75"/>
        <source>Edit in Shortcuts</source>
        <translation>ショートカットアプリで編集</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Failed to open shortcut</source>
        <translation>ショートカットを開けませんでした</translation>
    </message>
</context>
<context>
    <name>EditClipboardKeywordsAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="+106"/>
        <source>Additional keywords that will be used to index this selection.</source>
        <translation>この項目を検索するための追加キーワードです。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Edit keywords</source>
        <translation>キーワードを編集</translation>
    </message>
</context>
<context>
    <name>EditEmojiKeywordsAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="+35"/>
        <source>Additional keywords that will be used to index this glyph</source>
        <translation>この文字を検索するための追加キーワードです</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Edit keyword</source>
        <translation>キーワードを編集</translation>
    </message>
</context>
<context>
    <name>EditKeywordsFormView</name>
    <message>
        <location filename="../src/ui/qml/views/EditKeywordsFormView.qml" line="+20"/>
        <source>Keywords</source>
        <translation>キーワード</translation>
    </message>
</context>
<context>
    <name>EditKeywordsViewHost</name>
    <message>
        <location filename="../src/ui/views/edit-keywords-view-host.cpp" line="+26"/>
        <source>Submit</source>
        <translation>保存</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Keywords edited</source>
        <translation>キーワードを編集しました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to edit keywords</source>
        <translation>キーワードを編集できませんでした</translation>
    </message>
</context>
<context>
    <name>EditShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-41"/>
        <source>Edit shortcut</source>
        <translation>ショートカットを編集</translation>
    </message>
</context>
<context>
    <name>EmojiGridModel</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="+262"/>
        <source>Pinned</source>
        <translation>ピン留め済み</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Recently used</source>
        <translation>最近使った項目</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.hpp" line="+68"/>
        <source>Search for emojis and symbols...</source>
        <translation>絵文字と記号を検索...</translation>
    </message>
</context>
<context>
    <name>EmojiGridViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-view-host.hpp" line="+60"/>
        <source>All</source>
        <translation>すべて</translation>
    </message>
</context>
<context>
    <name>EmojiPreferences</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-preferences.hpp" line="+29"/>
        <source>Default Action</source>
        <translation>既定のアクション</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The default action to perform on pressing return. Paste is only available if your environment supports it.</source>
        <translation>Enterを押したときに実行するアクションです。貼り付けは対応する環境でのみ使えます。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Paste</source>
        <translation>貼り付け</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Skin tone</source>
        <translation>肌の色</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Skin tone to use for relevant emojis.</source>
        <translation>対応する絵文字に使う肌の色です。</translation>
    </message>
</context>
<context>
    <name>EmptyView</name>
    <message>
        <location filename="../src/ui/qml/views/EmptyView.qml" line="+9"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>EnabledFallbackSection</name>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-model.cpp" line="-22"/>
        <source>Disable fallback</source>
        <translation>フォールバックを無効にする</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-model.hpp" line="-19"/>
        <source>Enabled</source>
        <translation>有効</translation>
    </message>
</context>
<context>
    <name>Expansion</name>
    <message>
        <location filename="../src/services/snippet/snippet-db.hpp" line="+32"/>
        <source>Keyword cannot be empty</source>
        <translation>キーワードを入力してください</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keyword exceeds maximum length of %1</source>
        <translation>キーワードが最大長の%1を超えています</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Keyword must only contain printable ASCII characters (no spaces)</source>
        <translation>キーワードには表示可能なASCII文字のみを使用できます（スペース不可）</translation>
    </message>
</context>
<context>
    <name>ExtensionBoilerplateGenerator</name>
    <message>
        <location filename="../src/services/extension-boilerplate-generator/extension-boilerplate-generator.cpp" line="+32"/>
        <source>Simple List</source>
        <translation>シンプルなリスト</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>List with Detail</source>
        <translation>詳細付きリスト</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Controlled List</source>
        <translation>状態を管理するリスト</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Simple Detail</source>
        <translation>シンプルな詳細表示</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>No View</source>
        <translation>画面なし</translation>
    </message>
</context>
<context>
    <name>ExtensionErrorViewHost</name>
    <message>
        <location filename="../src/extension/views/extension-error-view-host.cpp" line="+7"/>
        <source># Extension crashed 💥!

This extension threw an uncaught exception and crashed as a result.

Find the full stacktrace below. You can also directly copy it from the action menu.

```
%1
```</source>
        <translation># 拡張機能がクラッシュしました 💥

処理されていない例外が発生したため、この拡張機能は終了しました。

以下にスタックトレースを表示します。アクションメニューからコピーすることもできます。

```
%1
```</translation>
    </message>
</context>
<context>
    <name>ExtensionFormModel</name>
    <message>
        <location filename="../src/extension/views/extension-form-model.cpp" line="+229"/>
        <source>One or more fields have errors</source>
        <translation>入力欄に誤りがあります</translation>
    </message>
</context>
<context>
    <name>ExtensionGridModel</name>
    <message>
        <location filename="../src/extension/views/extension-grid-model.cpp" line="+233"/>
        <source>Search...</source>
        <translation>検索...</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>ExtensionGridView</name>
    <message>
        <location filename="../src/ui/qml/views/ExtensionGridView.qml" line="+11"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>ExtensionListModel</name>
    <message>
        <location filename="../src/extension/views/extension-list-model.cpp" line="+210"/>
        <source>Search...</source>
        <translation>検索...</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>ExtensionSettingsModel</name>
    <message>
        <location filename="../src/ui/settings/extension-settings-model.cpp" line="+522"/>
        <source>Ask every time</source>
        <translation>毎回確認</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Always allow</source>
        <translation>常に許可</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Disabled</source>
        <translation>無効</translation>
    </message>
</context>
<context>
    <name>ExtensionSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/ExtensionSettingsPage.qml" line="+160"/>
        <source>Description</source>
        <translation>説明</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Preferences</source>
        <translation>環境設定</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Commands</source>
        <translation>コマンド</translation>
    </message>
    <message>
        <location line="+118"/>
        <source>Shortcut</source>
        <translation>ショートカット</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Add Alias</source>
        <translation>別名を追加</translation>
    </message>
    <message>
        <location line="+77"/>
        <source>Tools</source>
        <translation>ツール</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>AI tools are turned off in the AI extension settings. Your choices below are kept.</source>
        <translation>AIツールはAI拡張機能の設定でオフになっています。以下の選択は保持されます。</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Nothing to configure</source>
        <translation>設定できる項目はありません</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Commands and preferences will show up here once available.</source>
        <translation>利用可能なコマンドや設定項目がここに表示されます。</translation>
    </message>
</context>
<context>
    <name>ExtensionView</name>
    <message>
        <location filename="../src/ui/qml/views/ExtensionView.qml" line="+114"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>FileExtension</name>
    <message>
        <location filename="../src/builtins/file/file-extension.hpp" line="+107"/>
        <source>System files</source>
        <translation>システムファイル</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Integrate with system files</source>
        <translation>システムのファイルとの連携</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Search Files</source>
        <translation>ファイルを検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Find files on your computer by name.</source>
        <translation>名前を指定してPC内のファイルを検索します。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Read File</source>
        <translation>ファイルを読み取る</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Read the content of a text file.</source>
        <translation>テキストファイルの内容を読み取ります。</translation>
    </message>
</context>
<context>
    <name>FilePickerDialog</name>
    <message>
        <location filename="../src/ui/qml/controls/FilePickerDialog.qml" line="+46"/>
        <source>Select files</source>
        <translation>ファイルを選択</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Select a file</source>
        <translation>ファイルを選択</translation>
    </message>
    <message>
        <location line="+1"/>
        <location line="+7"/>
        <source>Select</source>
        <translation>選択</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Select a directory</source>
        <translation>フォルダーを選択</translation>
    </message>
</context>
<context>
    <name>FilePreferences</name>
    <message>
        <location filename="../src/builtins/file/file-extension.hpp" line="-68"/>
        <source>Enabled</source>
        <translation>有効</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Whether to run the file indexer in the background. When turned off, the indexer process is stopped entirely and file search becomes unavailable until it is turned back on.</source>
        <translation>ファイルの索引作成をバックグラウンドで実行します。無効にすると索引作成プロセスは停止し、再び有効にするまでファイル検索を利用できなくなります。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Search paths</source>
        <translation>検索対象のパス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Directories that Vicinae will search</source>
        <translation>Vicinaeが検索するフォルダー</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Excluded search paths</source>
        <translation>検索から除外するパス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Directories to exclude from file indexing</source>
        <translation>ファイルの索引作成から除外するフォルダー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Search backend</source>
        <translation>検索エンジン</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Automatic uses Everything when it is running and falls back to Windows Search otherwise.</source>
        <translation>「自動」では、Everythingが動作していれば利用し、それ以外の場合はWindows Searchを利用します。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Automatic</source>
        <translation>自動</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Windows Search</source>
        <translation>Windows Search</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Everything</source>
        <translation>Everything</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Everything instance</source>
        <translation>Everythingのインスタンス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Name of the Everything instance to connect to. Leave empty for the default instance, the Everything 1.5 alpha runs as &quot;1.5a&quot;.</source>
        <translation>接続するEverythingのインスタンス名です。空欄の場合は既定のインスタンスに接続します。Everything 1.5 alphaのインスタンス名は「1.5a」です。</translation>
    </message>
</context>
<context>
    <name>FilePreview</name>
    <message>
        <location filename="../src/ui/qml/detail/FilePreview.qml" line="+37"/>
        <source>Preview not available for this file type</source>
        <translation>この種類のファイルはプレビューできません</translation>
    </message>
</context>
<context>
    <name>FocusWindowAction</name>
    <message>
        <location filename="../src/actions/window-actions.hpp" line="-17"/>
        <source>Focus window</source>
        <translation>ウィンドウを前面に表示</translation>
    </message>
</context>
<context>
    <name>FontBrowserViewHost</name>
    <message>
        <location filename="../src/builtins/font/font-browser-view-host.hpp" line="+55"/>
        <source>All</source>
        <translation>すべて</translation>
    </message>
</context>
<context>
    <name>FontExtension</name>
    <message>
        <location filename="../src/builtins/font/font-extension.hpp" line="+9"/>
        <source>Font</source>
        <translation>フォント</translation>
    </message>
</context>
<context>
    <name>FontGridModel</name>
    <message>
        <location filename="../src/builtins/font/font-grid-model.cpp" line="+152"/>
        <source>All Fonts (%1)</source>
        <translation>すべてのフォント（%1）</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Results (%1)</source>
        <translation>検索結果（%1）</translation>
    </message>
    <message>
        <location filename="../src/builtins/font/font-grid-model.hpp" line="+53"/>
        <source>Search fonts...</source>
        <translation>フォントを検索...</translation>
    </message>
</context>
<context>
    <name>Footer</name>
    <message>
        <location filename="../src/ui/qml/launcher/Footer.qml" line="+62"/>
        <source>Actions</source>
        <translation>アクション</translation>
    </message>
</context>
<context>
    <name>ForceQuitAppAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+96"/>
        <source>Force Quit Application</source>
        <translation>アプリを強制終了</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to force quit %1</source>
        <translation>%1を強制終了できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Force quit %1</source>
        <translation>%1を強制終了</translation>
    </message>
</context>
<context>
    <name>ForgetTelemetryCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+178"/>
        <source>Forget Past Vicinae Telemetry</source>
        <translation>過去のVicinaeテレメトリを匿名化</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Asks the vicinae server to anonymize telemetry data that was sent with your vicinae instance ID attached. The ID is only linked to your vicinae install, which has no direct relationship with your system.</source>
        <translation>VicinaeのインスタンスID付きで送信されたテレメトリを匿名化するよう、サーバーに要求します。このIDはVicinaeのインストールにのみ対応し、システムとは直接結び付いていません。</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Processing...</source>
        <translation>処理中...</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Past telemetry was successfully detached from your vicinae user ID.</source>
        <translation>過去のテレメトリとVicinaeユーザーIDの関連付けを解除しました。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to forget past telemetry data</source>
        <translation>過去のテレメトリを匿名化できませんでした</translation>
    </message>
</context>
<context>
    <name>FormAppSelector</name>
    <message>
        <location filename="../src/ui/qml/form/FormAppSelector.qml" line="+15"/>
        <source>+ Restrict to app…</source>
        <translation>+ アプリを指定…</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>All applications</source>
        <translation>すべてのアプリ</translation>
    </message>
    <message>
        <location line="+98"/>
        <source>Remove</source>
        <translation>削除</translation>
    </message>
</context>
<context>
    <name>FormFilePicker</name>
    <message>
        <location filename="../src/ui/qml/form/FormFilePicker.qml" line="+26"/>
        <location line="+72"/>
        <source>No directory selected</source>
        <translation>フォルダーが選択されていません</translation>
    </message>
    <message>
        <location line="-72"/>
        <location line="+72"/>
        <source>No file selected</source>
        <translation>ファイルが選択されていません</translation>
    </message>
    <message>
        <location line="+13"/>
        <location line="+124"/>
        <source>Remove</source>
        <translation>削除</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>+ Add folder…</source>
        <translation>+ フォルダーを追加…</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>+ Add file…</source>
        <translation>+ ファイルを追加…</translation>
    </message>
</context>
<context>
    <name>FormPasswordInput</name>
    <message>
        <location filename="../src/ui/qml/form/FormPasswordInput.qml" line="+98"/>
        <source>Hide password</source>
        <translation>パスワードを隠す</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Show password</source>
        <translation>パスワードを表示</translation>
    </message>
</context>
<context>
    <name>GeneralSettingsModel</name>
    <message>
        <location filename="../src/ui/settings/general-settings-model.cpp" line="+208"/>
        <location line="+12"/>
        <source>Automatic</source>
        <translation>自動</translation>
    </message>
    <message>
        <location line="-10"/>
        <location line="+15"/>
        <source>None</source>
        <translation>なし</translation>
    </message>
    <message>
        <location line="-14"/>
        <location line="+14"/>
        <source>Blurred</source>
        <translation>ぼかし</translation>
    </message>
    <message>
        <location line="-12"/>
        <location line="+12"/>
        <source>Liquid Glass</source>
        <translation>Liquid Glass</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Window material</source>
        <translation>ウィンドウの背景効果</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Themes</source>
        <translation>テーマ</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Fonts</source>
        <translation>フォント</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Icon Themes</source>
        <translation>アイコンテーマ</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Favicon Services</source>
        <translation>ファビコン取得サービス</translation>
    </message>
    <message>
        <location line="+13"/>
        <location line="+10"/>
        <source>Default</source>
        <translation>標準</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Keybinding Schemes</source>
        <translation>キー操作方式</translation>
    </message>
    <message>
        <location line="+48"/>
        <location line="+10"/>
        <source>System default</source>
        <translation>システムの既定</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Languages</source>
        <translation>言語</translation>
    </message>
</context>
<context>
    <name>GeneralSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/GeneralSettingsPage.qml" line="+35"/>
        <source>Behavior</source>
        <translation>動作</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Launcher hotkey</source>
        <translation>ランチャーのホットキー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Global shortcut to toggle the Vicinae launcher.</source>
        <translation>Vicinaeランチャーの表示を切り替えるグローバルショートカットです。</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Close on focus loss</source>
        <translation>フォーカスが外れたら閉じる</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Close on Escape</source>
        <translation>Escapeで閉じる</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pressing Escape closes the launcher instead of navigating one view back.</source>
        <translation>Escapeを押すと、前の画面に戻る代わりにランチャーを閉じます。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Pop to root on close</source>
        <translation>閉じたときにメイン画面に戻る</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset the navigation state when the launcher window is closed.</source>
        <translation>ランチャーウィンドウを閉じたときに画面の移動履歴をリセットします。</translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+7"/>
        <source>Language</source>
        <translation>言語</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Requires restarting Vicinae to take effect.</source>
        <translation>反映にはVicinaeの再起動が必要です。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Privacy</source>
        <translation>プライバシー</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Basic usage statistics</source>
        <translation>基本的な利用統計</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Send basic system and vicinae installation information on startup to help improve Vicinae.</source>
        <translation>Vicinaeの改善のため、起動時にシステムとVicinaeのインストールに関する基本情報を送信します。</translation>
    </message>
</context>
<context>
    <name>GenericGridView</name>
    <message>
        <location filename="../src/ui/qml/views/GenericGridView.qml" line="+29"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>GenericListView</name>
    <message>
        <location filename="../src/ui/qml/views/GenericListView.qml" line="+26"/>
        <source>No results</source>
        <translation>結果がありません</translation>
    </message>
</context>
<context>
    <name>Gnome::Workspace</name>
    <message>
        <location filename="../src/services/window-manager/gnome/gnome-workspace.cpp" line="+18"/>
        <source>Workspace %1</source>
        <translation>ワークスペース %1</translation>
    </message>
</context>
<context>
    <name>GroqFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="-68"/>
        <source>API Key</source>
        <translation>APIキー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Your OpenRouter API key. You can create one in your OpenRouter settings.</source>
        <translation>OpenRouterのAPIキーです。OpenRouterの設定で作成できます。</translation>
    </message>
</context>
<context>
    <name>HibernateCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+125"/>
        <source>Hibernate System</source>
        <translation>システムを休止状態にする</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Suspend the system to disk. This turns off the system completely and saves its state on disk, to be restored on next boot.</source>
        <translation>システムの状態をディスクに保存して電源を切ります。次回の起動時に保存した状態を復元します。</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>System can&apos;t hibernate</source>
        <translation>このシステムは休止状態にできません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to hibernate</source>
        <translation>休止状態にできませんでした</translation>
    </message>
</context>
<context>
    <name>HudWindow</name>
    <message>
        <location filename="../src/ui/qml/hud/HudWindow.qml" line="+27"/>
        <source>Dictation</source>
        <translation>ディクテーション</translation>
    </message>
    <message>
        <location line="+142"/>
        <source>Stop and transcribe</source>
        <translation>停止して文字起こし</translation>
    </message>
    <message>
        <location line="+76"/>
        <source>Rewriting</source>
        <translation>リライト中</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Transcribing</source>
        <translation>文字起こし中</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>Dismiss</source>
        <translation>閉じる</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Cancel dictation</source>
        <translation>ディクテーションをキャンセル</translation>
    </message>
</context>
<context>
    <name>IconBrowserCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+26"/>
        <source>Search Builtin Icons</source>
        <translation>内蔵アイコンを検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search Vicinae builtin set of icons</source>
        <translation>Vicinae内蔵のアイコンを検索します</translation>
    </message>
</context>
<context>
    <name>ImageViewer</name>
    <message>
        <location filename="../src/ui/qml/detail/ImageViewer.qml" line="+163"/>
        <source>%1 / %2</source>
        <translation>%1 / %2</translation>
    </message>
</context>
<context>
    <name>InspectLocalStorage</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+13"/>
        <source>Inspect Local Storage</source>
        <translation>ローカルストレージを確認</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Browse data stored in Vicinae&apos;s local storage. This includes data stored for builtin extensions as well as third-party extensions making use of the LocalStorage API.</source>
        <translation>Vicinaeのローカルストレージに保存されたデータを表示します。内蔵拡張機能のデータと、LocalStorage APIを使う外部拡張機能のデータが含まれます。</translation>
    </message>
</context>
<context>
    <name>InstallExtensionAction</name>
    <message>
        <location filename="../src/actions/extension-actions.cpp" line="+15"/>
        <source>Downloading extension...</source>
        <translation>拡張機能をダウンロード中...</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Failed to download extension</source>
        <translation>拡張機能をダウンロードできませんでした</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Failed to extract extension archive</source>
        <translation>拡張機能のアーカイブを展開できませんでした</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Extension installed</source>
        <translation>拡張機能をインストールしました</translation>
    </message>
    <message>
        <location filename="../src/actions/extension-actions.hpp" line="+28"/>
        <source>Install extension</source>
        <translation>拡張機能をインストール</translation>
    </message>
</context>
<context>
    <name>InstallUpdateAction</name>
    <message>
        <location filename="../src/services/update/update-service.cpp" line="+190"/>
        <source>Install Update</source>
        <translation>更新をインストール</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>An update is already in progress</source>
        <translation>更新はすでに実行中です</translation>
    </message>
</context>
<context>
    <name>InstalledExtensionsSection</name>
    <message>
        <location filename="../src/builtins/vicinae/installed-extensions-model.cpp" line="+38"/>
        <source>Local</source>
        <translation>ローカル</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy Name</source>
        <translation>名前をコピー</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy ID</source>
        <translation>IDをコピー</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy Path</source>
        <translation>パスをコピー</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy Author</source>
        <translation>作者名をコピー</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/installed-extensions-model.hpp" line="+18"/>
        <source>Installed Extensions ({count})</source>
        <translation>インストール済みの拡張機能（{count}）</translation>
    </message>
</context>
<context>
    <name>InstalledExtensionsViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/installed-extensions-view-host.cpp" line="+12"/>
        <source>Search extensions...</source>
        <translation>拡張機能を検索...</translation>
    </message>
</context>
<context>
    <name>InternalExtension</name>
    <message>
        <location filename="../src/builtins/internal/internal-extension.hpp" line="+12"/>
        <location line="+1"/>
        <source>Internal Commands</source>
        <translation>内部コマンド</translation>
    </message>
</context>
<context>
    <name>KdeSettingsRootItem</name>
    <message>
        <location filename="../src/root-search/kde-settings/kde-settings-root-provider.cpp" line="+13"/>
        <location line="+9"/>
        <source>KDE Settings</source>
        <translation>KDEのシステム設定</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Where</source>
        <translation>場所</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Open in System Settings</source>
        <translation>システム設定で開く</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy Module ID</source>
        <translation>モジュールIDをコピー</translation>
    </message>
</context>
<context>
    <name>KdeSettingsRootProvider</name>
    <message>
        <location line="+17"/>
        <source>KDE Settings</source>
        <translation>KDEのシステム設定</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Modules of the KDE System Settings application.</source>
        <translation>KDEシステム設定アプリのモジュールです。</translation>
    </message>
</context>
<context>
    <name>KeyboardBridge</name>
    <message>
        <location filename="../src/ui/bridges/keyboard-bridge.hpp" line="+60"/>
        <source>Modifier required</source>
        <translation>修飾キーが必要です</translation>
    </message>
</context>
<context>
    <name>LauncherWindow</name>
    <message>
        <location filename="../src/ui/qml/launcher/LauncherWindow.qml" line="+51"/>
        <source>Vicinae Launcher</source>
        <translation>Vicinaeランチャー</translation>
    </message>
    <message>
        <location filename="../src/ui/windows/launcher-window.cpp" line="+931"/>
        <source>Open Settings</source>
        <translation>設定を開く</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Keyboard Shortcuts</source>
        <translation>キーボードショートカット</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Extension Store</source>
        <translation>Extension Store</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Documentation</source>
        <translation>ドキュメント</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+5"/>
        <source>Opened in browser</source>
        <translation>ブラウザーで開きました</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Report a Bug</source>
        <translation>不具合を報告</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>About Vicinae</source>
        <translation>Vicinaeについて</translation>
    </message>
</context>
<context>
    <name>LemonadeFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="+96"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>How this server is shown in model lists.</source>
        <translation>このサーバーをモデル一覧に表示するときの名前です。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Server URL</source>
        <translation>サーバーURL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The address of your audio.cpp server.</source>
        <translation>audio.cppサーバーのアドレスです。</translation>
    </message>
</context>
<context>
    <name>LlamaCppFields</name>
    <message>
        <location line="-27"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>How this server is shown in model lists.</source>
        <translation>このサーバーをモデル一覧に表示するときの名前です。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Server URL</source>
        <translation>サーバーURL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The address of your Lemonade server.</source>
        <translation>Lemonadeサーバーのアドレスです。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>API Key</source>
        <translation>APIキー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Only needed if the server was started with an API key.</source>
        <translation>サーバーがAPIキー付きで起動されている場合のみ必要です。</translation>
    </message>
</context>
<context>
    <name>LocalStorageItemSection</name>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-model.cpp" line="+31"/>
        <source>Show value</source>
        <translation>値を表示</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-model.hpp" line="+19"/>
        <source>Items ({count})</source>
        <translation>項目（{count}）</translation>
    </message>
</context>
<context>
    <name>LocalStorageItemViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-view-host.cpp" line="+26"/>
        <source>Search items...</source>
        <translation>項目を検索...</translation>
    </message>
</context>
<context>
    <name>LocalStorageNamespaceSection</name>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-model.cpp" line="-16"/>
        <source>Browse namespace</source>
        <translation>名前空間を開く</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-model.hpp" line="-11"/>
        <source>Namespaces ({count})</source>
        <translation>名前空間（{count}）</translation>
    </message>
</context>
<context>
    <name>LocalStorageViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-view-host.cpp" line="-18"/>
        <source>Search namespaces...</source>
        <translation>名前空間を検索...</translation>
    </message>
</context>
<context>
    <name>LockCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="-48"/>
        <source>Lock Session</source>
        <translation>セッションをロック</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lock the current user session</source>
        <translation>現在のユーザーセッションをロックします</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>System can&apos;t lock</source>
        <translation>このシステムはロックできません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to lock</source>
        <translation>ロックできませんでした</translation>
    </message>
</context>
<context>
    <name>LogOutCommand</name>
    <message>
        <location line="+176"/>
        <source>Log Out</source>
        <translation>ログアウト</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Terminate the current user session. If you simply want to lock your session you should use &apos;Lock Session&apos; instead.</source>
        <translation>現在のユーザーセッションを終了します。ロックするだけの場合は「セッションをロック」を使ってください。</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>System can&apos;t logout</source>
        <translation>このシステムはログアウトできません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to log out</source>
        <translation>ログアウトできませんでした</translation>
    </message>
</context>
<context>
    <name>LongTextPreferenceDialog</name>
    <message>
        <location filename="../src/ui/qml/settings/LongTextPreferenceDialog.qml" line="+59"/>
        <source>%1 characters. Long text is sent with every message and costs more.</source>
        <translation>%1文字です。長いテキストはメッセージごとに毎回送信されるため、コストが大きくなります。</translation>
    </message>
    <message numerus="yes">
        <location line="+0"/>
        <source>%n character(s)</source>
        <translation>
            <numerusform>%n文字</numerusform>
        </translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Save</source>
        <translation>保存</translation>
    </message>
</context>
<context>
    <name>MacOSGlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/macos-global-shortcut-backend.cpp" line="+166"/>
        <location line="+44"/>
        <source>unsupported or invalid trigger</source>
        <translation>未対応または無効なトリガーです</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>failed to register hot key (%1)</source>
        <translation>ホットキーを登録できませんでした（%1）</translation>
    </message>
</context>
<context>
    <name>MacSettingsRootItem</name>
    <message>
        <location filename="../src/root-search/macos-settings/macos-settings-root-provider.mm" line="+140"/>
        <location line="+9"/>
        <source>System Settings</source>
        <translation>システム設定</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bundle ID</source>
        <translation>バンドルID</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Legacy ID</source>
        <translation>旧形式のID</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Where</source>
        <translation>場所</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Open %1 Settings</source>
        <translation>%1の設定を開く</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy URL</source>
        <translation>URLをコピー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy Bundle ID</source>
        <translation>バンドルIDをコピー</translation>
    </message>
</context>
<context>
    <name>MacSettingsRootProvider</name>
    <message>
        <location line="+14"/>
        <source>System Settings</source>
        <translation>システム設定</translation>
    </message>
</context>
<context>
    <name>MacosScreenshotProvider</name>
    <message>
        <location filename="../src/services/screenshots/macos/macos-screenshot-provider.mm" line="+99"/>
        <source>Spotlight is unavailable. Showing screenshots and recordings from the screenshot folder.</source>
        <translation>Spotlightを利用できません。スクリーンショットフォルダー内のスクリーンショットと画面収録を表示しています。</translation>
    </message>
</context>
<context>
    <name>MacosUpdateInstaller</name>
    <message>
        <location filename="../src/services/update/macos-update-installer.mm" line="+207"/>
        <source>This installation cannot update itself</source>
        <translation>このインストールでは自動更新を利用できません</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Mounting update image…</source>
        <translation>更新用イメージをマウント中…</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Failed to mount the update image</source>
        <translation>更新用イメージをマウントできませんでした</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Could not find the update image mount point</source>
        <translation>更新用イメージのマウント先が見つかりませんでした</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Verifying update…</source>
        <translation>更新を検証中…</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Installing update…</source>
        <translation>更新をインストール中…</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to stage update: %1</source>
        <translation>更新を準備できませんでした：%1</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Failed to move the current app aside: %1</source>
        <translation>現在のアプリを退避できませんでした：%1</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to install the new app: %1</source>
        <translation>新しいアプリをインストールできませんでした：%1</translation>
    </message>
</context>
<context>
    <name>ManageFallbackActions</name>
    <message>
        <location filename="../src/actions/fallback-actions.hpp" line="+15"/>
        <source>Manage Fallback Actions</source>
        <translation>フォールバックアクションを管理</translation>
    </message>
</context>
<context>
    <name>ManageFallbackCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/configure-fallback-command.hpp" line="+11"/>
        <source>Configure Fallback Commands</source>
        <translation>フォールバックコマンドを設定</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Configure what commands are to be presented as fallback options when nothing matches the search in the root search.</source>
        <translation>メイン画面の検索で一致する項目がないときに表示するコマンドを設定します。</translation>
    </message>
</context>
<context>
    <name>ManageFallbackViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-view-host.cpp" line="+12"/>
        <source>Search commands...</source>
        <translation>コマンドを検索...</translation>
    </message>
</context>
<context>
    <name>ManageShortcutsCommand</name>
    <message>
        <location filename="../src/builtins/shortcut/shortcut-extension.hpp" line="+13"/>
        <source>Manage Shortcuts</source>
        <translation>ショートカットを管理</translation>
    </message>
</context>
<context>
    <name>ManageShortcutsSection</name>
    <message>
        <location filename="../src/builtins/shortcut/manage-shortcuts-model.hpp" line="+17"/>
        <source>Shortcuts ({count})</source>
        <translation>ショートカット（{count}）</translation>
    </message>
</context>
<context>
    <name>ManageShortcutsViewHost</name>
    <message>
        <location filename="../src/builtins/shortcut/manage-shortcuts-view-host.cpp" line="+26"/>
        <source>Search shortcuts...</source>
        <translation>ショートカットを検索...</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Application</source>
        <translation>アプリ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>%1 (Default)</source>
        <translation>%1（既定）</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Opened</source>
        <translation>開いた回数</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Last Opened</source>
        <translation>最後に開いた日時</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Never</source>
        <translation>なし</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Created at</source>
        <translation>作成日時</translation>
    </message>
</context>
<context>
    <name>ManageSnippetsCommand</name>
    <message>
        <location filename="../src/builtins/snippet/manage-snippets-command.hpp" line="+10"/>
        <source>Manage Snippets</source>
        <translation>スニペットを管理</translation>
    </message>
</context>
<context>
    <name>ManageSnippetsSection</name>
    <message>
        <location filename="../src/builtins/snippet/manage-snippets-model.cpp" line="+33"/>
        <source>Copy to clipboard</source>
        <translation>クリップボードにコピー</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copied to clipboard</source>
        <translation>クリップボードにコピーしました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to copy to clipboard</source>
        <translation>クリップボードにコピーできませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Edit snippet</source>
        <translation>スニペットを編集</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Duplicate snippet</source>
        <translation>スニペットを複製</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Remove snippet</source>
        <translation>スニペットを削除</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove snippet</source>
        <translation>スニペットを削除できませんでした</translation>
    </message>
    <message>
        <location filename="../src/builtins/snippet/manage-snippets-model.hpp" line="+18"/>
        <source>Snippets ({count})</source>
        <translation>スニペット（{count}）</translation>
    </message>
</context>
<context>
    <name>ManageSnippetsViewHost</name>
    <message>
        <location filename="../src/builtins/snippet/manage-snippets-view-host.cpp" line="+12"/>
        <source>No snippets</source>
        <translation>スニペットがありません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Create a snippet to get started</source>
        <translation>スニペットを作成して始めましょう</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Search for snippets...</source>
        <translation>スニペットを検索...</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Text</source>
        <translation>テキスト</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Type</source>
        <translation>種類</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Created at</source>
        <translation>作成日時</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Updated at</source>
        <translation>更新日時</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Keyword</source>
        <translation>キーワード</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Voice phrase</source>
        <translation>音声フレーズ</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Apps</source>
        <translation>アプリ</translation>
    </message>
    <message>
        <location line="+68"/>
        <source>Create snippet</source>
        <translation>スニペットを作成</translation>
    </message>
</context>
<context>
    <name>MarkItemAsFavorite</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="-80"/>
        <source>Mark as favorite</source>
        <translation>お気に入りに追加</translation>
    </message>
</context>
<context>
    <name>MarkdownShowcase</name>
    <message>
        <location filename="../src/builtins/internal/markdown-showcase-command.hpp" line="+193"/>
        <source>Markdown Showcase</source>
        <translation>Markdownの表示例</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Preview all supported markdown features</source>
        <translation>対応しているMarkdown機能をプレビューします</translation>
    </message>
</context>
<context>
    <name>MarkdownShowcaseView</name>
    <message>
        <location line="-182"/>
        <source>Close</source>
        <translation>閉じる</translation>
    </message>
</context>
<context>
    <name>MdCallout</name>
    <message>
        <location filename="../src/ui/qml/markdown/MdCallout.qml" line="+35"/>
        <source>Caution</source>
        <translation>注意</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Important</source>
        <translation>重要</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Tip</source>
        <translation>ヒント</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Note</source>
        <translation>補足</translation>
    </message>
</context>
<context>
    <name>MdCodeBlock</name>
    <message>
        <location filename="../src/ui/qml/markdown/MdCodeBlock.qml" line="+60"/>
        <source>Copied!</source>
        <translation>コピーしました！</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
</context>
<context>
    <name>MdImage</name>
    <message>
        <location filename="../src/ui/qml/markdown/MdImage.qml" line="+75"/>
        <source>Image</source>
        <translation>画像</translation>
    </message>
</context>
<context>
    <name>MediaExtension</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="+324"/>
        <source>Media</source>
        <translation>メディア</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Control media playback and system audio</source>
        <translation>メディアの再生とシステムの音声を操作します</translation>
    </message>
</context>
<context>
    <name>MenuBarMenuSection</name>
    <message>
        <location filename="../src/builtins/vicinae/menu-bar-search-view-host.hpp" line="+38"/>
        <source>Results ({count} items)</source>
        <translation>検索結果（{count}件）</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Run Menu Item</source>
        <translation>メニュー項目を実行</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Open in Menu Bar</source>
        <translation>メニューバーで開く</translation>
    </message>
</context>
<context>
    <name>MenuBarSearchViewHost</name>
    <message>
        <location line="+22"/>
        <source>Filter by menu item title...</source>
        <translation>メニュー項目名で絞り込み...</translation>
    </message>
</context>
<context>
    <name>MissingPreferenceView</name>
    <message>
        <location filename="../src/ui/qml/views/MissingPreferenceView.qml" line="+30"/>
        <source>Welcome to %1</source>
        <translation>%1へようこそ</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Before you can use this command, you need to fill in the required preference fields below.</source>
        <translation>このコマンドを使うには、以下の必須設定項目を入力してください。</translation>
    </message>
    <message>
        <location line="+130"/>
        <source>Select an app…</source>
        <translation>アプリを選択…</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Add app…</source>
        <translation>アプリを追加…</translation>
    </message>
</context>
<context>
    <name>MissingPreferenceViewHost</name>
    <message>
        <location filename="../src/extension/views/missing-preference-view-host.cpp" line="+238"/>
        <source>Save preferences</source>
        <translation>設定を保存</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Please fill in all required fields</source>
        <translation>必須項目をすべて入力してください</translation>
    </message>
</context>
<context>
    <name>MistralFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="-67"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>How this server is shown in model lists.</source>
        <translation>このサーバーをモデル一覧に表示するときの名前です。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Server URL</source>
        <translation>サーバーURL</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Base URL of the OpenAI-compatible API, including the version prefix if the server has one.</source>
        <translation>OpenAI互換APIのベースURLです。サーバーにバージョン接頭辞がある場合はそれも含めます。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>API Key</source>
        <translation>APIキー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Leave empty if the server does not require one.</source>
        <translation>サーバーがAPIキーを必要としない場合は空欄にしてください。</translation>
    </message>
</context>
<context>
    <name>ModelDownload</name>
    <message>
        <location filename="../src/services/local-model-registry/model-download.cpp" line="+66"/>
        <source>Could not create %1: %2</source>
        <translation>%1を作成できませんでした：%2</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Could not open %1 for writing: %2</source>
        <translation>%1を書き込み用に開けませんでした：%2</translation>
    </message>
    <message>
        <location line="+99"/>
        <source>Could not write %1: %2</source>
        <translation>%1に書き込めませんでした：%2</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Server could not resume the download</source>
        <translation>サーバーがダウンロードを再開できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Rate limited by the server</source>
        <translation>サーバーによるレート制限がかかっています</translation>
    </message>
    <message numerus="yes">
        <location line="+17"/>
        <source>Gave up after %n attempt(s): %1</source>
        <translation>
            <numerusform>%n回試行して断念しました：%1</numerusform>
        </translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Downloaded file has the wrong size (%1 instead of %2 bytes)</source>
        <translation>ダウンロードしたファイルのサイズが正しくありません（%1バイト、期待値%2バイト）</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Checksum mismatch, the downloaded file was discarded</source>
        <translation>チェックサムが一致しないため、ダウンロードしたファイルを破棄しました</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Could not move the download into place: %1</source>
        <translation>ダウンロードしたファイルを配置できませんでした：%1</translation>
    </message>
</context>
<context>
    <name>MoveFavoriteDownAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="+53"/>
        <source>Move down in favorites</source>
        <translation>お気に入り内で下に移動</translation>
    </message>
</context>
<context>
    <name>MoveFavoriteUpAction</name>
    <message>
        <location line="-9"/>
        <source>Move up in favorites</source>
        <translation>お気に入り内で上に移動</translation>
    </message>
</context>
<context>
    <name>NavigationController</name>
    <message>
        <location filename="../src/navigation-controller.cpp" line="+727"/>
        <source>Extension manager is not running</source>
        <translation>拡張機能マネージャーが動作していません</translation>
    </message>
</context>
<context>
    <name>NewsService</name>
    <message>
        <location filename="../src/services/news/news-service.cpp" line="+68"/>
        <source>Telemetry</source>
        <translation>テレメトリ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>We now collect basic usage statistics on startup</source>
        <translation>起動時に基本的な利用統計を収集するようになりました</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Learn more</source>
        <translation>詳細を見る</translation>
    </message>
</context>
<context>
    <name>NextTrackCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="-217"/>
        <location line="+26"/>
        <source>Next Track</source>
        <translation>次の曲</translation>
    </message>
    <message>
        <location line="-25"/>
        <source>Skip to the next track</source>
        <translation>次の曲に進みます</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>player</source>
        <translation>プレーヤー</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>%1 cannot skip to the next track</source>
        <translation>%1は次の曲に進めません</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to skip to the next track</source>
        <translation>次の曲に進めませんでした</translation>
    </message>
</context>
<context>
    <name>NowPlayingCommand</name>
    <message>
        <location line="+46"/>
        <source>Now Playing</source>
        <translation>再生中</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Browse and control running media players</source>
        <translation>起動中のメディアプレーヤーを表示・操作します</translation>
    </message>
</context>
<context>
    <name>NowPlayingViewHost</name>
    <message>
        <location filename="../src/builtins/media/now-playing-view-host.hpp" line="+27"/>
        <source>Search players...</source>
        <translation>プレーヤーを検索...</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Players</source>
        <translation>プレーヤー</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Playing</source>
        <translation>再生中</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Paused</source>
        <translation>一時停止中</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Pause</source>
        <translation>一時停止</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Play</source>
        <translation>再生</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Next Track</source>
        <translation>次の曲</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Previous Track</source>
        <translation>前の曲</translation>
    </message>
</context>
<context>
    <name>NullUpdateInstaller</name>
    <message>
        <location filename="../src/services/update/null-update-installer.hpp" line="+14"/>
        <source>Self update is not supported on this platform</source>
        <translation>このプラットフォームでは自動更新を利用できません</translation>
    </message>
</context>
<context>
    <name>OAuthOverlayView</name>
    <message>
        <location filename="../src/ui/qml/views/OAuthOverlayView.qml" line="+29"/>
        <source>Back</source>
        <translation>戻る</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>Continue with %1</source>
        <translation>%1で続行</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>You&apos;re in!</source>
        <translation>接続できました！</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Successfully connected to %1.
Back to command in an instant...</source>
        <translation>%1に接続しました。
まもなくコマンドに戻ります...</translation>
    </message>
</context>
<context>
    <name>OAuthTokenStoreCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="-33"/>
        <source>Manage OAuth Token Sets</source>
        <translation>OAuthトークンセットを管理</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Manage OAuth token sets that have been saved by extensions providing OAuth integrations.</source>
        <translation>OAuth連携を提供する拡張機能が保存したトークンセットを管理します。</translation>
    </message>
</context>
<context>
    <name>OAuthTokenStoreSection</name>
    <message>
        <location filename="../src/builtins/vicinae/oauth-token-store-model.cpp" line="+21"/>
        <source>Expired</source>
        <translation>期限切れ</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Remove token set</source>
        <translation>トークンセットを削除</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Are you sure?</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>You will need to go through the OAuth login flow again the next time you want to use this service</source>
        <translation>次回このサービスを使う際に、OAuthで再度ログインする必要があります</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to remove token set</source>
        <translation>トークンセットを削除できませんでした</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Token set removed</source>
        <translation>トークンセットを削除しました</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy Access Token</source>
        <translation>アクセストークンをコピー</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy Refresh Token</source>
        <translation>更新トークンをコピー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy ID Token</source>
        <translation>IDトークンをコピー</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy Scopes</source>
        <translation>スコープをコピー</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy Expiration Date</source>
        <translation>有効期限をコピー</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/oauth-token-store-model.hpp" line="+17"/>
        <source>OAuth Token Sets ({count})</source>
        <translation>OAuthトークンセット（{count}）</translation>
    </message>
</context>
<context>
    <name>OAuthTokenStoreViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/oauth-token-store-view-host.cpp" line="+12"/>
        <source>Search token sets...</source>
        <translation>トークンセットを検索...</translation>
    </message>
</context>
<context>
    <name>OllamaFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="-52"/>
        <source>API Key</source>
        <translation>APIキー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Your OpenAI API key. You can create one in the OpenAI platform dashboard.</source>
        <translation>OpenAIのAPIキーです。OpenAIプラットフォームのダッシュボードで作成できます。</translation>
    </message>
</context>
<context>
    <name>OnboardingWindow</name>
    <message>
        <location filename="../src/ui/qml/onboarding/OnboardingWindow.qml" line="+41"/>
        <source>Grant Access</source>
        <translation>アクセスを許可</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Granted</source>
        <translation>許可済み</translation>
    </message>
    <message>
        <location line="+16"/>
        <location line="+40"/>
        <source>Welcome to Vicinae</source>
        <translation>Vicinaeへようこそ</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Let&apos;s set it up. It only takes a minute.</source>
        <translation>初期設定を始めましょう。1分ほどで終わります。</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Permissions</source>
        <translation>アクセス権</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Vicinae needs additional permissions in order to make the best of your Mac.</source>
        <translation>Macの機能を十分に活用するには、Vicinaeに追加のアクセス権が必要です。</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Accessibility</source>
        <translation>アクセシビリティ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Used to paste, expand snippets, and move windows.</source>
        <translation>貼り付け、スニペットの展開、ウィンドウの移動に使います。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Full Disk Access</source>
        <translation>フルディスクアクセス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Allows file search to cover your entire disk.</source>
        <translation>ディスク全体をファイル検索の対象にできます。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Notifications</source>
        <translation>通知</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Allows extensions to send desktop notifications.</source>
        <translation>拡張機能からデスクトップ通知を送信できるようにします。</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Without accessibility access, paste, snippet expansion, and window management are unavailable.</source>
        <translation>アクセシビリティを許可しないと、貼り付け、スニペットの展開、ウィンドウ管理を利用できません。</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Full disk access needs to be explicitly enabled if you want file search to cover all your files.</source>
        <translation>すべてのファイルを検索対象にするには、フルディスクアクセスを明示的に有効にしてください。</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Make it your own</source>
        <translation>自分好みに設定</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>You will be able to change these settings later.</source>
        <translation>これらの設定は後から変更できます。</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Theme</source>
        <translation>テーマ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Shared across the entire app.</source>
        <translation>アプリ全体に適用されます。</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Global hotkey</source>
        <translation>グローバルホットキー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Opens the launcher from anywhere.</source>
        <translation>どの画面からでもランチャーを開けます。</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Bind a key to &quot;vicinae toggle&quot;</source>
        <translation>「vicinae toggle」にキーを割り当て</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Open Docs</source>
        <translation>ドキュメントを開く</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Launch at login</source>
        <translation>ログイン時に起動</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Starts Vicinae in the background at login.</source>
        <translation>ログイン時にVicinaeをバックグラウンドで起動します。</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Setup complete</source>
        <translation>設定完了</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Vicinae is running. Open the launcher with:</source>
        <translation>Vicinaeが起動しています。次のキーでランチャーを開けます：</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Vicinae is running. Bind a key to &quot;vicinae toggle&quot; to open it from anywhere.</source>
        <translation>Vicinaeが起動しています。「vicinae toggle」にキーを割り当てると、どの画面からでも開けます。</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Vicinae is open source software.</source>
        <translation>Vicinaeはオープンソースソフトウェアです。</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Sponsor</source>
        <translation>スポンサーになる</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Back</source>
        <translation>戻る</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Finish</source>
        <translation>完了</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Continue</source>
        <translation>次へ</translation>
    </message>
</context>
<context>
    <name>OpenAICompatibleFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="+61"/>
        <source>Executable</source>
        <translation>実行ファイル</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Path to the claude executable. Leave empty to find it automatically.</source>
        <translation>claude実行ファイルのパスです。空欄にすると自動的に検出します。</translation>
    </message>
</context>
<context>
    <name>OpenAIFields</name>
    <message>
        <location line="-53"/>
        <source>API Key</source>
        <translation>APIキー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Your Groq API key. You can create one in the Groq console.</source>
        <translation>GroqのAPIキーです。Groqコンソールで作成できます。</translation>
    </message>
</context>
<context>
    <name>OpenAppAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="-56"/>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="-89"/>
        <source>Failed to start app</source>
        <translation>アプリを起動できませんでした</translation>
    </message>
</context>
<context>
    <name>OpenAppLocationAction</name>
    <message>
        <location line="-36"/>
        <source>Open Location</source>
        <translation>保存場所を開く</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to open app location</source>
        <translation>アプリの場所を開けませんでした</translation>
    </message>
</context>
<context>
    <name>OpenBuiltinCommandAction</name>
    <message>
        <location filename="../src/actions/command-actions.hpp" line="+17"/>
        <source>Open command</source>
        <translation>コマンドを開く</translation>
    </message>
</context>
<context>
    <name>OpenCalculatorHistoryAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="+9"/>
        <source>Open Calculator History</source>
        <translation>計算履歴を開く</translation>
    </message>
</context>
<context>
    <name>OpenClipboardSelectionAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="-5"/>
        <source>Failed to read clipboard data</source>
        <translation>クリップボードのデータを読み取れませんでした</translation>
    </message>
</context>
<context>
    <name>OpenCompletedShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-32"/>
        <source>Open shortcut</source>
        <translation>ショートカットを開く</translation>
    </message>
</context>
<context>
    <name>OpenCompletedShortcutWithAction</name>
    <message>
        <location line="+114"/>
        <source>Open with...</source>
        <translation>別のアプリで開く...</translation>
    </message>
</context>
<context>
    <name>OpenControlPanelItemAction</name>
    <message>
        <location filename="../src/root-search/control-panel/control-panel-root-provider.cpp" line="+45"/>
        <source>Failed to open settings</source>
        <translation>設定を開けませんでした</translation>
    </message>
</context>
<context>
    <name>OpenControlPanelTaskAction</name>
    <message>
        <location line="+26"/>
        <source>Failed to open settings</source>
        <translation>設定を開けませんでした</translation>
    </message>
</context>
<context>
    <name>OpenDefaultVicinaeConfig</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="-117"/>
        <source>Open Default Config File</source>
        <translation>既定の設定ファイルを開く</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open the default vicinae configuration file</source>
        <translation>Vicinaeの既定の設定ファイルを開きます</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Failed to open temporary file</source>
        <translation>一時ファイルを開けませんでした</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to open default config file</source>
        <translation>既定の設定ファイルを開けませんでした</translation>
    </message>
</context>
<context>
    <name>OpenDiscordCommand</name>
    <message>
        <location line="-85"/>
        <source>Join the Discord Server</source>
        <translation>Discordサーバーに参加</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Open link to join the official Vicinae discord server.</source>
        <translation>Vicinaeの公式Discordサーバーへの参加リンクを開きます。</translation>
    </message>
</context>
<context>
    <name>OpenFileAction</name>
    <message>
        <location filename="../src/actions/file-actions.hpp" line="+18"/>
        <source>Open with %1</source>
        <translation>%1で開く</translation>
    </message>
</context>
<context>
    <name>OpenInBrowserAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+160"/>
        <source>Failed to open in browser</source>
        <translation>ブラウザーで開けませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Opened in browser</source>
        <translation>ブラウザーで開きました</translation>
    </message>
    <message>
        <location filename="../src/actions/app-actions.hpp" line="+117"/>
        <source>Open in browser</source>
        <translation>ブラウザーで開く</translation>
    </message>
</context>
<context>
    <name>OpenInTerminalAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="-150"/>
        <source>Failed to start app</source>
        <translation>アプリを起動できませんでした</translation>
    </message>
    <message>
        <location filename="../src/actions/app-actions.hpp" line="-74"/>
        <source>Open in %1</source>
        <translation>%1で開く</translation>
    </message>
</context>
<context>
    <name>OpenItemPreferencesAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="-28"/>
        <source>Open Preferences</source>
        <translation>環境設定を開く</translation>
    </message>
</context>
<context>
    <name>OpenLastChatCommand</name>
    <message>
        <location filename="../src/builtins/ai/ai-extension.hpp" line="-16"/>
        <source>Open Last AI Chat</source>
        <translation>最後のAIチャットを開く</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pick up your most recent AI conversation.</source>
        <translation>最近のAI会話を再開します。</translation>
    </message>
</context>
<context>
    <name>OpenRawProgramAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+35"/>
        <source>Failed to start app</source>
        <translation>アプリを起動できませんでした</translation>
    </message>
    <message>
        <location filename="../src/actions/app-actions.hpp" line="+25"/>
        <source>Execute program</source>
        <translation>プログラムを実行</translation>
    </message>
</context>
<context>
    <name>OpenRouterFields</name>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="+19"/>
        <source>API Key</source>
        <translation>APIキー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Your Mistral AI API key. You can find it in your Mistral dashboard.</source>
        <translation>Mistral AIのAPIキーです。Mistralのダッシュボードで確認できます。</translation>
    </message>
</context>
<context>
    <name>OpenSettingsCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+100"/>
        <source>Open Vicinae Settings</source>
        <translation>Vicinaeの設定を開く</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Open the vicinae settings window, which is an independent floating window.</source>
        <translation>Vicinaeの設定を独立したウィンドウで開きます。</translation>
    </message>
</context>
<context>
    <name>OpenSettingsPaneAction</name>
    <message>
        <location filename="../src/root-search/macos-settings/macos-settings-root-provider.mm" line="-143"/>
        <source>Failed to open System Settings</source>
        <translation>システム設定を開けませんでした</translation>
    </message>
</context>
<context>
    <name>OpenShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-161"/>
        <source>No default app to open %1</source>
        <translation>%1を開く既定のアプリがありません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No app with id %1</source>
        <translation>IDが%1のアプリがありません</translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+7"/>
        <source>Open shortcut</source>
        <translation>ショートカットを開く</translation>
    </message>
</context>
<context>
    <name>OpenShortcutFromSearchText</name>
    <message>
        <location line="+43"/>
        <source>Open shortcut</source>
        <translation>ショートカットを開く</translation>
    </message>
</context>
<context>
    <name>OpenVicinaeConfig</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="-76"/>
        <source>Open Config File</source>
        <translation>設定ファイルを開く</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open the main vicinae configuration file</source>
        <translation>Vicinaeのメイン設定ファイルを開きます</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Show Log File</source>
        <translation>ログファイルを表示</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open the Vicinae log file in your file browser</source>
        <translation>Vicinaeのログファイルをファイルマネージャーで表示します</translation>
    </message>
</context>
<context>
    <name>OpenWindowsSettingAction</name>
    <message>
        <location filename="../src/root-search/windows-settings/windows-settings-root-provider.cpp" line="+147"/>
        <source>Failed to open settings</source>
        <translation>設定を開けませんでした</translation>
    </message>
</context>
<context>
    <name>OpenWithAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+119"/>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="+36"/>
        <source>Open with...</source>
        <translation>別のアプリで開く...</translation>
    </message>
</context>
<context>
    <name>PasteLastScreenshotCommand</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshots-extension.hpp" line="+30"/>
        <source>Paste Last Screenshot</source>
        <translation>最新のスクリーンショットを貼り付け</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Paste the most recent saved screenshot into the active app.</source>
        <translation>最後に保存したスクリーンショットをアクティブなアプリに貼り付けます。</translation>
    </message>
</context>
<context>
    <name>PasteToFocusedWindowAction</name>
    <message>
        <location filename="../src/actions/clipboard-actions.hpp" line="+16"/>
        <source>Paste to %1</source>
        <translation>%1に貼り付け</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Paste to active window</source>
        <translation>アクティブなウィンドウに貼り付け</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Copy to focused window</source>
        <translation>フォーカス中のウィンドウにコピー</translation>
    </message>
</context>
<context>
    <name>PinCalculatorHistoryRecordAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="+28"/>
        <source>Entry pinned</source>
        <translation>項目をピン留めしました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Pin entry</source>
        <translation>項目をピン留め</translation>
    </message>
</context>
<context>
    <name>PinClipboardAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="+31"/>
        <source>Selection pinned</source>
        <translation>選択した項目をピン留めしました</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Selection unpinned</source>
        <translation>選択した項目のピン留めを外しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to change pin status</source>
        <translation>ピン留めの状態を変更できませんでした</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Pin</source>
        <translation>ピン留め</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Unpin</source>
        <translation>ピン留めを外す</translation>
    </message>
</context>
<context>
    <name>PinEmojiAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="-345"/>
        <source>Pin emoji</source>
        <translation>絵文字をピン留め</translation>
    </message>
</context>
<context>
    <name>PinWindowAction</name>
    <message>
        <location filename="../src/actions/window-actions.hpp" line="+37"/>
        <source>Unpin from all workspaces</source>
        <translation>すべてのワークスペースへの固定を解除</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Pin to all workspaces</source>
        <translation>すべてのワークスペースに固定</translation>
    </message>
</context>
<context>
    <name>PlayPauseCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="-100"/>
        <source>Play / Pause</source>
        <translation>再生／一時停止</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Toggle playback of the active media player</source>
        <translation>アクティブなメディアプレーヤーの再生状態を切り替えます</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>player</source>
        <translation>プレーヤー</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to toggle playback</source>
        <translation>再生状態を切り替えられませんでした</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Paused</source>
        <translation>一時停止中</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Playing %1</source>
        <translation>%1を再生中</translation>
    </message>
</context>
<context>
    <name>PowerCommandPreferences</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="-285"/>
        <source>Ask for confirmation</source>
        <translation>実行前に確認</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Custom program</source>
        <translation>カスタムプログラム</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Custom shell command to run instead of the default implementation</source>
        <translation>標準の処理の代わりに実行するシェルコマンド</translation>
    </message>
</context>
<context>
    <name>PowerManagementCommand</name>
    <message>
        <location line="+33"/>
        <source>Failed to execute custom program %1</source>
        <translation>カスタムプログラム%1を実行できませんでした</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Are you sure</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>High-impact operation, please confirm</source>
        <translation>システムの動作に大きく影響する操作です。実行を確認してください</translation>
    </message>
</context>
<context>
    <name>PowerManagementExtension</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.hpp" line="+8"/>
        <source>Power Management</source>
        <translation>電源管理</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Power off, suspend, sleep, hibernate your computer.</source>
        <translation>PCの電源オフ、サスペンド、スリープ、休止状態への移行を行います。</translation>
    </message>
</context>
<context>
    <name>PowerOffCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+137"/>
        <source>Power Off System</source>
        <translation>システムの電源を切る</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Power off the system</source>
        <translation>システムの電源を切ります</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>System cannot power off</source>
        <translation>このシステムは電源を切れません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to power off</source>
        <translation>電源を切れませんでした</translation>
    </message>
</context>
<context>
    <name>PreferenceSchema</name>
    <message>
        <location filename="../src/builtins/dictation/dictation-preferences.hpp" line="+26"/>
        <source>Transcription model</source>
        <translation>文字起こしモデル</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Model used to turn your voice into text. You can configure cloud options, or Vicinae can download and run local transcription models for you.</source>
        <translation>音声をテキストに変換するモデルです。クラウドのオプションを設定することも、Vicinaeがローカルの文字起こしモデルをダウンロードして実行することもできます。</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>None</source>
        <translation>なし</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Language</source>
        <translation>言語</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Language you dictate in. Some models can auto-detect it, others need it set explicitly.</source>
        <translation>ディクテーションで話す言語です。自動検出に対応しているモデルと、明示的に設定する必要があるモデルがあります。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Auto-detect</source>
        <translation>自動検出</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>All languages</source>
        <translation>すべての言語</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Sound Effects</source>
        <translation>効果音</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Whether to play a sound effect when starting or stopping dictation.</source>
        <translation>ディクテーションの開始・停止時に効果音を再生するかどうかです。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Pause media</source>
        <translation>メディアを一時停止</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pause media players when recording and resume them after. The audio output is muted instead when players cannot be controlled.</source>
        <translation>録音中はメディアプレーヤーを一時停止し、終了後に再開します。制御できない場合は、代わりに音声出力をミュートします。</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Dictation Action</source>
        <translation>ディクテーションアクション</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>What to do after dictation</source>
        <translation>ディクテーションの終了後の動作です</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Paste to active window</source>
        <translation>アクティブなウィンドウに貼り付け</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy to clipboard</source>
        <translation>クリップボードにコピー</translation>
    </message>
    <message>
        <location filename="../src/services/ai/ai-preferences.hpp" line="+52"/>
        <source>Providers</source>
        <translation>プロバイダー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Local and cloud AI providers. Their models power dictation and Quick AI.</source>
        <translation>ローカルおよびクラウドのAIプロバイダーです。これらのモデルがディクテーションとQuick AIで使用されます。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Default model</source>
        <translation>デフォルトモデル</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The model new conversations start with in AI Chat and Quick AI, also used by extensions that don&apos;t ask for a specific one.</source>
        <translation>AIチャットとQuick AIで新しい会話を始めるときに使用するモデルです。特定のモデルを指定していない拡張機能でも使用されます。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Custom instructions</source>
        <translation>カスタム指示</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Tell the AI how to respond in Quick AI and AI Chat: your language, tone, how long answers should be, or anything it should know about you.</source>
        <translation>Quick AIとAIチャットでの応答方法をAIに伝えます。使用する言語、口調、回答の長さ、あなたについて知っておいてほしいことなどを指定できます。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Answer in French. Keep answers short unless I ask for details.</source>
        <translation>フランス語で答えてください。詳細を求めない限り短めに答えてください。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Enable tools</source>
        <translation>ツールを有効にする</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Allow AI models to use tools from enabled extensions.</source>
        <translation>AIモデルが有効にした拡張機能のツールを使用できるようにします。</translation>
    </message>
    <message>
        <location filename="../src/services/ai/ai-provider-types.hpp" line="-45"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>How this instance is shown in model lists.</source>
        <translation>このインスタンスをモデル一覧に表示するときの名前です。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Server URL</source>
        <translation>サーバーURL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The address of your Ollama instance.</source>
        <translation>Ollamaインスタンスのアドレスです。</translation>
    </message>
</context>
<context>
    <name>PreviewFontAction</name>
    <message>
        <location filename="../src/builtins/font/font-grid-model.cpp" line="-123"/>
        <source>Preview font</source>
        <translation>フォントをプレビュー</translation>
    </message>
</context>
<context>
    <name>PreviousTrackCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="+43"/>
        <location line="+26"/>
        <source>Previous Track</source>
        <translation>前の曲</translation>
    </message>
    <message>
        <location line="-25"/>
        <source>Skip to the previous track</source>
        <translation>前の曲に戻ります</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>player</source>
        <translation>プレーヤー</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>%1 cannot skip to the previous track</source>
        <translation>%1は前の曲に戻れません</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to skip to the previous track</source>
        <translation>前の曲に戻れませんでした</translation>
    </message>
</context>
<context>
    <name>ProgramsSection</name>
    <message>
        <location filename="../src/builtins/system/system-run-model.cpp" line="+52"/>
        <source>Open in %1 (hold)</source>
        <translation>%1で開く（終了後も表示）</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open in %1</source>
        <translation>%1で開く</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Copy exec path</source>
        <translation>実行ファイルのパスをコピー</translation>
    </message>
    <message>
        <location filename="../src/builtins/system/system-run-model.hpp" line="+21"/>
        <source>Programs (%1)</source>
        <translation>プログラム（%1）</translation>
    </message>
</context>
<context>
    <name>ProviderSearchSection</name>
    <message>
        <location filename="../src/builtins/root/provider-search-model.hpp" line="+11"/>
        <source>Results ({count})</source>
        <translation>検索結果（{count}）</translation>
    </message>
</context>
<context>
    <name>ProviderSearchViewHost</name>
    <message>
        <location filename="../src/builtins/root/provider-search-view-host.cpp" line="+15"/>
        <source>Search %1</source>
        <translation>%1を検索</translation>
    </message>
</context>
<context>
    <name>PutCalculatorAnswerInSearchBar</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="-20"/>
        <source>Put answer in search bar</source>
        <translation>計算結果を検索欄に入力</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/utils/utils.cpp" line="+48"/>
        <source>in the future</source>
        <translation>未来</translation>
    </message>
    <message numerus="yes">
        <location line="+8"/>
        <source>%n year(s) ago</source>
        <translation>
            <numerusform>%n年前</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location line="+3"/>
        <source>%n month(s) ago</source>
        <translation>
            <numerusform>%nか月前</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location line="+2"/>
        <source>%n day(s) ago</source>
        <translation>
            <numerusform>%n日前</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location line="+2"/>
        <source>%n hour(s) ago</source>
        <translation>
            <numerusform>%n時間前</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location line="+2"/>
        <source>%n minute(s) ago</source>
        <translation>
            <numerusform>%n分前</numerusform>
        </translation>
    </message>
    <message>
        <location line="+2"/>
        <source>just now</source>
        <translation>たった今</translation>
    </message>
</context>
<context>
    <name>QuickAICommand</name>
    <message>
        <location filename="../src/builtins/ai/ai-extension.cpp" line="+19"/>
        <source>Set up an AI provider</source>
        <translation>AIプロバイダーをセットアップ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Quick AI needs a language model before it can answer. Add an AI provider in the settings.</source>
        <translation>Quick AIが回答するには言語モデルが必要です。設定でAIプロバイダーを追加してください。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open AI Settings</source>
        <translation>AI設定を開く</translation>
    </message>
    <message>
        <location filename="../src/builtins/ai/ai-extension.hpp" line="-23"/>
        <source>Quick AI</source>
        <translation>Quick AI</translation>
    </message>
</context>
<context>
    <name>QuickAIView</name>
    <message>
        <location filename="../src/ui/qml/views/QuickAIView.qml" line="+54"/>
        <source>Open in AI Chat</source>
        <translation>AIチャットで開く</translation>
    </message>
    <message>
        <location line="+52"/>
        <source>Ask anything...</source>
        <translation>何でも質問してください...</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Ask a follow-up...</source>
        <translation>続けて質問する...</translation>
    </message>
</context>
<context>
    <name>QuickAIViewHost</name>
    <message>
        <location filename="../src/builtins/ai/quick-ai-view-host.cpp" line="+82"/>
        <source>Could not load conversations.</source>
        <translation>会話を読み込めませんでした。</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>Quick AI</source>
        <translation>Quick AI</translation>
    </message>
</context>
<context>
    <name>QuitAppAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="-108"/>
        <source>Quit Application</source>
        <translation>アプリを終了</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to quit %1</source>
        <translation>%1を終了できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quit %1</source>
        <translation>%1を終了</translation>
    </message>
</context>
<context>
    <name>RaycastCompatExtension</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-compat-extension.hpp" line="+15"/>
        <source>Raycast compatibility features</source>
        <translation>Raycastとの互換機能</translation>
    </message>
</context>
<context>
    <name>RaycastStoreCommand</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-store-command.hpp" line="+15"/>
        <source>Install compatible extensions from the Raycast store</source>
        <translation>Raycast Storeから互換性のある拡張機能をインストール</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>
# Welcome to the Raycast Extension Store

Vicinae provides direct integration with the official [Raycast store](https://www.raycast.com/store), allowing you to search and install Raycast extensions directly from Vicinae.
</source>
        <translation>
# Raycast Extension Storeへようこそ

Vicinaeは公式の[Raycast Store](https://www.raycast.com/store)と連携しており、Vicinaeから直接Raycastの拡張機能を検索・インストールできます。
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>
Each extension has a colored compatibility indicator showing how well it works on Linux.

Vicinae also has its own [extension store](vicinae://launch/core/store), which does not suffer from these limitations.
</source>
        <translation>
各拡張機能には、Linuxでの動作状況を示す色付きの互換性マークが表示されます。

Vicinae独自の[Extension Store](vicinae://launch/core/store)には、これらの制限がありません。
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>
Vicinae also has its own [extension store](vicinae://launch/core/store).
</source>
        <translation>
Vicinae独自の[Extension Store](vicinae://launch/core/store)もあります。
</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Continue to store</source>
        <translation>ストアへ進む</translation>
    </message>
</context>
<context>
    <name>RaycastStoreDetailHost</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-store-detail-host.cpp" line="+41"/>
        <source>Failed to load extension</source>
        <translation>拡張機能を読み込めませんでした</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The extension &quot;%1&quot; could not be loaded. It may not exist or the store may be unreachable.</source>
        <translation>拡張機能「%1」を読み込めませんでした。存在しないか、ストアに接続できない可能性があります。</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Extension Store - %1</source>
        <translation>Extension Store - %1</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>This extension should be fully compatible.</source>
        <translation>この拡張機能は完全に動作する見込みです。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>This extension works but has a few quirks.</source>
        <translation>この拡張機能は動作しますが、一部に問題があります。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>This extension is not compatible.</source>
        <translation>この拡張機能には互換性がありません。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>No compatibility data is available for this extension.</source>
        <translation>この拡張機能の互換性情報はありません。</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>No compatibility data is available — this extension may or may not work.</source>
        <translation>互換性情報がないため、動作するかどうかは不明です。</translation>
    </message>
    <message>
        <location line="+75"/>
        <source>Extension Store</source>
        <translation>Extension Store</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Report issue</source>
        <translation>問題を報告</translation>
    </message>
</context>
<context>
    <name>RaycastStoreSection</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-store-model.cpp" line="+46"/>
        <source>Show details</source>
        <translation>詳細を表示</translation>
    </message>
</context>
<context>
    <name>RaycastStoreViewHost</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-store-view-host.cpp" line="+36"/>
        <source>Browse Raycast extensions</source>
        <translation>Raycastの拡張機能を探す</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Failed to fetch extensions</source>
        <translation>拡張機能を取得できませんでした</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Extensions</source>
        <translation>拡張機能</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to search extensions</source>
        <translation>拡張機能を検索できませんでした</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Results</source>
        <translation>検索結果</translation>
    </message>
</context>
<context>
    <name>RebootCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="-72"/>
        <source>Reboot System</source>
        <translation>システムを再起動</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reboot the system</source>
        <translation>システムを再起動します</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>System can&apos;t reboot</source>
        <translation>このシステムは再起動できません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to reboot</source>
        <translation>再起動できませんでした</translation>
    </message>
</context>
<context>
    <name>RebuildFileIndexCommand</name>
    <message>
        <location filename="../src/builtins/file/file-extension.hpp" line="-64"/>
        <source>Rebuild File Index</source>
        <translation>ファイルの索引を再作成</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Fully rebuild the file index. Running this manually can be useful if the file search feels particularly out of date.</source>
        <translation>ファイルの索引をすべて再作成します。ファイル検索の結果が古いと感じる場合に実行してください。</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Are you sure?</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rebuilding the entire index can be time consuming and CPU intensive, depending on the number of files present in your home directory.</source>
        <translation>ホームフォルダー内のファイル数によっては、索引全体の再作成に時間がかかり、CPUに高い負荷がかかることがあります。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Reset</source>
        <translation>リセット</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Index rebuild started...</source>
        <translation>索引の再作成を開始しました...</translation>
    </message>
</context>
<context>
    <name>RefreshAppsCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/refresh-apps-command.cpp" line="+15"/>
        <source>Apps successfully refreshed</source>
        <translation>アプリ一覧を更新しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to refresh apps</source>
        <translation>アプリ一覧を更新できませんでした</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/refresh-apps-command.hpp" line="+12"/>
        <source>Refresh Apps</source>
        <translation>アプリ一覧を更新</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Force a refresh of the application database. The database should normally automatically update itself on changes, but this can help working around some edge cases.</source>
        <translation>アプリのデータベースを強制的に更新します。通常は変更時に自動更新されますが、反映されない場合に役立ちます。</translation>
    </message>
</context>
<context>
    <name>RegisteredTool</name>
    <message>
        <location filename="../src/services/ai/tool-registry.cpp" line="+43"/>
        <source>This tool is not enabled.</source>
        <translation>このツールは無効です。</translation>
    </message>
</context>
<context>
    <name>ReloadScriptDirectoriesCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+76"/>
        <source>Reload Script Directories</source>
        <translation>スクリプトフォルダーを再読み込み</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reload script directories</source>
        <translation>スクリプトフォルダーを再読み込み</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>New scan triggered, index will update shortly</source>
        <translation>再スキャンを開始しました。まもなく索引が更新されます</translation>
    </message>
</context>
<context>
    <name>RemoveAllCalculatorHistoryRecordsAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="+76"/>
        <source>Delete all entries</source>
        <translation>すべての項目を削除</translation>
    </message>
</context>
<context>
    <name>RemoveAllSelectionsAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="+28"/>
        <source>Are you sure?</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>All your clipboard history will be lost forever</source>
        <translation>クリップボード履歴がすべて完全に削除されます</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Delete all</source>
        <translation>すべて削除</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>All selections were removed</source>
        <translation>すべての項目を削除しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove all selections</source>
        <translation>すべての項目を削除できませんでした</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Remove all</source>
        <translation>すべて削除</translation>
    </message>
</context>
<context>
    <name>RemoveCalculatorHistoryRecordAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="-22"/>
        <source>Entry removed</source>
        <translation>項目を削除しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove entry</source>
        <translation>項目を削除できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Delete entry</source>
        <translation>項目を削除</translation>
    </message>
</context>
<context>
    <name>RemoveSelectionAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="-71"/>
        <source>Entry removed</source>
        <translation>項目を削除しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove entry</source>
        <translation>項目を削除できませんでした</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Remove entry</source>
        <translation>項目を削除</translation>
    </message>
</context>
<context>
    <name>RemoveShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="+33"/>
        <source>Removed link</source>
        <translation>リンクを削除しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove link</source>
        <translation>リンクを削除できませんでした</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Remove link</source>
        <translation>リンクを削除</translation>
    </message>
</context>
<context>
    <name>ReportVicinaeBugCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/report-bug-command.hpp" line="+10"/>
        <source>Report a Vicinae Bug</source>
        <translation>Vicinaeの不具合を報告</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Navigate to Vicinae issue creation page with all relevant informations pre-filled.</source>
        <translation>必要な情報を入力済みの状態で、Vicinaeの不具合報告ページを開きます。</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Title</source>
        <translation>タイトル</translation>
    </message>
</context>
<context>
    <name>ResetEmojiRankingAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="+21"/>
        <source>Reset ranking</source>
        <translation>順位をリセット</translation>
    </message>
</context>
<context>
    <name>ResetEmojiSkinToneAction</name>
    <message>
        <location line="+34"/>
        <source>Reset to preference</source>
        <translation>設定した肌の色に戻す</translation>
    </message>
</context>
<context>
    <name>ResetItemRanking</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="-69"/>
        <source>Ranking was successfully reset</source>
        <translation>順位をリセットしました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Unable to reset ranking</source>
        <translation>順位をリセットできませんでした</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Are you sure?</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You will have to rebuild search history for this item in order for it to reappear on top of the root search results.</source>
        <translation>この項目を再びメイン画面の検索結果の上位に表示するには、検索履歴を蓄積する必要があります。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Reset</source>
        <translation>リセット</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Reset ranking</source>
        <translation>順位をリセット</translation>
    </message>
</context>
<context>
    <name>RevealFileInFolderAction</name>
    <message>
        <location filename="../src/utils/file-list-item.hpp" line="+31"/>
        <source>Show in file browser</source>
        <translation>ファイルマネージャーで表示</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to open folder</source>
        <translation>フォルダーを開けませんでした</translation>
    </message>
</context>
<context>
    <name>RootCalculatorSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="+175"/>
        <source>Copy unformatted answer</source>
        <translation>書式なしで計算結果をコピー</translation>
    </message>
    <message>
        <location filename="../src/builtins/root/root-search-sources.hpp" line="+89"/>
        <source>Calculator</source>
        <translation>電卓</translation>
    </message>
</context>
<context>
    <name>RootFallbackSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="+259"/>
        <source>Use &quot;%1&quot; with...</source>
        <translation>「%1」を使って...</translation>
    </message>
</context>
<context>
    <name>RootFavoritesSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.hpp" line="+67"/>
        <source>Favorites</source>
        <translation>お気に入り</translation>
    </message>
</context>
<context>
    <name>RootFilesSection</name>
    <message>
        <location line="+52"/>
        <source>Files</source>
        <translation>ファイル</translation>
    </message>
</context>
<context>
    <name>RootLinkSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="-311"/>
        <source>Open in %1</source>
        <translation>%1で開く</translation>
    </message>
    <message>
        <location filename="../src/builtins/root/root-search-sources.hpp" line="-141"/>
        <source>Link</source>
        <translation>リンク</translation>
    </message>
</context>
<context>
    <name>RootNewsSection</name>
    <message>
        <location line="+66"/>
        <source>What&apos;s New</source>
        <translation>新着情報</translation>
    </message>
</context>
<context>
    <name>RootResultsSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="+204"/>
        <source>Suggestions</source>
        <translation>候補</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Results (%1)</source>
        <translation>検索結果（%1）</translation>
    </message>
</context>
<context>
    <name>RootSearchActionGenerator</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="+71"/>
        <source>Copy ID</source>
        <translation>IDをコピー</translation>
    </message>
</context>
<context>
    <name>RootShortcutItem</name>
    <message>
        <location filename="../src/root-search/shortcuts/shortcut-root-provider.cpp" line="+70"/>
        <location line="+11"/>
        <source>Shortcut</source>
        <translation>ショートカット</translation>
    </message>
</context>
<context>
    <name>RootUpdateSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="-137"/>
        <source>Vicinae %1 is available</source>
        <translation>Vicinae %1を利用できます</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>You are running %1</source>
        <translation>現在のバージョンは%1です</translation>
    </message>
    <message>
        <location line="+8"/>
        <location filename="../src/builtins/root/root-search-sources.hpp" line="-21"/>
        <source>Update</source>
        <translation>更新</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>View Release Notes</source>
        <translation>リリースノートを表示</translation>
    </message>
</context>
<context>
    <name>RootViewHost</name>
    <message>
        <location filename="../src/builtins/root/root-view-host.hpp" line="+15"/>
        <source>Search for anything...</source>
        <translation>検索...</translation>
    </message>
</context>
<context>
    <name>RunAppleShortcutAction</name>
    <message>
        <location filename="../src/root-search/apple-shortcuts/apple-shortcut-root-provider.cpp" line="-29"/>
        <source>Run Shortcut</source>
        <translation>ショートカットを実行</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to start shortcut</source>
        <translation>ショートカットを実行できませんでした</translation>
    </message>
</context>
<context>
    <name>RunExecutableAction</name>
    <message>
        <location filename="../src/utils/file-list-item.hpp" line="+50"/>
        <source>Run executable</source>
        <translation>実行ファイルを起動</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to give executable permission</source>
        <translation>実行権限を付与できませんでした</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to start executable</source>
        <translation>実行ファイルを起動できませんでした</translation>
    </message>
</context>
<context>
    <name>SaveAsAction</name>
    <message>
        <location filename="../src/actions/save-as-action.cpp" line="+36"/>
        <source>Save as…</source>
        <translation>名前を付けて保存…</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Saved %1</source>
        <translation>%1を保存しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to save %1</source>
        <translation>%1を保存できませんでした</translation>
    </message>
</context>
<context>
    <name>SaveFileFallback</name>
    <message>
        <location filename="../src/ui/qml/launcher/SaveFileFallback.qml" line="+8"/>
        <source>Save as</source>
        <translation>名前を付けて保存</translation>
    </message>
</context>
<context>
    <name>ScreenshotActions</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshot-actions.cpp" line="+15"/>
        <source>Refresh</source>
        <translation>更新</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Cannot paste</source>
        <translation>貼り付けできません</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Allow Accessibility access to paste into other apps.</source>
        <translation>ほかのアプリに貼り付けるには、アクセシビリティへのアクセスを許可してください。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Could not read recording</source>
        <translation>画面収録を読み込めませんでした</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Could not read screenshot</source>
        <translation>スクリーンショットを読み込めませんでした</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The file may have been moved or deleted.</source>
        <translation>ファイルが移動または削除された可能性があります。</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Could not paste recording</source>
        <translation>画面収録を貼り付けられませんでした</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Could not paste screenshot</source>
        <translation>スクリーンショットを貼り付けられませんでした</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Recording copied</source>
        <translation>画面収録をコピーしました</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Screenshot copied</source>
        <translation>スクリーンショットをコピーしました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Could not copy recording</source>
        <translation>画面収録をコピーできませんでした</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Could not copy screenshot</source>
        <translation>スクリーンショットをコピーできませんでした</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>No saved screenshots found</source>
        <translation>保存済みのスクリーンショットが見つかりません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Take a screenshot and save it to a file first.</source>
        <translation>先にスクリーンショットを撮り、ファイルに保存してください。</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Refreshing...</source>
        <translation>更新中...</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Could not refresh all screenshots and recordings</source>
        <translation>すべてのスクリーンショットと画面収録を更新できませんでした</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Refreshed</source>
        <translation>更新しました</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Paste Recording</source>
        <translation>画面収録を貼り付け</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Paste Screenshot</source>
        <translation>スクリーンショットを貼り付け</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy Recording</source>
        <translation>画面収録をコピー</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Copy Screenshot</source>
        <translation>スクリーンショットをコピー</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Open Recording</source>
        <translation>画面収録を開く</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Open Screenshot</source>
        <translation>スクリーンショットを開く</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Could not open file</source>
        <translation>ファイルを開けませんでした</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Show in Finder</source>
        <translation>Finderで表示</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Show in File Browser</source>
        <translation>ファイルマネージャーで表示</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Could not show file in file browser</source>
        <translation>ファイルマネージャーでファイルを表示できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy File Path</source>
        <translation>ファイルのパスをコピー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Move to Trash</source>
        <translation>ゴミ箱に入れる</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>File moved to Trash</source>
        <translation>ファイルをゴミ箱に入れました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Could not move file to Trash</source>
        <translation>ファイルをゴミ箱に入れられませんでした</translation>
    </message>
</context>
<context>
    <name>ScreenshotGridModel</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshot-grid-model.cpp" line="+80"/>
        <source>Today</source>
        <translation>今日</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Yesterday</source>
        <translation>昨日</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Older</source>
        <translation>それ以前</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Search Results</source>
        <translation>検索結果</translation>
    </message>
</context>
<context>
    <name>ScreenshotGridSource</name>
    <message>
        <location line="-79"/>
        <source>Screen Recording</source>
        <translation>画面収録</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Recording · %1</source>
        <translation>画面収録 · %1</translation>
    </message>
</context>
<context>
    <name>ScreenshotsExtension</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshots-extension.hpp" line="+17"/>
        <source>Screenshots</source>
        <translation>スクリーンショット</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Search and share saved screenshots and screen recordings.</source>
        <translation>保存済みのスクリーンショットや画面収録を検索・共有します。</translation>
    </message>
</context>
<context>
    <name>ScreenshotsView</name>
    <message>
        <location filename="../src/ui/qml/views/ScreenshotsView.qml" line="+10"/>
        <source>No screenshots or recordings found</source>
        <translation>スクリーンショットや画面収録が見つかりません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save a screenshot or screen recording to a file, or try another search.</source>
        <translation>スクリーンショットや画面収録をファイルに保存するか、検索条件を変えてください。</translation>
    </message>
</context>
<context>
    <name>ScreenshotsViewHost</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshots-view-host.cpp" line="+13"/>
        <source>Search screenshots and recordings...</source>
        <translation>スクリーンショットと画面収録を検索...</translation>
    </message>
</context>
<context>
    <name>ScriptExecutorViewHost</name>
    <message>
        <location filename="../src/script/script-executor-view-host.cpp" line="+79"/>
        <source>Script execution failed: %1</source>
        <translation>スクリプトの実行に失敗しました：%1</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Running... (%1s ago)</source>
        <translation>実行中...（%1秒経過）</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Done in %1s (exit=%2)</source>
        <translation>%1秒で完了（終了コード=%2）</translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+9"/>
        <source>Script process killed</source>
        <translation>スクリプトのプロセスを強制終了しました</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Running...</source>
        <translation>実行中...</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Kill process</source>
        <translation>プロセスを強制終了</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Run script again</source>
        <translation>スクリプトを再実行</translation>
    </message>
</context>
<context>
    <name>ScriptPreferences</name>
    <message>
        <location filename="../src/root-search/scripts/script-root-provider.hpp" line="+137"/>
        <source>Custom directories</source>
        <translation>追加フォルダー</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Additional list of directories to source scripts from. These directories always take precedence over the default system ones</source>
        <translation>スクリプトを読み込む追加のフォルダーです。標準のシステムフォルダーより常に優先されます</translation>
    </message>
</context>
<context>
    <name>ScriptRootItem</name>
    <message>
        <location line="-112"/>
        <location line="+87"/>
        <source>Script</source>
        <translation>スクリプト</translation>
    </message>
    <message>
        <location line="-44"/>
        <source>Mode</source>
        <translation>モード</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Path</source>
        <translation>パス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Author</source>
        <translation>作者</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Open script directory</source>
        <translation>スクリプトのフォルダーを開く</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy path to script</source>
        <translation>スクリプトのパスをコピー</translation>
    </message>
</context>
<context>
    <name>ScriptRootProvider</name>
    <message>
        <location line="+64"/>
        <source>Script Commands</source>
        <translation>スクリプトコマンド</translation>
    </message>
</context>
<context>
    <name>SearchBar</name>
    <message>
        <location filename="../src/ui/qml/launcher/SearchBar.qml" line="+368"/>
        <source>Ask AI</source>
        <translation>AIに質問</translation>
    </message>
</context>
<context>
    <name>SearchBrowserBookmarksCommand</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.cpp" line="+31"/>
        <source>Search Browser Bookmarks</source>
        <translation>ブラウザーのブックマークを検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search bookmarks from all connected browsers</source>
        <translation>接続中のすべてのブラウザーのブックマークを検索します</translation>
    </message>
</context>
<context>
    <name>SearchBrowserHistoryCommand</name>
    <message>
        <location line="+15"/>
        <source>Search Browser History</source>
        <translation>ブラウザーの履歴を検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search browsing history from all connected browsers</source>
        <translation>接続中のすべてのブラウザーの閲覧履歴を検索します</translation>
    </message>
</context>
<context>
    <name>SearchBrowserTabsCommand</name>
    <message>
        <location line="-33"/>
        <source>Search Browser Tabs</source>
        <translation>ブラウザーのタブを検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search tabs from all connected browsers</source>
        <translation>接続中のすべてのブラウザーからタブを検索します</translation>
    </message>
</context>
<context>
    <name>SearchEmojiCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/search-emoji-command.hpp" line="+16"/>
        <source>Search Emojis &amp; Symbols</source>
        <translation>絵文字と記号を検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search for any emoji or symbol</source>
        <translation>絵文字や記号を検索します</translation>
    </message>
</context>
<context>
    <name>SearchEmojiGridSource</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.hpp" line="-20"/>
        <source>Results (%1)</source>
        <translation>検索結果（%1）</translation>
    </message>
</context>
<context>
    <name>SearchFilesCommand</name>
    <message>
        <location filename="../src/builtins/file/file-extension.hpp" line="-34"/>
        <source>Search Files</source>
        <translation>ファイルを検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search files on your system</source>
        <translation>システム上のファイルを検索します</translation>
    </message>
</context>
<context>
    <name>SearchFilesView</name>
    <message>
        <location filename="../src/ui/qml/views/SearchFilesView.qml" line="+37"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Path</source>
        <translation>パス</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Type</source>
        <translation>種類</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Last modified</source>
        <translation>最終更新日時</translation>
    </message>
</context>
<context>
    <name>SearchFilesViewHost</name>
    <message>
        <location filename="../src/builtins/file/search-files-view-host.cpp" line="+55"/>
        <source>Search for files...</source>
        <translation>ファイルを検索...</translation>
    </message>
    <message>
        <location line="+31"/>
        <location line="+4"/>
        <source>Direct file path</source>
        <translation>指定したファイルパス</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Recently Accessed</source>
        <translation>最近アクセスした項目</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Recently Modified</source>
        <translation>最近変更した項目</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Results</source>
        <translation>検索結果</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>All</source>
        <translation>すべて</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Other</source>
        <translation>その他</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Directories</source>
        <translation>フォルダー</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Images</source>
        <translation>画像</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Videos</source>
        <translation>動画</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Audio</source>
        <translation>音声</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Documents</source>
        <translation>ドキュメント</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Archives</source>
        <translation>アーカイブ</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Applications</source>
        <translation>アプリ</translation>
    </message>
</context>
<context>
    <name>SearchMenuBarCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/search-menu-bar-command.hpp" line="+11"/>
        <source>Search Menu Bar Items</source>
        <translation>メニューバーの項目を検索</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Search and run menu bar items of the frontmost application</source>
        <translation>最前面のアプリのメニューバー項目を検索・実行します</translation>
    </message>
</context>
<context>
    <name>SearchScreenshotsCommand</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshots-extension.hpp" line="-38"/>
        <source>Search Screenshots</source>
        <translation>スクリーンショットを検索</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Search and share saved screenshots and screen recordings.</source>
        <translation>保存済みのスクリーンショットや画面収録を検索・共有します。</translation>
    </message>
</context>
<context>
    <name>SearchTrayCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/search-tray-command.hpp" line="+10"/>
        <source>Search Tray</source>
        <translation>システムトレイを検索</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browse system tray items and trigger their menu actions</source>
        <translation>システムトレイの項目を表示し、メニューの操作を実行します</translation>
    </message>
</context>
<context>
    <name>SearchTrayViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/search-tray-view-host.hpp" line="+122"/>
        <source>Search tray items...</source>
        <translation>トレイの項目を検索...</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Attention</source>
        <translation>要確認</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Browse Menu</source>
        <translation>メニューを表示</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Activate</source>
        <translation>実行</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Secondary Activate</source>
        <translation>副アクションを実行</translation>
    </message>
</context>
<context>
    <name>SetAppFont</name>
    <message>
        <location filename="../src/builtins/font/font-grid-model.cpp" line="-15"/>
        <source>Set as vicinae font</source>
        <translation>Vicinaeのフォントに設定</translation>
    </message>
</context>
<context>
    <name>SetDefaultBrowser</name>
    <message>
        <location filename="../src/builtins/system/system-extension.hpp" line="+119"/>
        <source>Set Default Browser</source>
        <translation>既定のブラウザーを設定</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Change the default system web browser</source>
        <translation>システムの既定のWebブラウザーを変更します</translation>
    </message>
</context>
<context>
    <name>SetDefaultBrowserViewHost</name>
    <message>
        <location filename="../src/builtins/system/set-default-browser-view-host.hpp" line="+22"/>
        <source>Select a web browser...</source>
        <translation>Webブラウザーを選択...</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Available web browsers</source>
        <translation>利用可能なWebブラウザー</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Set as default browser</source>
        <translation>既定のブラウザーに設定</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Default browser changed</source>
        <translation>既定のブラウザーを変更しました</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to set default browser</source>
        <translation>既定のブラウザーを設定できませんでした</translation>
    </message>
</context>
<context>
    <name>SetDefaultTerminal</name>
    <message>
        <location filename="../src/builtins/system/system-extension.hpp" line="-11"/>
        <source>Set Default Terminal</source>
        <translation>既定のターミナルを設定</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Change the default system terminal</source>
        <translation>システムの既定のターミナルを変更します</translation>
    </message>
</context>
<context>
    <name>SetRootItemAliasAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="-34"/>
        <source>Set alias</source>
        <translation>別名を設定</translation>
    </message>
</context>
<context>
    <name>SetRootItemShortcutAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="+103"/>
        <source>Set Global Shortcut</source>
        <translation>グローバルショートカットを設定</translation>
    </message>
</context>
<context>
    <name>SetThemeAction</name>
    <message>
        <location filename="../src/actions/theme-actions.cpp" line="+11"/>
        <source>Theme successfully updated</source>
        <translation>テーマを変更しました</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Set theme</source>
        <translation>テーマを設定</translation>
    </message>
</context>
<context>
    <name>SetThemeCommand</name>
    <message>
        <location filename="../src/builtins/theme/set-theme-command.hpp" line="+9"/>
        <source>Set Theme</source>
        <translation>テーマを設定</translation>
    </message>
</context>
<context>
    <name>SetVolumeCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="+111"/>
        <source>Set Volume to %1%</source>
        <translation>音量を%1%に設定</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Set system volume to %1%</source>
        <translation>システムの音量を%1%に設定します</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to set volume</source>
        <translation>音量を設定できませんでした</translation>
    </message>
</context>
<context>
    <name>SetWallpaperAction</name>
    <message>
        <location filename="../src/utils/file-list-item.hpp" line="-55"/>
        <source>Set as wallpaper</source>
        <translation>壁紙に設定</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Wallpaper set</source>
        <translation>壁紙を設定しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to set wallpaper</source>
        <translation>壁紙を設定できませんでした</translation>
    </message>
</context>
<context>
    <name>SettingsPreferenceForm</name>
    <message>
        <location filename="../src/ui/qml/settings/SettingsPreferenceForm.qml" line="+105"/>
        <source>Edit</source>
        <translation>編集</translation>
    </message>
    <message>
        <location line="+93"/>
        <source>Select an app…</source>
        <translation>アプリを選択…</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Add app…</source>
        <translation>アプリを追加…</translation>
    </message>
</context>
<context>
    <name>SettingsSidebar</name>
    <message>
        <location filename="../src/ui/qml/settings/SettingsSidebar.qml" line="+129"/>
        <source>Search...</source>
        <translation>検索...</translation>
    </message>
</context>
<context>
    <name>SettingsSidebarModel</name>
    <message>
        <location filename="../src/ui/settings/settings-sidebar-model.cpp" line="+94"/>
        <source>General</source>
        <translation>一般</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Appearance</source>
        <translation>外観</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keybindings</source>
        <translation>キー割り当て</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced</source>
        <translation>詳細設定</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>About</source>
        <translation>バージョン情報</translation>
    </message>
</context>
<context>
    <name>SettingsSubpageRow</name>
    <message>
        <location filename="../src/ui/qml/settings/SettingsSubpageRow.qml" line="+16"/>
        <source>Manage</source>
        <translation>管理</translation>
    </message>
</context>
<context>
    <name>SettingsWindow</name>
    <message>
        <location filename="../src/ui/qml/settings/SettingsWindow.qml" line="+13"/>
        <source>General</source>
        <translation>一般</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Appearance</source>
        <translation>外観</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Keybindings</source>
        <translation>キー割り当て</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Advanced</source>
        <translation>詳細設定</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>About</source>
        <translation>バージョン情報</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Vicinae Settings</source>
        <translation>Vicinaeの設定</translation>
    </message>
    <message>
        <location line="+218"/>
        <source>Imported from Raycast</source>
        <translation>Raycastからインポート</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>From the Vicinae store</source>
        <translation>Vicinae storeからインストール</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Locally installed extension</source>
        <translation>ローカルにインストールした拡張機能</translation>
    </message>
</context>
<context>
    <name>ShortcutExtension</name>
    <message>
        <location filename="../src/builtins/shortcut/shortcut-extension.hpp" line="+11"/>
        <source>Manage Shortcuts</source>
        <translation>ショートカットを管理</translation>
    </message>
</context>
<context>
    <name>ShortcutField</name>
    <message>
        <location filename="../src/ui/qml/form/ShortcutField.qml" line="+16"/>
        <source>Record shortcut</source>
        <translation>ショートカットキーを記録</translation>
    </message>
</context>
<context>
    <name>ShortcutFormView</name>
    <message>
        <location filename="../src/ui/qml/views/ShortcutFormView.qml" line="+15"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Shortcut Name</source>
        <translation>ショートカット名</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>The URL that will be opened by the specified app. You can make it dynamic by using placeholders such as {argument}.</source>
        <translation>指定したアプリで開くURLです。{argument}などのプレースホルダーを使うと、実行時に内容を変えられます。</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Open with</source>
        <translation>開くアプリ</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Icon</source>
        <translation>アイコン</translation>
    </message>
</context>
<context>
    <name>ShortcutFormViewHost</name>
    <message>
        <location filename="../src/builtins/shortcut/shortcut-form-view-host.cpp" line="+46"/>
        <source>Submit</source>
        <translation>保存</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Copy of %1</source>
        <translation>%1のコピー</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Edit &quot;%1&quot;</source>
        <translation>「%1」を編集</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Duplicate &quot;%1&quot;</source>
        <translation>「%1」を複製</translation>
    </message>
    <message>
        <location line="+9"/>
        <location line="+109"/>
        <location line="+43"/>
        <source>Default</source>
        <translation>標準</translation>
    </message>
    <message>
        <location line="-136"/>
        <source>Selected Text</source>
        <translation>選択中のテキスト</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Clipboard Text</source>
        <translation>クリップボードのテキスト</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Argument</source>
        <translation>引数</translation>
    </message>
    <message>
        <location line="+25"/>
        <location line="+5"/>
        <location line="+5"/>
        <source>Required</source>
        <translation>必須</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Validation failed</source>
        <translation>入力内容の検証に失敗しました</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to update shortcut</source>
        <translation>ショートカットを更新できませんでした</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Shortcut updated</source>
        <translation>ショートカットを更新しました</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to create shortcut</source>
        <translation>ショートカットを作成できませんでした</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Shortcut created</source>
        <translation>ショートカットを作成しました</translation>
    </message>
</context>
<context>
    <name>ShortcutRecorderCapture</name>
    <message>
        <location filename="../src/ui/qml/form/ShortcutRecorderCapture.qml" line="+28"/>
        <location line="+14"/>
        <location line="+81"/>
        <source>Recording...</source>
        <translation>記録中...</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Keybind updated</source>
        <translation>キー割り当てを更新しました</translation>
    </message>
</context>
<context>
    <name>ShortcutRecorderPanel</name>
    <message>
        <location filename="../src/ui/qml/actions/ShortcutRecorderPanel.qml" line="+108"/>
        <source>Press Backspace to remove the current shortcut</source>
        <translation>Backspaceで現在のショートカットを解除します</translation>
    </message>
</context>
<context>
    <name>ShortcutRootProvider</name>
    <message>
        <location filename="../src/root-search/shortcuts/shortcut-root-provider.cpp" line="+42"/>
        <source>Shortcuts</source>
        <translation>ショートカット</translation>
    </message>
</context>
<context>
    <name>ShortcutsSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/ShortcutsSettingsPage.qml" line="+61"/>
        <source>Keybindings</source>
        <translation>キー割り当て</translation>
    </message>
    <message>
        <location line="+78"/>
        <source>Record Shortcut</source>
        <translation>ショートカットキーを記録</translation>
    </message>
</context>
<context>
    <name>SkipUpdateVersionAction</name>
    <message>
        <location filename="../src/services/update/update-service.cpp" line="+8"/>
        <source>Skip This Version</source>
        <translation>このバージョンをスキップ</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Skipped %1</source>
        <translation>%1をスキップしました</translation>
    </message>
</context>
<context>
    <name>SleepCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+94"/>
        <source>Put System to Sleep</source>
        <translation>システムをスリープにする</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put system to sleep</source>
        <translation>システムをスリープにします</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>System can&apos;t sleep</source>
        <translation>このシステムはスリープにできません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to sleep</source>
        <translation>スリープにできませんでした</translation>
    </message>
</context>
<context>
    <name>SnippetDatabase</name>
    <message>
        <location filename="../src/services/snippet/snippet-db.cpp" line="+76"/>
        <location line="+87"/>
        <source>keyword already assigned to &quot;%1&quot;</source>
        <translation>キーワードはすでに「%1」に割り当てられています</translation>
    </message>
    <message>
        <location line="-80"/>
        <location line="+87"/>
        <source>voice phrase already assigned to &quot;%1&quot;</source>
        <translation>音声フレーズは既に「%1」に割り当てられています</translation>
    </message>
    <message>
        <location line="-72"/>
        <source>No snippet with that ID</source>
        <translation>そのIDのスニペットはありません</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>No such snippet</source>
        <translation>該当するスニペットがありません</translation>
    </message>
    <message>
        <location line="+44"/>
        <source>Snippet limit reached (%1)</source>
        <translation>スニペット数の上限（%1）に達しました</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>Failed to save snippets on disk: %1</source>
        <translation>スニペットをディスクに保存できませんでした：%1</translation>
    </message>
</context>
<context>
    <name>SnippetExtension</name>
    <message>
        <location filename="../src/builtins/snippet/snippet-extension.hpp" line="+59"/>
        <source>Snippets</source>
        <translation>スニペット</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Text expansion and snippet management</source>
        <translation>テキストの展開とスニペットの管理</translation>
    </message>
</context>
<context>
    <name>SnippetFormView</name>
    <message>
        <location filename="../src/ui/qml/views/SnippetFormView.qml" line="+29"/>
        <source>Title</source>
        <translation>タイトル</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Euro symbol</source>
        <translation>ユーロ記号</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Content</source>
        <translation>内容</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You can use {dynamic placeholders} to make the content dynamic: &lt;a href=&quot;https://docs.vicinae.com/snippets&quot;&gt;learn more&lt;/a&gt;.</source>
        <translation>{dynamic placeholders}を使うと、実行時に内容を変えられます。&lt;a href=&quot;https://docs.vicinae.com/snippets&quot;&gt;詳細を見る&lt;/a&gt;。</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Keyword</source>
        <translation>キーワード</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Typing this keyword anywhere will result in it being replaced by the content of the snippet.</source>
        <translation>このキーワードを入力すると、スニペットの内容に置き換わります。</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>The snippet server is not running. Keyword expansion is unavailable. &lt;a href=&quot;https://docs.vicinae.com/snippets&quot;&gt;Learn more&lt;/a&gt;.</source>
        <translation>スニペットサーバーが動作していないため、キーワードの展開を利用できません。&lt;a href=&quot;https://docs.vicinae.com/snippets&quot;&gt;詳細を見る&lt;/a&gt;。</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Voice phrase</source>
        <translation>音声フレーズ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Dictating exactly this phrase inserts the snippet instead.</source>
        <translation>このフレーズをそのままディクテーションすると、代わりにスニペットが挿入されます。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>euro symbol</source>
        <translation>ユーロ記号</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Applications</source>
        <translation>アプリ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Restrict the keyword and voice phrase to specific applications. By default, they work everywhere.</source>
        <translation>キーワードと音声フレーズを特定のアプリに限定します。デフォルトではすべてのアプリで有効です。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>+ Add app…</source>
        <translation>+ アプリを追加…</translation>
    </message>
    <message>
        <location line="-31"/>
        <source>Expand as word</source>
        <translation>単語単位で展開</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>If a keyword is typed, it will only be expanded after space or punctuation.</source>
        <translation>キーワードの後にスペースまたは句読点を入力したときだけ展開します。</translation>
    </message>
</context>
<context>
    <name>SnippetFormViewHost</name>
    <message>
        <location filename="../src/builtins/snippet/snippet-form-view-host.cpp" line="+33"/>
        <source>Submit</source>
        <translation>保存</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Copy of %1</source>
        <translation>%1のコピー</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Edit &quot;%1&quot;</source>
        <translation>「%1」を編集</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Duplicate &quot;%1&quot;</source>
        <translation>「%1」を複製</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>2 chars min.</source>
        <translation>2文字以上</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Content should not be empty</source>
        <translation>内容を入力してください</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Only one {cursor} placeholder is allowed</source>
        <translation>{cursor}は1つだけ指定できます</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Must contain a letter or a number</source>
        <translation>英字または数字を1文字以上含める必要があります</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Already used by &quot;%1&quot;</source>
        <translation>既に「%1」で使用されています</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Validation failed</source>
        <translation>入力内容の検証に失敗しました</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Snippet updated</source>
        <translation>スニペットを更新しました</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Snippet successfully created</source>
        <translation>スニペットを作成しました</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Cursor Position</source>
        <translation>カーソル位置</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Clipboard Text</source>
        <translation>クリップボードのテキスト</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Date</source>
        <translation>日付</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Argument</source>
        <translation>引数</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>PowerShell Command</source>
        <translation>PowerShellコマンド</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Shell Command</source>
        <translation>シェルコマンド</translation>
    </message>
</context>
<context>
    <name>SnippetPreferences</name>
    <message>
        <location filename="../src/builtins/snippet/snippet-extension.hpp" line="-35"/>
        <source>Expansion</source>
        <translation>展開</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable automatic snippet expansion when triggers are typed</source>
        <translation>キーワード入力時にスニペットを自動展開します</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Undo</source>
        <translation>元に戻す</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Press backspace immediately after expansion to undo and restore the trigger text</source>
        <translation>展開直後にBackspaceを押すと、元のキーワードに戻します</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Keyboard layout</source>
        <translation>キーボード配列</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>XKB layout used for trigger detection (e.g. &quot;us&quot;, &quot;fr&quot;). Leave empty for system default.</source>
        <translation>キーワード検出に使うXKB配列（例：「us」「fr」）です。空欄の場合はシステムの既定値を使います。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Pre-paste delay (ms)</source>
        <translation>貼り付け前の待機時間（ミリ秒）</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Delay between setting clipboard and injecting paste shortcut. Increase if expansions paste empty on slow compositors.</source>
        <translation>クリップボードの設定から貼り付けキーの送信までの待機時間です。処理の遅いコンポジターで空の内容が貼り付けられる場合は、値を増やしてください。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Key injection delay (ms)</source>
        <translation>キー送信間隔（ミリ秒）</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Delay between injected key events. Increase if expansions produce missing or garbled characters on slow compositors.</source>
        <translation>キー入力イベントの送信間隔です。処理の遅いコンポジターで文字が欠けたり乱れたりする場合は、値を増やしてください。</translation>
    </message>
</context>
<context>
    <name>SoftRebootCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="-99"/>
        <source>Soft Reboot System</source>
        <translation>システムをソフト再起動</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Soft reboot the system, which usually means only userspace is rebooted.</source>
        <translation>システムをソフト再起動します。通常はユーザー空間のみを再起動します。</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>System can&apos;t soft reboot</source>
        <translation>このシステムはソフト再起動できません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to soft reboot</source>
        <translation>ソフト再起動できませんでした</translation>
    </message>
</context>
<context>
    <name>SponsorVicinaeCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="-118"/>
        <source>Donate to Vicinae</source>
        <translation>Vicinaeに寄付</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open link to Vicinae&apos;s GitHub sponsor page</source>
        <translation>VicinaeのGitHub Sponsorsページを開きます</translation>
    </message>
</context>
<context>
    <name>StoreDetailView</name>
    <message>
        <location filename="../src/ui/qml/views/StoreDetailView.qml" line="+208"/>
        <source>Installed</source>
        <translation>インストール済み</translation>
    </message>
    <message>
        <location line="+171"/>
        <source>Description</source>
        <translation>説明</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Commands</source>
        <translation>コマンド</translation>
    </message>
    <message>
        <location line="+78"/>
        <source>Open README</source>
        <translation>READMEを開く</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Last update</source>
        <translation>最終更新</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Contributors</source>
        <translation>貢献者</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Categories</source>
        <translation>カテゴリー</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Source Code</source>
        <translation>ソースコード</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>View Code</source>
        <translation>コードを表示</translation>
    </message>
</context>
<context>
    <name>StoreIntroPreferences</name>
    <message>
        <location filename="../src/builtins/vicinae/store-intro-preferences.hpp" line="+12"/>
        <source>Always show intro</source>
        <translation>説明を毎回表示</translation>
    </message>
</context>
<context>
    <name>SuspendCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+36"/>
        <source>Suspend System</source>
        <translation>システムをサスペンド</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Suspend the system to RAM. Unlike hibernation, this does not turn the computer off and will break on power loss.</source>
        <translation>システムの状態をメモリに保持して一時停止します。休止状態とは異なり、完全には電源を切らないため、電源が失われると状態を復元できません。</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>System cannot suspend</source>
        <translation>このシステムはサスペンドできません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to suspend</source>
        <translation>サスペンドできませんでした</translation>
    </message>
</context>
<context>
    <name>SwitchWindowsCommand</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="+89"/>
        <source>Switch Windows</source>
        <translation>ウィンドウを切り替え</translation>
    </message>
</context>
<context>
    <name>SwitchWindowsSection</name>
    <message>
        <location filename="../src/builtins/wm/switch-windows-model.cpp" line="+19"/>
        <source>WS %1</source>
        <translation>WS %1</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Window Actions</source>
        <translation>ウィンドウ操作</translation>
    </message>
    <message>
        <location filename="../src/builtins/wm/switch-windows-model.hpp" line="+28"/>
        <source>Open Windows</source>
        <translation>開いているウィンドウ</translation>
    </message>
</context>
<context>
    <name>SwitchWindowsViewHost</name>
    <message>
        <location filename="../src/builtins/wm/switch-windows-view-host.cpp" line="+12"/>
        <source>Search open window...</source>
        <translation>開いているウィンドウを検索...</translation>
    </message>
</context>
<context>
    <name>SwitchWorkspacesCommand</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="+11"/>
        <source>Switch Desktops</source>
        <translation>デスクトップを切り替え</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Switch Workspaces</source>
        <translation>ワークスペースを切り替え</translation>
    </message>
</context>
<context>
    <name>SwitchWorkspacesSection</name>
    <message>
        <location filename="../src/builtins/wm/switch-workspaces-model.hpp" line="+47"/>
        <source>%1</source>
        <translation>%1</translation>
    </message>
    <message numerus="yes">
        <location line="+3"/>
        <source>%n window(s)</source>
        <translation>
            <numerusform>%n個のウィンドウ</numerusform>
        </translation>
    </message>
    <message>
        <location line="+0"/>
        <source>empty</source>
        <translation>空</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Switch to desktop</source>
        <translation>デスクトップに切り替え</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Switch to workspace</source>
        <translation>ワークスペースに切り替え</translation>
    </message>
</context>
<context>
    <name>SwitchWorkspacesViewHost</name>
    <message>
        <location filename="../src/builtins/wm/switch-workspaces-view-host.cpp" line="+13"/>
        <source>Search desktops...</source>
        <translation>デスクトップを検索...</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Search workspaces...</source>
        <translation>ワークスペースを検索...</translation>
    </message>
    <message>
        <location filename="../src/builtins/wm/switch-workspaces-view-host.hpp" line="+16"/>
        <source>Open Workspaces</source>
        <translation>開いているワークスペース</translation>
    </message>
</context>
<context>
    <name>SystemBrowseApps</name>
    <message>
        <location filename="../src/builtins/system/system-extension.hpp" line="-17"/>
        <source>Browse Apps</source>
        <translation>アプリ一覧</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browse all applications that are installed on the system</source>
        <translation>システムにインストール済みのアプリをすべて表示します</translation>
    </message>
</context>
<context>
    <name>SystemExtension</name>
    <message>
        <location line="+39"/>
        <source>System</source>
        <translation>システム</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>System-related commands</source>
        <translation>システムに関するコマンド</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Bash</source>
        <translation>Bash</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run shell commands on your computer.</source>
        <translation>PCでシェルコマンドを実行します。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Open</source>
        <translation>開く</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open files, folders and links with their default application.</source>
        <translation>ファイル、フォルダー、リンクを既定のアプリで開きます。</translation>
    </message>
</context>
<context>
    <name>SystemRunCommand</name>
    <message>
        <location line="-125"/>
        <source>Run Terminal Program</source>
        <translation>ターミナルでプログラムを実行</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a program in a terminal window</source>
        <translation>ターミナルウィンドウでプログラムを実行します</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>command</source>
        <translation>コマンド</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Not a valid executable</source>
        <translation>有効な実行ファイルではありません</translation>
    </message>
</context>
<context>
    <name>SystemRunPreferences</name>
    <message>
        <location filename="../src/builtins/system/system-run-model.hpp" line="-41"/>
        <source>Default Action</source>
        <translation>既定のアクション</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The default action to run on pressing return</source>
        <translation>Enterを押したときの既定のアクション</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Run in terminal</source>
        <translation>ターミナルで実行</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run in terminal (hold)</source>
        <translation>ターミナルで実行（終了後も表示）</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run directly</source>
        <translation>直接実行</translation>
    </message>
</context>
<context>
    <name>SystemRunViewHost</name>
    <message>
        <location filename="../src/builtins/system/system-run-view-host.cpp" line="+19"/>
        <source>Search for a program to execute...</source>
        <translation>実行するプログラムを検索...</translation>
    </message>
</context>
<context>
    <name>ThemeExtension</name>
    <message>
        <location filename="../src/builtins/theme/theme-extension.hpp" line="+9"/>
        <source>Theme</source>
        <translation>テーマ</translation>
    </message>
</context>
<context>
    <name>ThemeSection</name>
    <message>
        <location filename="../src/builtins/theme/theme-list-model.cpp" line="+22"/>
        <source>Default theme description</source>
        <translation>標準テーマの説明</translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Open theme file</source>
        <translation>テーマファイルを開く</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy ID</source>
        <translation>IDをコピー</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy path</source>
        <translation>パスをコピー</translation>
    </message>
</context>
<context>
    <name>ThemeViewHost</name>
    <message>
        <location filename="../src/builtins/theme/theme-view-host.cpp" line="+22"/>
        <source>Search for a theme...</source>
        <translation>テーマを検索...</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Current Theme</source>
        <translation>現在のテーマ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Available Themes</source>
        <translation>利用可能なテーマ</translation>
    </message>
</context>
<context>
    <name>ToggleFloatingWindowCommand</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="-54"/>
        <source>Toggle Floating</source>
        <translation>フローティングを切り替え</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Active window is not on the current workspace</source>
        <translation>アクティブなウィンドウは現在のワークスペースにありません</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No window to toggle</source>
        <translation>切り替えるウィンドウがありません</translation>
    </message>
</context>
<context>
    <name>ToggleFullscreenWindowCommand</name>
    <message>
        <location line="-44"/>
        <source>Toggle Fullscreen</source>
        <translation>全画面表示を切り替え</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Active window is not on the current workspace</source>
        <translation>アクティブなウィンドウは現在のワークスペースにありません</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No window to fullscreen</source>
        <translation>全画面表示にするウィンドウがありません</translation>
    </message>
</context>
<context>
    <name>ToggleItemAsFavorite</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="-86"/>
        <source>Remove from favorites</source>
        <translation>お気に入りから削除</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Add to favorites</source>
        <translation>お気に入りに追加</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Successfuly added to favorites</source>
        <translation>お気に入りに追加しました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Successfuly removed from favorites</source>
        <translation>お気に入りから削除しました</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to add to favorites</source>
        <translation>お気に入りに追加できませんでした</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove from favorites</source>
        <translation>お気に入りから削除できませんでした</translation>
    </message>
</context>
<context>
    <name>ToggleMuteCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="+11"/>
        <source>Toggle Mute</source>
        <translation>ミュートを切り替え</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mute or unmute system audio</source>
        <translation>システムの音声のミュートを切り替えます</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Failed to toggle mute</source>
        <translation>ミュートを切り替えられませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Muted</source>
        <translation>ミュート中</translation>
    </message>
</context>
<context>
    <name>ToggleOverviewCommand</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="+34"/>
        <source>Toggle Overview</source>
        <translation>一覧表示を切り替え</translation>
    </message>
</context>
<context>
    <name>ToolApprovalPanel</name>
    <message>
        <location filename="../src/ui/qml/controls/ToolApprovalPanel.qml" line="+28"/>
        <source>Allow %1 to run?</source>
        <translation>%1の実行を許可しますか？</translation>
    </message>
    <message>
        <location line="+63"/>
        <source>Deny</source>
        <translation>拒否</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Always Allow</source>
        <translation>常に許可</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Allow Once</source>
        <translation>一度だけ許可</translation>
    </message>
</context>
<context>
    <name>ToolInvocation</name>
    <message>
        <location filename="../src/ui/qml/controls/ToolInvocation.qml" line="+59"/>
        <source>Show Arguments</source>
        <translation>引数を表示</translation>
    </message>
    <message>
        <location line="+66"/>
        <source>No output</source>
        <translation>出力なし</translation>
    </message>
</context>
<context>
    <name>ToolInvocationHeader</name>
    <message>
        <location filename="../src/ui/qml/controls/ToolInvocationHeader.qml" line="+24"/>
        <source>Running…</source>
        <translation>実行中…</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Waiting for approval</source>
        <translation>承認待ち</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Declined</source>
        <translation>拒否されました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Completed</source>
        <translation>完了</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed</source>
        <translation>失敗</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Cancelled</source>
        <translation>キャンセル済み</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Queued</source>
        <translation>待機中</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>%1 · %2</source>
        <translation>%1 · %2</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>%1 — %2 — %3</source>
        <translation>%1 — %2 — %3</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>%1 — %2</source>
        <translation>%1 — %2</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Collapse tool details</source>
        <translation>ツールの詳細を折りたたむ</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Expand tool details</source>
        <translation>ツールの詳細を展開</translation>
    </message>
</context>
<context>
    <name>TranscribeCommand</name>
    <message>
        <location filename="../src/builtins/dictation/dictation-command.cpp" line="+46"/>
        <source>Could not start recording</source>
        <translation>録音を開始できませんでした</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Could not paste, copied to clipboard</source>
        <translation>貼り付けできなかったため、クリップボードにコピーしました</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Allow microphone access</source>
        <translation>マイクへのアクセスを許可</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dictation needs to hear you. Turn on the microphone for Vicinae in System Settings, then try again.</source>
        <translation>ディクテーションにはマイクのアクセスが必要です。システム設定でVicinaeのマイクを有効にしてから、もう一度お試しください。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Open System Settings</source>
        <translation>システム設定を開く</translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Set up dictation</source>
        <translation>ディクテーションをセットアップ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dictation needs a speech model before it can turn your voice into text. Install one that runs on this machine, or add an AI provider that offers transcription.</source>
        <translation>ディクテーションが音声をテキストに変換するには音声モデルが必要です。このPCで動作するモデルをインストールするか、文字起こしに対応したAIプロバイダーを追加してください。</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Open AI Settings</source>
        <translation>AI設定を開く</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Choose a transcription model</source>
        <translation>文字起こしモデルを選択</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pick the model dictation should use from the dictation settings. You can change it at any time.</source>
        <translation>ディクテーションで使用するモデルをディクテーション設定で選択してください。いつでも変更できます。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Open Dictation Settings</source>
        <translation>ディクテーション設定を開く</translation>
    </message>
    <message>
        <location filename="../src/builtins/dictation/dictation-command.hpp" line="+14"/>
        <source>Dictate</source>
        <translation>ディクテーション</translation>
    </message>
</context>
<context>
    <name>TranscribeViewHost</name>
    <message>
        <location filename="../src/builtins/dictation/transcribe-view-host.cpp" line="+21"/>
        <location line="+40"/>
        <source>Recording</source>
        <translation>録音中</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Rewriting</source>
        <translation>リライト中</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Transcribing</source>
        <translation>文字起こし中</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Stop &amp; Transcribe</source>
        <translation>停止して文字起こし</translation>
    </message>
</context>
<context>
    <name>TranscriptionSession</name>
    <message>
        <location filename="../src/services/dictation/transcription-session.cpp" line="+46"/>
        <source>Microphone stopped</source>
        <translation>マイクが停止されました</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Could not start recording</source>
        <translation>録音を開始できませんでした</translation>
    </message>
    <message>
        <location line="+68"/>
        <location line="+31"/>
        <source>Nothing to transcribe</source>
        <translation>文字起こしする内容がありません</translation>
    </message>
    <message>
        <location line="-5"/>
        <source>Transcription failed</source>
        <translation>文字起こしに失敗しました</translation>
    </message>
</context>
<context>
    <name>TrayMenuViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/search-tray-view-host.hpp" line="-122"/>
        <source>Search menu...</source>
        <translation>メニューを検索...</translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Trigger</source>
        <translation>実行</translation>
    </message>
</context>
<context>
    <name>TrayService</name>
    <message>
        <location filename="../src/services/tray/tray-service.cpp" line="+10"/>
        <source>Toggle Vicinae</source>
        <translation>Vicinaeの表示を切り替え</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>About Vicinae</source>
        <translation>Vicinaeについて</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Check for Updates…</source>
        <translation>更新を確認…</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Update Available: %1</source>
        <translation>更新があります：%1</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Settings…</source>
        <translation>設定…</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Preferences…</source>
        <translation>環境設定…</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Sponsor Vicinae</source>
        <translation>Vicinaeを支援</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Join the Discord</source>
        <translation>Discordに参加</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Follow on X</source>
        <translation>Xでフォロー</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Quit Vicinae</source>
        <translation>Vicinaeを終了</translation>
    </message>
</context>
<context>
    <name>UninstallAppAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+20"/>
        <source>Uninstall Application</source>
        <translation>アプリをアンインストール</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Failed to uninstall %1</source>
        <translation>%1をアンインストールできませんでした</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Uninstalled %1</source>
        <translation>%1をアンインストールしました</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to quit %1</source>
        <translation>%1を終了できませんでした</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>%1 did not quit, uninstall cancelled</source>
        <translation>%1が終了しなかったため、アンインストールを中止しました</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>%1 is running. It will be quit and moved to the trash.</source>
        <translation>%1は実行中です。終了してからゴミ箱に入れます。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The application will be moved to the trash.</source>
        <translation>アプリをゴミ箱に入れます。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Uninstall %1?</source>
        <translation>%1をアンインストールしますか？</translation>
    </message>
</context>
<context>
    <name>UninstallExtensionAction</name>
    <message>
        <location filename="../src/actions/extension-actions.cpp" line="+10"/>
        <source>Are you sure?</source>
        <translation>実行しますか？</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>All this extension data will be permanently lost. If you just want the extension to not appear in the root search anymore, consider disabling it instead.</source>
        <translation>この拡張機能のデータはすべて完全に削除されます。メイン画面の検索結果に表示しないだけなら、無効にすることもできます。</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Uninstall</source>
        <translation>アンインストール</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Extension uninstalled</source>
        <translation>拡張機能をアンインストールしました</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to uninstall extension</source>
        <translation>拡張機能をアンインストールできませんでした</translation>
    </message>
    <message>
        <location filename="../src/actions/extension-actions.hpp" line="+10"/>
        <source>Uninstall Extension</source>
        <translation>拡張機能をアンインストール</translation>
    </message>
</context>
<context>
    <name>UnpinCalculatorHistoryRecordAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="-23"/>
        <source>Entry unpinned</source>
        <translation>項目のピン留めを外しました</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Unpin entry</source>
        <translation>項目のピン留めを外す</translation>
    </message>
</context>
<context>
    <name>UnpinEmojiAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="-45"/>
        <source>Unpin emoji</source>
        <translation>絵文字のピン留めを外す</translation>
    </message>
</context>
<context>
    <name>UpdateService</name>
    <message>
        <location filename="../src/services/update/update-service.cpp" line="-169"/>
        <source>Update installed</source>
        <translation>更新をインストールしました</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Restarting…</source>
        <translation>再起動中…</translation>
    </message>
    <message>
        <location line="+90"/>
        <source>Downloading Vicinae %1…</source>
        <translation>Vicinae %1をダウンロード中…</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Downloading Vicinae %1… %2%</source>
        <translation>Vicinae %1をダウンロード中… %2%</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Installing update…</source>
        <translation>更新をインストール中…</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Update failed</source>
        <translation>更新に失敗しました</translation>
    </message>
</context>
<context>
    <name>VicinaeExtension</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.hpp" line="+11"/>
        <source>General vicinae-related commands.</source>
        <translation>Vicinaeに関する基本的なコマンドです。</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+227"/>
        <source>Read Configuration</source>
        <translation>設定を読み取る</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Read the default and current Vicinae configuration.</source>
        <translation>Vicinaeのデフォルト設定と現在の設定を読み取ります。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Change Configuration</source>
        <translation>設定を変更する</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Change your Vicinae configuration.</source>
        <translation>Vicinaeの設定を変更します。</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Read Themes</source>
        <translation>テーマを読み取る</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>List installed themes and read the theme file format.</source>
        <translation>インストール済みのテーマ一覧を取得し、テーマファイルの形式を読み取ります。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Write Theme</source>
        <translation>テーマを書き込む</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Create your own themes. Asks before replacing an existing one.</source>
        <translation>独自のテーマを作成します。既存のテーマを置き換える前に確認します。</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Set Theme</source>
        <translation>テーマを設定</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Switch the active theme.</source>
        <translation>アクティブなテーマを切り替えます。</translation>
    </message>
</context>
<context>
    <name>VicinaeHotkeyGlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/vicinae-hotkey-global-shortcut-backend.cpp" line="+79"/>
        <source>Compositor does not support global hotkeys</source>
        <translation>コンポジターがグローバルホットキーに対応していません</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Unsupported trigger key</source>
        <translation>対応していないトリガーキーです</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Hotkey binding was lost</source>
        <translation>ホットキーの登録が失われました</translation>
    </message>
</context>
<context>
    <name>VicinaeListInstalledExtensionsCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/list-installed-extensions-command.hpp" line="+11"/>
        <source>Show Installed Extensions</source>
        <translation>インストール済みの拡張機能を表示</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Show all third-party extensions that have been installed. This includes local extensions as well as extensions downloaded from the stores (vicinae and raycast).</source>
        <translation>インストール済みの外部拡張機能をすべて表示します。ローカルの拡張機能と、VicinaeやRaycastのストアからダウンロードした拡張機能が含まれます。</translation>
    </message>
</context>
<context>
    <name>VicinaeStoreCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-store-command.hpp" line="+15"/>
        <source>Install extensions from the Vicinae store</source>
        <translation>Vicinae storeから拡張機能をインストール</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>
# Welcome to the vicinae extension store

The vicinae extension store features community-built extensions that have been approved by our core contributors.

Every extension listed here has its source code available in the [vicinaehq/extensions](https://github.com/vicinaehq/extensions) repository.

If you&apos;re looking to build your own extension, take a look at the [documentation](https://docs.vicinae.com/extensions/introduction). If you think your extension would be a good fit for the store, feel free to submit it!
</source>
        <translation>
# Vicinae Extension Storeへようこそ

Vicinae Extension Storeでは、主要な開発メンバーが承認したコミュニティ製の拡張機能を公開しています。

ここに掲載されたすべての拡張機能のソースコードは、[vicinaehq/extensions](https://github.com/vicinaehq/extensions)リポジトリで確認できます。

拡張機能を自作する場合は、[ドキュメント](https://docs.vicinae.com/extensions/introduction)を参照してください。ストアに合う拡張機能ができたら、ぜひ投稿してください。
</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Continue to store</source>
        <translation>ストアへ進む</translation>
    </message>
</context>
<context>
    <name>VicinaeStoreDetailHost</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-store-detail-host.cpp" line="+36"/>
        <source>Failed to load extension</source>
        <translation>拡張機能を読み込めませんでした</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Could not fetch extension data from the store.</source>
        <translation>ストアから拡張機能のデータを取得できませんでした。</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Extension not found</source>
        <translation>拡張機能が見つかりません</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>The extension &quot;%1&quot; could not be found in the store.</source>
        <translation>ストアに拡張機能「%1」が見つかりませんでした。</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Extension Store - %1</source>
        <translation>Extension Store - %1</translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Extension Store</source>
        <translation>Extension Store</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Report issue</source>
        <translation>問題を報告</translation>
    </message>
</context>
<context>
    <name>VicinaeStoreSection</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-store-model.cpp" line="+42"/>
        <source>Show details</source>
        <translation>詳細を表示</translation>
    </message>
</context>
<context>
    <name>VicinaeStoreViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-store-view-host.cpp" line="+26"/>
        <source>Browse Vicinae extensions</source>
        <translation>Vicinaeの拡張機能を探す</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Failed to fetch extensions</source>
        <translation>拡張機能を取得できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Extensions</source>
        <translation>拡張機能</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Extension Store</source>
        <translation>Extension Store</translation>
    </message>
</context>
<context>
    <name>VocabularyCommand</name>
    <message>
        <location filename="../src/builtins/dictation/dictation-extension.hpp" line="-11"/>
        <source>Vocabulary</source>
        <translation>ボキャブラリ</translation>
    </message>
</context>
<context>
    <name>VocabularyFormView</name>
    <message>
        <location filename="../src/ui/qml/views/VocabularyFormView.qml" line="+16"/>
        <source>Word</source>
        <translation>単語</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>A name, term or acronym you dictate often and want transcribed exactly this way.</source>
        <translation>よくディクテーションする名前・用語・頭字語を、この表記どおりに文字起こしさせたい場合に登録します。</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Vicinae</source>
        <translation>Vicinae</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Hint</source>
        <translation>ヒント</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Optional. Helps rewrite styles understand this word, such as who a name refers to. Not used for transcription.</source>
        <translation>任意です。リライトスタイルがこの単語を理解するのに役立ちます（名前が誰を指すかなど）。文字起こしには使用されません。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>A launcher app, often misheard as &quot;Vicinity&quot;</source>
        <translation>ランチャーアプリ。「Vicinity」と聞き間違えられやすい</translation>
    </message>
</context>
<context>
    <name>VocabularyFormViewHost</name>
    <message>
        <location filename="../src/builtins/dictation/vocabulary-form-view-host.cpp" line="+26"/>
        <source>Edit Word</source>
        <translation>単語を編集</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Add Word to Vocabulary</source>
        <translation>ボキャブラリに単語を追加</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Save Word</source>
        <translation>単語を保存</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Add Word</source>
        <translation>単語を追加</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Enter a word</source>
        <translation>単語を入力してください</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Already in your vocabulary</source>
        <translation>既にボキャブラリに登録されています</translation>
    </message>
    <message numerus="yes">
        <location line="+3"/>
        <source>Keep the hint under %n character(s)</source>
        <translation>
            <numerusform>ヒントは%n文字以内にしてください</numerusform>
        </translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Failed to save word</source>
        <translation>単語を保存できませんでした</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Failed to add word</source>
        <translation>単語を追加できませんでした</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Word saved</source>
        <translation>単語を保存しました</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Added to vocabulary</source>
        <translation>ボキャブラリに追加しました</translation>
    </message>
</context>
<context>
    <name>VocabularyViewHost</name>
    <message>
        <location filename="../src/builtins/dictation/vocabulary-view-host.hpp" line="+36"/>
        <source>Search vocabulary...</source>
        <translation>ボキャブラリを検索...</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No words yet</source>
        <translation>単語はまだありません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Words you add here help dictation spell them right.</source>
        <translation>ここに登録した単語を、ディクテーションが正しく文字起こしできるようになります。</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Words ({count})</source>
        <translation>単語 ({count})</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Added %1</source>
        <translation>追加日：%1</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Edit Word</source>
        <translation>単語を編集</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Remove Word</source>
        <translation>単語を削除</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove word</source>
        <translation>単語を削除できませんでした</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Remove All Words</source>
        <translation>すべての単語を削除</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Remove all words?</source>
        <translation>すべての単語を削除しますか？</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Your whole vocabulary will be lost forever.</source>
        <translation>ボキャブラリは完全に失われます。</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remove all</source>
        <translation>すべて削除</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Vocabulary cleared</source>
        <translation>ボキャブラリを消去しました</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Add Word</source>
        <translation>単語を追加</translation>
    </message>
</context>
<context>
    <name>VolumeDownCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="-74"/>
        <source>Turn Volume Down</source>
        <translation>音量を下げる</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Decrease system volume</source>
        <translation>システムの音量を下げます</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Invalid step value</source>
        <translation>変更幅が無効です</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Failed to adjust volume</source>
        <translation>音量を調整できませんでした</translation>
    </message>
</context>
<context>
    <name>VolumeUpCommand</name>
    <message>
        <location line="-61"/>
        <source>Turn Volume Up</source>
        <translation>音量を上げる</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Increase system volume</source>
        <translation>システムの音量を上げます</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Invalid step value</source>
        <translation>変更幅が無効です</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Failed to adjust volume</source>
        <translation>音量を調整できませんでした</translation>
    </message>
</context>
<context>
    <name>WallpaperManager</name>
    <message>
        <location filename="../src/services/wallpaper/wallpaper-manager.cpp" line="+68"/>
        <source>Setting the wallpaper is not supported in the current environment</source>
        <translation>現在の環境では壁紙の設定に対応していません</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>No such file: %1</source>
        <translation>ファイルがありません：%1</translation>
    </message>
</context>
<context>
    <name>WinControlPanelRootItem</name>
    <message>
        <location filename="../src/root-search/control-panel/control-panel-root-provider.cpp" line="+104"/>
        <location line="+10"/>
        <source>Control Panel</source>
        <translation>コントロールパネル</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Where</source>
        <translation>場所</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Open Applet</source>
        <translation>設定項目を開く</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy Path</source>
        <translation>パスをコピー</translation>
    </message>
</context>
<context>
    <name>WinControlPanelRootProvider</name>
    <message>
        <location line="+51"/>
        <source>Control Panel</source>
        <translation>コントロールパネル</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Control Panel applets and system tasks.</source>
        <translation>コントロールパネルの設定項目とシステムタスクです。</translation>
    </message>
</context>
<context>
    <name>WinControlPanelTaskRootItem</name>
    <message>
        <location line="-41"/>
        <location line="+11"/>
        <source>Control Panel</source>
        <translation>コントロールパネル</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Task ID</source>
        <translation>タスクID</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Open</source>
        <translation>開く</translation>
    </message>
</context>
<context>
    <name>WinSettingsPage</name>
    <message>
        <location filename="../src/root-search/windows-settings/windows-settings-root-provider.cpp" line="-114"/>
        <source>Display</source>
        <translation>ディスプレイ</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>System</source>
        <translation>システム</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>Night Light</source>
        <translation>夜間モード</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sound</source>
        <translation>サウンド</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Volume Mixer</source>
        <translation>音量ミキサー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Notifications</source>
        <translation>通知</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Focus</source>
        <translation>フォーカス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Power &amp; Battery</source>
        <translation>電源とバッテリー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Storage</source>
        <translation>ストレージ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Nearby Sharing</source>
        <translation>近距離共有</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Multitasking</source>
        <translation>マルチタスク</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Activation</source>
        <translation>ライセンス認証</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Troubleshoot</source>
        <translation>トラブルシューティング</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Recovery</source>
        <translation>回復</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Projecting to This PC</source>
        <translation>このPCへのプロジェクション</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remote Desktop</source>
        <translation>リモートデスクトップ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clipboard</source>
        <translation>クリップボード</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>About</source>
        <translation>バージョン情報</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Optional Features</source>
        <translation>オプション機能</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>For Developers</source>
        <translation>開発者向け</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Bluetooth &amp; Devices</source>
        <translation>Bluetoothとデバイス</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Devices</source>
        <translation>デバイス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Printers &amp; Scanners</source>
        <translation>プリンターとスキャナー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mobile Devices</source>
        <translation>モバイルデバイス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cameras</source>
        <translation>カメラ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mouse</source>
        <translation>マウス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Touchpad</source>
        <translation>タッチパッド</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pen &amp; Windows Ink</source>
        <translation>ペンとWindows Ink</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AutoPlay</source>
        <translation>自動再生</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Network &amp; Internet</source>
        <translation>ネットワークとインターネット</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ethernet</source>
        <translation>イーサネット</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Mobile Hotspot</source>
        <translation>モバイルホットスポット</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Airplane Mode</source>
        <translation>機内モード</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Proxy</source>
        <translation>プロキシ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dial-up</source>
        <translation>ダイヤルアップ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced Network Settings</source>
        <translation>ネットワークの詳細設定</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Background</source>
        <translation>背景</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Personalization</source>
        <translation>個人用設定</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Colors</source>
        <translation>色</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Themes</source>
        <translation>テーマ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lock Screen</source>
        <translation>ロック画面</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Touch Keyboard</source>
        <translation>タッチキーボード</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Start</source>
        <translation>スタート</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Taskbar</source>
        <translation>タスクバー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fonts</source>
        <translation>フォント</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dynamic Lighting</source>
        <translation>動的ライティング</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Installed Apps</source>
        <translation>インストールされているアプリ</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Apps</source>
        <translation>アプリ</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Default Apps</source>
        <translation>既定のアプリ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Offline Maps</source>
        <translation>オフラインマップ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Apps for Websites</source>
        <translation>Webサイト用のアプリ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Video Playback</source>
        <translation>ビデオの再生</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Startup Apps</source>
        <translation>スタートアップアプリ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Your Info</source>
        <translation>ユーザーの情報</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Accounts</source>
        <translation>アカウント</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Email &amp; Accounts</source>
        <translation>メールとアカウント</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sign-in Options</source>
        <translation>サインインオプション</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Access Work or School</source>
        <translation>職場または学校にアクセスする</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Family &amp; Other Users</source>
        <translation>家族とその他のユーザー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Windows Backup</source>
        <translation>Windowsバックアップ</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Date &amp; Time</source>
        <translation>日付と時刻</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Time &amp; Language</source>
        <translation>時刻と言語</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Language &amp; Region</source>
        <translation>言語と地域</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Typing</source>
        <translation>入力</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Speech</source>
        <translation>音声認識</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Game Bar</source>
        <translation>ゲームバー</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Gaming</source>
        <translation>ゲーム</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Captures</source>
        <translation>キャプチャ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Game Mode</source>
        <translation>ゲームモード</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Text Size</source>
        <translation>テキストのサイズ</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Accessibility</source>
        <translation>アクセシビリティ</translation>
    </message>
    <message>
        <location line="-9"/>
        <source>Visual Effects</source>
        <translation>視覚効果</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Magnifier</source>
        <translation>拡大鏡</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Color Filters</source>
        <translation>カラーフィルター</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Contrast Themes</source>
        <translation>コントラストテーマ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Narrator</source>
        <translation>ナレーター</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Accessibility Audio</source>
        <translation>オーディオのアクセシビリティ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Captions</source>
        <translation>字幕</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Accessibility Keyboard</source>
        <translation>キーボードのアクセシビリティ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Accessibility Mouse</source>
        <translation>マウスのアクセシビリティ</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Eye Control</source>
        <translation>視線制御</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Windows Security</source>
        <translation>Windowsセキュリティ</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Privacy &amp; Security</source>
        <translation>プライバシーとセキュリティ</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Find My Device</source>
        <translation>デバイスの検索</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Privacy</source>
        <translation>プライバシー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Location</source>
        <translation>場所</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Camera Access</source>
        <translation>カメラへのアクセス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Microphone Access</source>
        <translation>マイクへのアクセス</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Activity History</source>
        <translation>アクティビティの履歴</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Diagnostics &amp; Feedback</source>
        <translation>診断とフィードバック</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search Permissions</source>
        <translation>検索のアクセス許可</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Windows Update</source>
        <translation>Windows Update</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Update History</source>
        <translation>更新の履歴</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced Update Options</source>
        <translation>Windows Updateの詳細オプション</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Windows Insider Program</source>
        <translation>Windows Insider Program</translation>
    </message>
</context>
<context>
    <name>WinSettingsPageRootItem</name>
    <message>
        <location line="+37"/>
        <source>System Settings</source>
        <translation>システム設定</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Settings</source>
        <translation>設定</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Category</source>
        <translation>カテゴリー</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Open %1 Settings</source>
        <translation>%1の設定を開く</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy URL</source>
        <translation>URLをコピー</translation>
    </message>
</context>
<context>
    <name>WinSettingsRootProvider</name>
    <message>
        <location line="+13"/>
        <source>Windows Settings</source>
        <translation>Windowsの設定</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Pages of the Windows Settings app.</source>
        <translation>Windowsの設定アプリの各ページです。</translation>
    </message>
</context>
<context>
    <name>WindowManagementExtension</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="+56"/>
        <source>Window Management</source>
        <translation>ウィンドウ管理</translation>
    </message>
</context>
<context>
    <name>WindowsAppDatabase</name>
    <message>
        <location filename="../src/services/app-service/windows/win-app-database.cpp" line="+1125"/>
        <source>File Explorer</source>
        <translation>エクスプローラー</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Terminal</source>
        <translation>ターミナル</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Command Prompt</source>
        <translation>コマンドプロンプト</translation>
    </message>
</context>
<context>
    <name>WindowsApplication</name>
    <message>
        <location filename="../src/services/app-service/windows/win-app.hpp" line="+74"/>
        <source>%1: Run as Administrator</source>
        <translation>%1：管理者として実行</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run as Administrator</source>
        <translation>管理者として実行</translation>
    </message>
</context>
<context>
    <name>WindowsGlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/windows-global-shortcut-backend.cpp" line="+302"/>
        <source>unsupported or invalid trigger</source>
        <translation>未対応または無効なトリガーです</translation>
    </message>
</context>
<context>
    <name>WindowsUpdateInstaller</name>
    <message>
        <location filename="../src/services/update/windows-update-installer.cpp" line="+184"/>
        <source>This installation cannot update itself</source>
        <translation>このインストールでは自動更新を利用できません</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>The update is not signed</source>
        <translation>更新に署名がありません</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Update signature verification failed (0x%1)</source>
        <translation>更新の署名検証に失敗しました（0x%1）</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Update is signed by %1, expected %2</source>
        <translation>更新の署名者は%1ですが、期待される署名者は%2です</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Verifying update…</source>
        <translation>更新を検証中…</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Update has no version information</source>
        <translation>更新にバージョン情報がありません</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Update version mismatch: expected %1, found %2</source>
        <translation>更新バージョンが一致しません：期待値%1、実際の値%2</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Starting installer…</source>
        <translation>インストーラーを起動中…</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to start the installer</source>
        <translation>インストーラーを起動できませんでした</translation>
    </message>
</context>
<context>
    <name>X11GlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/x11-global-shortcut-backend.cpp" line="+147"/>
        <source>This shortcut is already in use by another application</source>
        <translation>このショートカットは別のアプリが使用しています</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Modifier-only shortcuts are not supported</source>
        <translation>修飾キーだけのショートカットには対応していません</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Unsupported trigger key</source>
        <translation>対応していないトリガーキーです</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Trigger key is not present on this keyboard</source>
        <translation>このキーボードにはトリガーキーがありません</translation>
    </message>
</context>
<context>
    <name>X11Workspace</name>
    <message>
        <location filename="../src/services/window-manager/x11/x11-window-manager.cpp" line="+424"/>
        <source>Desktop %1</source>
        <translation>デスクトップ %1</translation>
    </message>
</context>
<context>
    <name>XdpFileChooser</name>
    <message>
        <location filename="../src/services/file-chooser/xdp-file-chooser/xdp-file-chooser.cpp" line="+48"/>
        <source>Save</source>
        <translation>保存</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Save as</source>
        <translation>名前を付けて保存</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Select</source>
        <translation>選択</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Select a directory</source>
        <translation>フォルダーを選択</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Select files</source>
        <translation>ファイルを選択</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Select a file</source>
        <translation>ファイルを選択</translation>
    </message>
</context>
<context>
    <name>XxHotkeyGlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/xx-hotkey-global-shortcut-backend.cpp" line="+108"/>
        <source>Unsupported trigger key</source>
        <translation>対応していないトリガーキーです</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Compositor does not support global hotkeys</source>
        <translation>コンポジターがグローバルホットキーに対応していません</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Hotkey binding was lost</source>
        <translation>ホットキーの登録が失われました</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Compositor denied the bind. Try another key combination.</source>
        <translation>コンポジターがキーの登録を拒否しました。別の組み合わせを試してください。</translation>
    </message>
</context>
<context>
    <name>browser-extension</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.cpp" line="-58"/>
        <source>No browser connected</source>
        <translation>ブラウザーが接続されていません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>You need to connect at least one browser to vicinae using the browser extension in order to use this command.</source>
        <translation>このコマンドを使うには、ブラウザー拡張機能で少なくとも1つのブラウザーをVicinaeに接続してください。</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Open documentation</source>
        <translation>ドキュメントを開く</translation>
    </message>
</context>
<context>
    <name>clipboard-history-view-host</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-view-host.cpp" line="-232"/>
        <source>Text</source>
        <translation>テキスト</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Link</source>
        <translation>リンク</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Image</source>
        <translation>画像</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Unknown</source>
        <translation>不明</translation>
    </message>
</context>
<context>
    <name>emoji-categories</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="-52"/>
        <source>Smileys &amp; Emotion</source>
        <translation>顔と感情</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>People &amp; Body</source>
        <translation>人と体</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Animals &amp; Nature</source>
        <translation>動物と自然</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Food &amp; Drink</source>
        <translation>食べ物と飲み物</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Travel &amp; Places</source>
        <translation>旅行と場所</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Activities</source>
        <translation>活動</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Objects</source>
        <translation>物</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Symbols</source>
        <translation>記号</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Flags</source>
        <translation>旗</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Math</source>
        <translation>数学</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Arrows</source>
        <translation>矢印</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Currency</source>
        <translation>通貨</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Punctuation</source>
        <translation>句読点</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Shapes</source>
        <translation>図形</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Misc Symbols</source>
        <translation>その他の記号</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Greek</source>
        <translation>ギリシャ文字</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Number Forms</source>
        <translation>数字の表記</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fancy Letters</source>
        <translation>装飾文字</translation>
    </message>
</context>
<context>
    <name>emoji-grid-model</name>
    <message>
        <location line="+131"/>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy name</source>
        <translation>名前をコピー</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy unicode codepoint</source>
        <translation>Unicodeコードポイントをコピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy category</source>
        <translation>カテゴリーをコピー</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Skin tones</source>
        <translation>肌の色</translation>
    </message>
</context>
<context>
    <name>file-list-item</name>
    <message>
        <location filename="../src/utils/file-list-item.hpp" line="+100"/>
        <source>Copy file</source>
        <translation>ファイルをコピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy file path</source>
        <translation>ファイルのパスをコピー</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy file name</source>
        <translation>ファイル名をコピー</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Copy mime type</source>
        <translation>MIMEタイプをコピー</translation>
    </message>
</context>
<context>
    <name>font-categories</name>
    <message>
        <location filename="../src/services/font-service/font-service.cpp" line="+142"/>
        <source>Latin</source>
        <translation>ラテン文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Cyrillic</source>
        <translation>キリル文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Greek</source>
        <translation>ギリシャ文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Monospace</source>
        <translation>等幅</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Emoji</source>
        <translation>絵文字</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Japanese</source>
        <translation>日本語</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Korean</source>
        <translation>韓国語</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Simplified Chinese</source>
        <translation>簡体字中国語</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Traditional Chinese</source>
        <translation>繁体字中国語</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Arabic</source>
        <translation>アラビア文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Hebrew</source>
        <translation>ヘブライ文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Thai</source>
        <translation>タイ文字</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lao</source>
        <translation>ラオ文字</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Devanagari</source>
        <translation>デーヴァナーガリー文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Bengali</source>
        <translation>ベンガル文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Gurmukhi</source>
        <translation>グルムキー文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Gujarati</source>
        <translation>グジャラート文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Tamil</source>
        <translation>タミル文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Telugu</source>
        <translation>テルグ文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Kannada</source>
        <translation>カンナダ文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Malayalam</source>
        <translation>マラヤーラム文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Sinhala</source>
        <translation>シンハラ文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Armenian</source>
        <translation>アルメニア文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Georgian</source>
        <translation>ジョージア文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Thaana</source>
        <translation>ターナ文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Tibetan</source>
        <translation>チベット文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Myanmar</source>
        <translation>ミャンマー文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Khmer</source>
        <translation>クメール文字</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Syriac</source>
        <translation>シリア文字</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ogham</source>
        <translation>オガム文字</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Runic</source>
        <translation>ルーン文字</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>N&apos;Ko</source>
        <translation>ンコ文字</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Symbols</source>
        <translation>記号</translation>
    </message>
</context>
<context>
    <name>font-grid-model</name>
    <message>
        <location filename="../src/builtins/font/font-grid-model.cpp" line="+26"/>
        <source>Copy font family</source>
        <translation>フォントファミリー名をコピー</translation>
    </message>
</context>
<context>
    <name>keybind-manager</name>
    <message>
        <location filename="../src/internal/keyboard/keybind-manager.cpp" line="+9"/>
        <source>Toggle action panel</source>
        <translation>アクションパネルを切り替え</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Toggle the action panel to access and filter through the list of available actions for the currently selected item</source>
        <translation>アクションパネルを開閉し、選択中の項目で利用できるアクションを表示・絞り込みます</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Open Search Filter</source>
        <translation>検索フィルターを開く</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open the search filter selector if present</source>
        <translation>検索フィルターがある場合に、その選択欄を開きます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Open settings window</source>
        <translation>設定ウィンドウを開く</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open this settings window from the launcher window</source>
        <translation>ランチャーからこの設定ウィンドウを開きます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Open Action</source>
        <translation>共通：開く</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can open the selected item</source>
        <translation>選択中の項目を開くアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Copy Action</source>
        <translation>共通：コピー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can copy the selected item</source>
        <translation>選択中の項目をコピーするアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy Name Action</source>
        <translation>名前をコピー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can copy the name of the selected item</source>
        <translation>選択中の項目の名前をコピーするアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy Path Action</source>
        <translation>パスをコピー</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can copy the path of the selected item</source>
        <translation>選択中の項目のパスをコピーするアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Save Action</source>
        <translation>保存</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can save the selected item</source>
        <translation>選択中の項目を保存するアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Duplicate Action</source>
        <translation>複製</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can duplicate the selected item</source>
        <translation>選択中の項目を複製するアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic New Action</source>
        <translation>共通：新規作成</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that create something</source>
        <translation>新しい項目を作成するアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Move Up Action</source>
        <translation>共通：上に移動</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can move up the selected item. This does not affect list navigation controls.</source>
        <translation>選択中の項目を上に移動するアクションに使えます。一覧内の選択移動には影響しません。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Move Down Action</source>
        <translation>共通：下に移動</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can move down the selected item. This does not affect list navigation controls.</source>
        <translation>選択中の項目を下に移動するアクションに使えます。一覧内の選択移動には影響しません。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Refresh Action</source>
        <translation>共通：更新</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can refresh the selected item</source>
        <translation>選択中の項目を更新するアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Pin Action</source>
        <translation>共通：ピン留め</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can pin the selected item</source>
        <translation>選択中の項目をピン留めするアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Remove Action</source>
        <translation>削除</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can remove the selected item. This is normally used for small, not too impactful removals.</source>
        <translation>選択中の項目を削除するアクションに使えます。通常は影響の小さい削除に使用します。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Dangerous Remove Action</source>
        <translation>重大な削除</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that perform an impactful removal, generally accompanied by a confirmation dialog.</source>
        <translation>影響の大きい削除に使えます。通常は確認ダイアログを表示します。</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Edit Action</source>
        <translation>編集</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can edit the currently selected item</source>
        <translation>選択中の項目を編集するアクションに使えます</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Edit Secondary Action</source>
        <translation>追加の編集</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can edit a secondary characteristic of the currently selected item</source>
        <translation>選択中の項目の副次的な属性を編集するアクションに使えます</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Run as Administrator</source>
        <translation>管理者として実行</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Runs the application with elevated privileges</source>
        <translation>管理者権限でアプリを実行します</translation>
    </message>
</context>
<context>
    <name>macos-update-installer</name>
    <message>
        <location filename="../src/services/update/macos-update-installer.mm" line="-183"/>
        <source>Update image contains more than one app</source>
        <translation>更新用イメージに複数のアプリが含まれています</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Failed to list update image: %1</source>
        <translation>更新用イメージの内容を取得できませんでした：%1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No app found in update image</source>
        <translation>更新用イメージにアプリが見つかりません</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to read the update&apos;s code signature</source>
        <translation>更新のコード署名を読み取れませんでした</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Failed to build the signature requirement</source>
        <translation>署名の検証条件を構築できませんでした</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Update signature verification failed (%1)</source>
        <translation>更新の署名検証に失敗しました（%1）</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Update has no CFBundleShortVersionString</source>
        <translation>更新にCFBundleShortVersionStringがありません</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Update version mismatch: expected %1, found %2</source>
        <translation>更新バージョンが一致しません：期待値%1、実際の値%2</translation>
    </message>
</context>
<context>
    <name>media-extension</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="-198"/>
        <source>%1 — %2</source>
        <translation>%1 — %2</translation>
    </message>
    <message>
        <location line="+35"/>
        <source>No media player is running</source>
        <translation>メディアプレーヤーが動作していません</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No media player matches &quot;%1&quot;</source>
        <translation>「%1」に一致するメディアプレーヤーがありません</translation>
    </message>
    <message>
        <location line="+129"/>
        <source>Volume %1%</source>
        <translation>音量 %1%</translation>
    </message>
</context>
<context>
    <name>shortcut-conflict</name>
    <message>
        <location filename="../src/ui/settings/shortcut-conflict.cpp" line="+10"/>
        <source>Modifier required</source>
        <translation>修飾キーが必要です</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+5"/>
        <source>Already bound to &quot;%1&quot;</source>
        <translation>すでに「%1」に割り当て済みです</translation>
    </message>
</context>
<context>
    <name>std</name>
    <message>
        <location filename="../src/services/ai/local/local-provider.hpp" line="+26"/>
        <source>Built-in</source>
        <translation>内蔵</translation>
    </message>
</context>
<context>
    <name>utils</name>
    <message>
        <location filename="../src/utils/utils.cpp" line="+88"/>
        <source>0 bytes</source>
        <translation>0バイト</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>bytes</source>
        <translation>バイト</translation>
    </message>
</context>
<context>
    <name>virtual-desktops</name>
    <message>
        <location filename="../src/services/window-manager/windows/virtual-desktops.cpp" line="+67"/>
        <source>Desktop %1</source>
        <translation>デスクトップ %1</translation>
    </message>
</context>
</TS>
