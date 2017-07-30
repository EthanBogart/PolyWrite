'use es6';

import React, { PropTypes } from 'react';

import RemoveFileButton from './RemoveFileButton';
import SelectFileButton from './SelectFileButton';

export default React.createClass({
  PropTypes: {
    file: PropTypes.string.isRequired,
    shouldShowButton: PropTypes.bool.isRequired,
  },

  renderSelectFileButton() {
    const { file } = this.props;

    return (
      <SelectFileButton
        text="Select this file"
        file={file}
      />
    );
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
        {this.renderSelectFileButton()}
        {this.renderRemoveFileButton()}
      </div>
    );
  },
});
