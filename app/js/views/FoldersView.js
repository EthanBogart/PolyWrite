import React, { PropTypes } from 'react';

import AddFolderButton from './../components/AddFolderButton';
import AddFileButton from './../components/AddFileButton';
import FolderList from './../components/FolderList';
import FileList from './../components/FileList';

export default React.createClass({
  PropTypes: {
    openFolders: PropTypes.array.isRequired,
    openFiles: PropTypes.array.isRequired,
  },

  render() {
    const { openFolders, openFiles } = this.props;

    return (
      <div>
        <AddFolderButton text="Add another folder" />
        <AddFileButton text="Add another file" />
        <FolderList
          openFolders={openFolders}
        />
        <FileList
          openFiles={openFiles}
        />
      </div>
    );
  },
});
