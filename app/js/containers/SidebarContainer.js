import React from 'react';
import SidebarButton from '../components/SidebarButton';

export default React.createClass({
  renderCompareButton() {
    return (
      <SidebarButton
        text="Compare files"
      />
    );
  },

  render() {
    return (
      <div className="app-sidebar-container">
        {this.renderCompareButton()}
      </div>
    );
  },
});
