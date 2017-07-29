'use es6';

import React, { PropTypes } from 'react';

export default React.createClass({
  PropTypes: {
    folder: PropTypes.string.isRequired,
  },

  render() {
    const { folder } = this.props;

    return (
      <div className="folder-list-row">
        {folder}
      </div>
    );
  },
});
