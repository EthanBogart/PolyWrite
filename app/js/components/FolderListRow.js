'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import FileList from './FileList';

export default React.createClass({
  PropTypes: {
    folder: PropTypes.object.isRequired,
    selectedFile: PropTypes.string,
  },

  getInitialState() {
    return {
      showFileList: false,
    };
  },

  onFolderClick() {
    const { showFileList } = this.state;

    this.setState({
      showFileList: !showFileList,
    });
  },

  renderFileList() {
    const { folder, selectedFile } = this.props;
    const { showFileList } = this.state;

    if (!showFileList) {
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
        onClick={this.onFolderClick}
      >
        {folder.get('path')}
        {this.renderFileList()}
      </div>
    );
  },
});
