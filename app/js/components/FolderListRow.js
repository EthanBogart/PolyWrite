'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import FileList from './FileList';

export default React.createClass({
  PropTypes: {
    folder: PropTypes.object.isRequired,
    selectedFile: PropTypes.string,
    folderClicked: PropTypes.func,
    index: PropTypes.number.isRequired,
  },

  onFolderClicked() {
    const { folderClicked, folder, index } = this.props;

    folderClicked(folder, index);
  },

  renderFileList() {
    const { folder, selectedFile } = this.props;
    if (!folder.get('isListOpen')) {
      return null;
    }

    return (
      <FileList
        openFiles={folder.get('files')}
        isSublist={true}
        classes="folder-child"
        selectedFile={selectedFile}
      />
    );
  },

  render() {
    const { folder } = this.props;

    return (
      <div
        className="folder-list-row"
        onClick={this.onFolderClicked}
      >
        {folder.get('path')}
        {this.renderFileList()}
      </div>
    );
  },
});
