'use es6';

import React, { PropTypes } from 'react';
import FileList from './FileList';

export default React.createClass({
  PropTypes: {
    folder: PropTypes.object.isRequired,
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
    const { folder } = this.props;
    const { showFileList } = this.state;

    if (!showFileList) {
      return null;
    }

    return (
      <FileList
        openFiles={folder.get('files')}
        shouldShowHeader={false}
        classes="folder-child"
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
