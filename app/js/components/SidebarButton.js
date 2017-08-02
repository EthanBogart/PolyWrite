import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({
  propTypess: {
    text: PropTypes.string,
  },

  render() {
    const { text } = this.props;

    return <button>{text}</button>;
  },
});
