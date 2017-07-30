'use es6';

import React from 'react';
import { connect } from 'react-redux';

import FoldersView from './../views/FoldersView';
import NoFoldersView from './../views/NoFoldersView';

import views from './../constants/view';

const { PropTypes } = React;

const ContentViewContainer = React.createClass({
  PropTypes: {
    selectedFile: PropTypes.string,
    openFilesAndFolders: PropTypes.object,
    viewName: PropTypes.string,
  },

  renderNoFolders() {
    return (
      <NoFoldersView />
    );
  },

  renderFolders() {
    const { openFilesAndFolders, viewName, changeSelectedFile } = this.props;

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
        changeSelectedFile={changeSelectedFile}
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
    const { viewName, selectedFile } = this.props;

    if (viewName !== views.COMPARE_VIEW) {
      return null;
    }

    return <div>Compare view. Selected file: {selectedFile}</div>;
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
  (state) => {
    return {
      selectedFile: state.selectedFile,
      openFilesAndFolders: state.openFilesAndFolders,
      viewName: state.viewName,
    };
  },
  { },
)(ContentViewContainer);
