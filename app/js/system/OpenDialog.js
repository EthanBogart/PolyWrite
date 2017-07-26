export function openDirectory(dialog) {
  return dialog.showOpenDialog({
    properties: ['openDirectory'],
  });
}

export function openFile(dialog) {
  return dialog.showOpenDialog();
}
