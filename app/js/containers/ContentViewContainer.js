'use es6';

import React from 'react';
import { connect } from 'react-redux';
import * as FolderActions from './../actions/FolderActions';

import AddFolderButton from './../components/AddFolderButton';
import FolderList from './../components/FolderList';
import NoFoldersView from './../views/NoFoldersView';

import views from './../constants/view';

const { PropTypes } = React;

const ContentViewContainer = React.createClass({
  PropTypes: {
    openFolders: PropTypes.array,
    viewName: PropTypes.string,
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
    const { openFolders, viewName } = this.props;

    if (viewName !== views.FOLDERS_VIEW) {
      return null;
    }

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

  renderChart() {
    const { viewName } = this.props;

    if (viewName !== views.CHART_VIEW) {
      return null;
    }

    return <div>Chart view</div>;
  },

  render() {
    return (
      <div className="content-view-container">
        {this.renderFolders()}
        {this.renderChart()}
      </div>
    );
  },
});

export default connect(
  state => {
    return {
      openFolders: state.openFolders,
      viewName: state.viewName,
    };
  },
  {
    ...FolderActions,
  },
)(ContentViewContainer);
