import {
  app,
  ipcMain,
  BrowserWindow,
  dialog,
} from 'electron';
import * as ipc from './app/js/constants/ipc';
import * as OpenDialog from './app/js/system/OpenDialog';

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  ipcMain.on(ipc.OPEN_FOLDER, (event, origin) => {
    event.sender.send(origin, OpenDialog.openFolder(dialog));
  });

  ipcMain.on(ipc.OPEN_FILE, (event, origin) => {
    event.sender.send(origin, OpenDialog.openFile(dialog));
  });
  // ipcRenderer.on('showOpenDialog', () {
  //   debugger;
  // });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
