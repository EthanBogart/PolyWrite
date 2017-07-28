'use es6';

import React from 'react';
import { connect } from 'react-redux';
import * as FolderActions from './../actions/FolderActions';

import AddFolderButton from './../components/AddFolderButton';
import NoFoldersView from './../views/NoFoldersView';

const { PropTypes } = React;

const ContentViewContainer = React.createClass({
  PropTypes: {
    openFolders: PropTypes.array,
  },

  renderFolderList() {
    const { openFolders } = this.props;

    return openFolders.map((dir) => {
      return (
        <div key={dir}>
          {dir}
        </div>
      );
    });
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
        <div className="vertical-align-middle">
          <AddFolderButton text="Add another folder" />
          <div>
            {this.renderFolderList()}
          </div>
        </div>
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
