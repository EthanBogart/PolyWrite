'use es6';

import React from 'react';
import { connect } from 'react-redux';
import * as FolderActions from './../actions/FolderActions';
import NoFoldersView from './../views/NoFoldersView';
console.log(FolderActions);
const { PropTypes } = React;

const ContentViewContainer = React.createClass({
  PropTypes: {
    addFolder: PropTypes.func.isRequired,
  },

  renderNoFolders() {
    const { addFolder } = this.props;

    return (
      <NoFoldersView
        addFolder={addFolder}
      />
    );
  },

  render() {
    return (
      <div className="content-view-container">
        {this.renderNoFolders()}
      </div>
    );
  },
});

export default connect(
  state => {
    return {
      openFolders: state.openFolders,
    };
  },
  {
    ...FolderActions,
  },
)(ContentViewContainer);
