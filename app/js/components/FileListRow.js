'use es6';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import RemoveFileButton from './RemoveFileButton';
import SelectFileButton from './SelectFileButton';

export default React.createClass({
  PropTypes: {
    file: PropTypes.string.isRequired,
    shouldShowButton: PropTypes.bool.isRequired,
    selectedFile: PropTypes.string,
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
    const { file, selectedFile } = this.props;

    const rowClassName = classNames(
      'file-list-row',
      { 'file-list-row-selected': file === selectedFile },
    );

    return (
      <div className={rowClassName}>
        {file}
        {this.renderSelectFileButton()}
        {this.renderRemoveFileButton()}
      </div>
    );
  },
});
