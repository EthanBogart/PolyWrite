'use es6';

import React from 'react';
import { connect } from 'react-redux';
import * as FolderActions from './../actions/FolderActions';

import AddFolderButton from './../components/AddFolderButton';
import FolderList from './../components/FolderList';
import NoFoldersView from './../views/NoFoldersView';

const { PropTypes } = React;

const ContentViewContainer = React.createClass({
  PropTypes: {
    openFolders: PropTypes.array,
  },

  renderNoFolders() {
    const { addFolder } = this.props;

    return (
      <NoFoldersView
        addFolder={addFolder}
      />
    );
  },

  renderFolders() {
    const { openFolders } = this.props;

    if (!openFolders.length) {
      return this.renderNoFolders();
    }

    return (
      <div className="flex-column-container">
        <AddFolderButton text="Add another folder" />
        <FolderList
          openFolders={openFolders}
        />
      </div>
    );
  },

  render() {
    return (
      <div className="content-view-container">
        {this.renderFolders()}
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
