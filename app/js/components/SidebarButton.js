import React from 'react';

const { PropTypes } = React;

export default React.createClass({
  propTypess: {
    text: PropTypes.string,
  },

  render() {
    const { text } = this.props;

    return <button>{text}</button>;
  },
});
