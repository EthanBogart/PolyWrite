'use es6';

import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import SidebarContainer from './containers/SidebarContainer';
import ContentViewContainer from './containers/ContentViewContainer';

export default React.createClass({
  render() {
    return (
      <div>
        <SidebarContainer />
        <HeaderContainer />
        <ContentViewContainer />
      </div>
    );
  },
});
