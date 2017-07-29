import React, { PropTypes } from 'react';

import AddFolderButton from './../components/AddFolderButton';
import FolderList from './../components/FolderList';

export default React.createClass({
  PropTypes: {
    openFolders: PropTypes.array.isRequired,
    openFiles: PropTypes.array.isRequired,
  },

  render() {
    const { openFolders } = this.props;

    return (
      <div>
        <AddFolderButton text="Add another folder" />
        <FolderList
          openFolders={openFolders}
        />
      </div>
    );
  },
});
