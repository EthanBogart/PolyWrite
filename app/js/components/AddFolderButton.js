import React, { PropTypes } from 'react';
import { ipcRenderer } from 'electron';

import { OPEN_FOLDER } from './../constants/ipc';

export default React.createClass({
  PropTypes: {
    addFolder: PropTypes.func.isRequired,
    classNames: PropTypes.string,
    text: PropTypes.string,
  },

  onOpenFolderClick() {
    ipcRenderer.send(OPEN_FOLDER, 'NoFoldersViewClick');
  },

  render() {
    const { text, classNames } = this.props;

    return (
      <button
        onClick={this.onOpenFolderClick}
        className={classNames}
      >
        {text}
      </button>
    );
  },
});
