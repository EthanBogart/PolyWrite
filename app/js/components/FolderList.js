'use es6';

import React, { PropTypes } from 'react';
import FolderListRow from './FolderListRow';

export default React.createClass({
  PropTypes: {
    openFolders: PropTypes.array.isRequired,
    changeSelectedFile: PropTypes.func.isRequired,
    selectedFile: PropTypes.string,
  },

  render() {
    const { openFolders, selectedFile } = this.props;

    if (!openFolders.size) {
      return null;
    }

    return (
      <div className="folder-file-list">
        <h3>Open Folders:</h3>
        {openFolders.map((folder, index) => {
          const key = [index, folder.get('path')].join('-');

          return (
            <FolderListRow
              folder={folder}
              key={key}
              selectedFile={selectedFile}
            />
          );
        })}
      </div>
    );
  },
});
