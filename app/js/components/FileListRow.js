'use es6';

import React, { PropTypes } from 'react';

import RemoveFileButton from './RemoveFileButton';

export default React.createClass({
  PropTypes: {
    file: PropTypes.string.isRequired,
    shouldShowButton: PropTypes.bool.isRequired,
    changeSelectedFile: PropTypes.func.isRequired,
  },

  onFileRowClick() {
    const { changeSelectedFile, file } = this.props;

    changeSelectedFile(file);
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
        <div
          onClick={this.onFileRowClick}
        >
          {file}
        </div>
        {this.renderRemoveFileButton()}
      </div>
    );
  },
});
