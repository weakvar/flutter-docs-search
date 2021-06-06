"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let searchSelectionCommand = vscode.commands.registerCommand('flutter-docs.searchSelection', () => {
        const editor = vscode.window.activeTextEditor;
        const selectionText = editor === null || editor === void 0 ? void 0 : editor.document.getText(editor.selection);
        const baseUrl = 'https://www.google.com/search?q=site:+api.flutter.dev+AND+flutter.dev/docs';
        const searchQuery = `${baseUrl}+${selectionText}`;
        vscode.env.openExternal(vscode.Uri.parse(searchQuery));
    });
    context.subscriptions.push(searchSelectionCommand);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map