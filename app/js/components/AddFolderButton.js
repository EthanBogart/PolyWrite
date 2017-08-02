import React from 'react';
import PropTypes from 'prop-types';
import { ipcRenderer } from 'electron';

import { OPEN_FOLDER } from './../constants/ipc';

export default React.createClass({
  PropTypes: {
    classNames: PropTypes.string,
    text: PropTypes.string,
  },

  onOpenFolderClick() {
    ipcRenderer.send(OPEN_FOLDER, 'AddFolderButtonClick');
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
