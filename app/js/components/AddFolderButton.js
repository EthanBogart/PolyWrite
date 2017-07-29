import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';

import { OPEN_FOLDER } from './../constants/ipc';
import * as FolderActions from './../actions/FolderActions';

const AddFolderButton = React.createClass({
  PropTypes: {
    addFolder: PropTypes.func.isRequired,
    classNames: PropTypes.string,
    text: PropTypes.string,
  },

  onOpenFolderClick() {
    ipcRenderer.on('NoFoldersViewClick', (event, path) => {
      this.props.addFolder(path);
    });
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

export default connect(
  () => { return {}; },
  {
    ...FolderActions,
  },
)(AddFolderButton);
