export function openFolder(dialog) {
  return dialog.showOpenDialog({
    properties: ['openDirectory', 'multiSelections'],
  });
}

export function openFile(dialog) {
  return dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections'],
  });
}
