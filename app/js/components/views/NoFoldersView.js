import React from 'react';
import { ipcRenderer } from 'electron';
import { OPEN_FOLDER } from './../../constants/ipc';

export default React.createClass({
  onOpenFolderClick() {
    ipcRenderer.on('NoFoldersViewClick', (event, path) => {
      debugger;
    });
    ipcRenderer.send(OPEN_FOLDER, 'NoFoldersViewClick');
  },

  render() {
    return (
      <div className="flex-column-container">
        <div className="vertical-align-middle">
          <div>Hello there! Thank you for using PolyWrite</div>
          <div>To add a project folder and get going, click here:</div>
          <button onClick={this.onOpenFolderClick}>Open a folder</button>
        </div>
      </div>
    );
  },
});
