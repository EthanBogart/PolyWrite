'use es6';

import React from 'react';
import PropTypes from 'prop-types';

import AddFolderButton from './../components/AddFolderButton';
import AddFileButton from './../components/AddFileButton';
import FolderList from './../components/FolderList';
import FileList from './../components/FileList';

export default React.createClass({
  PropTypes: {
    openFolders: PropTypes.array.isRequired,
    openFiles: PropTypes.array.isRequired,
    selectedFile: PropTypes.string,
    folderClicked: PropTypes.func,
  },

  render() {
    const { openFolders, openFiles, selectedFile, folderClicked } = this.props;

    return (
      <div>
        <AddFolderButton text="Add another folder" />
        <AddFileButton text="Add another file" />
        <FolderList
          openFolders={openFolders}
          selectedFile={selectedFile}
          folderClicked={folderClicked}
        />
        <FileList
          openFiles={openFiles}
          isSublist={false}
          selectedFile={selectedFile}
        />
      </div>
    );
  },
});
