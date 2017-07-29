'use es6';

import React, { PropTypes } from 'react';
import FolderListRow from './FolderListRow';

export default React.createClass({
  PropTypes: {
    openFolders: PropTypes.array.isRequired,
  },

  render() {
    const { openFolders } = this.props;

    return (
      <div className="folder-list">
        <h3>Open Folders:</h3>
        {openFolders.map((dir) => {
          return (
            <FolderListRow
              folder={dir}
              key={dir}
            />
          );
        })}
      </div>
    );
  },
});