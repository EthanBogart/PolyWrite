'use es6';

import React from 'react';
import { connect } from 'react-redux';

import FoldersView from './../views/FoldersView';
import NoFoldersView from './../views/NoFoldersView';

import views from './../constants/view';

const { PropTypes } = React;

const ContentViewContainer = React.createClass({
  PropTypes: {
    openFilesAndFolders: PropTypes.array,
    viewName: PropTypes.string,
  },

  renderNoFolders() {
    return (
      <NoFoldersView />
    );
  },

  renderFolders() {
    const { openFilesAndFolders, viewName } = this.props;

    if (viewName !== views.FOLDERS_VIEW) {
      return null;
    }

    const openFiles = openFilesAndFolders.get('files');
    const openFolders = openFilesAndFolders.get('folders');

    if (!openFiles.size && !openFolders.length) {
      return this.renderNoFolders();
    }

    return (
      <FoldersView
        openFolders={openFolders}
        openFiles={openFiles}
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

  renderCompare() {
    const { viewName } = this.props;

    if (viewName !== views.COMPARE_VIEW) {
      return null;
    }

    return <div>Compare view</div>;
  },

  render() {
    return (
      <div className="content-view-container">
        <div className="flex-column-container">
          {this.renderFolders()}
          {this.renderChart()}
          {this.renderCompare()}
        </div>
      </div>
    );
  },
});

export default connect(
  state => {
    return {
      openFilesAndFolders: state.openFilesAndFolders,
      viewName: state.viewName,
    };
  },
  { },
)(ContentViewContainer);
