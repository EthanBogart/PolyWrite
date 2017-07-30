'use es6';

import React, { PropTypes } from 'react';

import RemoveFileButton from './RemoveFileButton';

export default React.createClass({
  PropTypes: {
    file: PropTypes.string.isRequired,
    shouldShowButton: PropTypes.bool.isRequired,
  },

  renderRemoveFileButton() {
    const { shouldShowButton, file } = this.props;

    return shouldShowButton ? (
      <RemoveFileButton
        text="Remove this file"
        file={file}
      />
    ) : null;
  },

  render() {
    const { file } = this.props;

    return (
      <div className="file-list-row">
        {file}
        {this.renderRemoveFileButton()}
      </div>
    );
  },
});
