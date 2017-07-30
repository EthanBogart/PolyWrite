'use es6';

import React, { PropTypes } from 'react';
import { ipcRenderer } from 'electron';
import { connect } from 'react-redux';

import HeaderContainer from './containers/HeaderContainer';
import SidebarContainer from './containers/SidebarContainer';
import ContentViewContainer from './containers/ContentViewContainer';

import * as FolderActions from './actions/FolderActions';

const App = React.createClass({
  PropTypes: {
    addFolder: PropTypes.func.isRequired,
  },

  render() {
    ipcRenderer.on('AddFolderButtonClick', (event, path) => {
      this.props.addFolder(path);
    });

    ipcRenderer.on('AddFileButtonClick', (event, path) => {
      this.props.addFile(path);
    });

    return (
      <div className="app-container">
        <div className="flex-column-container">
          <HeaderContainer />
          <ContentViewContainer />
        </div>
      </div>
    );
  },
});

export default connect(
  () => { return {}; },
  {
    ...FolderActions,
  },
)(App);
