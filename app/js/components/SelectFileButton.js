'use es6';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as FolderActions from './../actions/FolderActions';

const RemoveFileButton = React.createClass({
  PropTypes: {
    changeSelectedFile: PropTypes.func.isRequired,
    file: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    text: PropTypes.string,
  },

  onSelectFileClick() {
    const { changeSelectedFile, file } = this.props;

    changeSelectedFile(file);
  },

  render() {
    const { text, classNames } = this.props;

    return (
      <button
        onClick={this.onSelectFileClick}
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
