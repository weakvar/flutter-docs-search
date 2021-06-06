import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let searchSelectionCommand = vscode.commands.registerCommand('flutter-docs.searchSelection', () => {
		const editor = vscode.window.activeTextEditor;
		const selectionText = editor?.document.getText(editor.selection);
		const baseUrl = 'https://www.google.com/search?q=site:+api.flutter.dev+AND+flutter.dev/docs'
		const searchQuery = `${baseUrl}+${selectionText}`;

		vscode.env.openExternal(vscode.Uri.parse(searchQuery));
	});

	context.subscriptions.push(searchSelectionCommand);
}

export function deactivate() {}
