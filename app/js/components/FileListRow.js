'use es6';

import React, { PropTypes } from 'react';

export default React.createClass({
  PropTypes: {
    file: PropTypes.string.isRequired,
  },

  render() {
    const { file } = this.props;

    return (
      <div className="file-list-row">
        {file}
      </div>
    );
  },
});
