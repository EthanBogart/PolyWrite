import React from 'react';
import ViewButton from './../components/ViewButton';
import views from './../constants/view';

export default React.createClass({
  renderChartButton() {
    return (
      <ViewButton
        text="Open chart"
        viewName={views.CHART_VIEW}
      />
    );
  },

  renderFoldersButton() {
    return (
      <ViewButton
        text="Files and Folders"
        viewName={views.FOLDERS_VIEW}
      />
    );
  },

  renderCompareButton() {
    return (
      <ViewButton
        text="Compare Differences"
        viewName={views.COMPARE_VIEW}
      />
    );
  },

  render() {
    return (
      <div className="app-header-container">
        {this.renderChartButton()}
        {this.renderFoldersButton()}
        {this.renderCompareButton()}
      </div>
    );
  },
});
