'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FileListRow from './FileListRow';

export default React.createClass({
  PropTypes: {
    openFiles: PropTypes.array.isRequired,
    isSublist: PropTypes.bool.isRequired,
    classes: PropTypes.string,
    selectedFile: PropTypes.string,
  },

  renderHeader() {
    const { isSublist } = this.props;

    return isSublist ? null : <h3>Open Files:</h3>;
  },

  render() {
    const { openFiles, classes, isSublist, selectedFile } = this.props;

    if (!openFiles.size) {
      return null;
    }

    const className = classNames(classes, 'folder-file-list');

    return (
      <div className={className}>
        {this.renderHeader()}
        {openFiles.map((file, index) => {
          const key = [index, file].join('-');

          return (
            <FileListRow
              file={file}
              key={key}
              shouldShowButton={!isSublist}
              selectedFile={selectedFile}
            />
          );
        })}
      </div>
    );
  },
});
