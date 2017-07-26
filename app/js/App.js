'use es6';

import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import SidebarContainer from './containers/SidebarContainer';
import ContentViewContainer from './containers/ContentViewContainer';

export default React.createClass({
  render() {
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
