'use es6';

import React, { PropTypes } from 'react';
import { ipcRenderer } from 'electron';

import { OPEN_FILE } from './../constants/ipc';

export default React.createClass({
  PropTypes: {
    classNames: PropTypes.string,
    text: PropTypes.string,
  },

  onOpenFileClick() {
    ipcRenderer.send(OPEN_FILE, 'AddFileButtonClick');
  },

  render() {
    const { text, classNames } = this.props;

    return (
      <button
        onClick={this.onOpenFileClick}
        className={classNames}
      >
        {text}
      </button>
    );
  },
});
