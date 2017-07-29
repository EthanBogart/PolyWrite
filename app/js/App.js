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
    ipcRenderer.on('NoFoldersViewClick', (event, path) => {
      this.props.addFolder(path);
    });

    return (
      <div className="app-container">
        <SidebarContainer />
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
