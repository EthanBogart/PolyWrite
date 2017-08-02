// 'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RemoveFileButton from './RemoveFileButton';
import SelectFileButton from './SelectFileButton';

export default React.createClass({
  PropTypes: {
    file: PropTypes.string.isRequired,
    shouldShowButton: PropTypes.bool.isRequired,
    selectedFile: PropTypes.string,
  },

  isFileSelected() {
    const { file, selectedFile } = this.props;

    if (selectedFile !== null && file.equals(selectedFile)) {
      return true;
    }
    return false;
  },

  renderSelectFileButton() {
    const { file } = this.props;

    const text = this.isFileSelected()
      ? 'Unselect this file'
      : 'Select this file';

    return (
      <SelectFileButton
        text={text}
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

    const rowClassName = classNames(
      'file-list-row',
      { 'file-list-row-selected': this.isFileSelected() },
    );

    return (
      <div className={rowClassName}>
        {file.get('name')}
        {this.renderSelectFileButton()}
        {this.renderRemoveFileButton()}
      </div>
    );
  },
});
