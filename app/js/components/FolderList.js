'use es6';

import React, { PropTypes } from 'react';
import FolderListRow from './FolderListRow';

export default React.createClass({
  PropTypes: {
    openFolders: PropTypes.array.isRequired,
  },

  render() {
    const { openFolders } = this.props;

    if (!openFolders.length) {
      return null;
    }

    return (
      <div className="folder-file-list">
        <h3>Open Folders:</h3>
        {openFolders.map((dir, index) => {
          const key = [index, dir].join('-');

          return (
            <FolderListRow
              folder={dir}
              key={key}
            />
          );
        })}
      </div>
    );
  },
});
