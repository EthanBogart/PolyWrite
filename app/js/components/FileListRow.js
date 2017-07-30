'use es6';

import React, { PropTypes } from 'react';

import RemoveFileButton from './RemoveFileButton';

export default React.createClass({
  PropTypes: {
    file: PropTypes.string.isRequired,
  },

  render() {
    const { file } = this.props;

    return (
      <div className="file-list-row">
        {file}
        <RemoveFileButton
          text="Remove this file"
          file={file}
        />
      </div>
    );
  },
});
