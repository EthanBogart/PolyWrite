import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import switchView from './../actions/ViewActions';

const ViewButton = React.createClass({
  PropTypes: {
    switchView: PropTypes.func.isRequired,
    viewName: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    text: PropTypes.string,
  },

  onSwitchViewClick() {
    const { switchView, viewName } = this.props;
    switchView(viewName);
  },

  render() {
    const { text, classNames } = this.props;

    return (
      <button
        onClick={this.onSwitchViewClick}
        className={classNames}
      >
        {text}
      </button>
    );
  },
});

export default connect(
  () => { return {}; },
  {
    switchView,
  },
)(ViewButton);
