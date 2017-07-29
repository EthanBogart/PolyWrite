'use es6';

import React, { PropTypes } from 'react';
import FileListRow from './FileListRow';

export default React.createClass({
  PropTypes: {
    openFiles: PropTypes.array.isRequired,
  },

  render() {
    const { openFiles } = this.props;

    if (!openFiles.length) {
      return null;
    }

    return (
      <div className="folder-file-list">
        <h3>Open Files:</h3>
        {openFiles.map((file, index) => {
          const key = [index, file].join('-');

          return (
            <FileListRow
              file={file}
              key={key}
            />
          );
        })}
      </div>
    );
  },
});
