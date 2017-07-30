'use es6';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as FolderActions from './../actions/FolderActions';

const RemoveFileButton = React.createClass({
  PropTypes: {
    removeFile: PropTypes.func.isRequired,
    file: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    text: PropTypes.string,
  },

  onRemoveFileClick() {
    const { removeFile, file } = this.props;

    removeFile(file);
  },

  render() {
    const { text, classNames } = this.props;

    return (
      <button
        onClick={this.onRemoveFileClick}
        className={classNames}
      >
        {text}
      </button>
    );
  },
});

export default connect(
  () => { return {}; },
  {
    ...FolderActions,
  },
)(RemoveFileButton);
