const vscode = require('vscode');

function activate(context) {
    
    const disposable = vscode.commands.registerCommand('extension.gitUrgent', function () {
        return vscode.commands.executeCommand('git.stageAll').then(() => {
            return vscode.commands.executeCommand('git.commitStaged').then(() => {
                return vscode.commands.executeCommand('git.sync');
            });
        });
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {}

exports.deactivate = deactivate;