'use es6';

import React from 'react';
import { connect } from 'react-redux';

import FoldersView from './../views/FoldersView';
import NoFoldersView from './../views/NoFoldersView';

import views from './../constants/view';

const { PropTypes } = React;

const ContentViewContainer = React.createClass({
  PropTypes: {
    openFolders: PropTypes.array,
    viewName: PropTypes.string,
  },

  renderNoFolders() {
    return (
      <NoFoldersView />
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
      <FoldersView
        openFolders={openFolders}
      />
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
        <div className="flex-column-container">
          {this.renderFolders()}
          {this.renderChart()}
        </div>
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
  { },
)(ContentViewContainer);
