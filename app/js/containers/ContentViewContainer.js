'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FoldersView from './../views/FoldersView';
import NoFoldersView from './../views/NoFoldersView';
import CompareFilesView from './../views/CompareFilesView';

import views from './../constants/view';

import * as FolderActions from './../actions/FolderActions';

const ContentViewContainer = React.createClass({
  PropTypes: {
    selectedFile: PropTypes.string,
    openFiles: PropTypes.object,
    openFolders: PropTypes.object,
    viewName: PropTypes.string,
    folderClicked: PropTypes.func,
  },

  renderNoFolders() {
    return (
      <NoFoldersView />
    );
  },

  renderFolders() {
    const {
      openFiles,
      openFolders,
      viewName,
      selectedFile,
      folderClicked,
    } = this.props;

    if (viewName !== views.FOLDERS_VIEW) {
      return null;
    }

    if (!openFiles.size && !openFolders.size) {
      return this.renderNoFolders();
    }

    return (
      <FoldersView
        openFolders={openFolders}
        openFiles={openFiles}
        selectedFile={selectedFile}
        folderClicked={folderClicked}
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

    if (!selectedFile) {
      return <div>No file selected</div>;
    }

    return (
      <CompareFilesView
        selectedFile={selectedFile}
      />
    );
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
      openFiles: state.openFiles,
      openFolders: state.openFolders,
      viewName: state.viewName,
    };
  },
  {
    ...FolderActions,
  },
)(ContentViewContainer);
