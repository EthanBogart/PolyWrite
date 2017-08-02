'use es6';

import React from 'react';
import PropTypes from 'prop-types';
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
