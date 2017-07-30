'use es6';

import React, { PropTypes } from 'react';
import Quill from 'quill';

export default React.createClass({
  PropTypes: {
    selectedFile: PropTypes.string.isRequired,
  },

  componentDidMount() {
    const editor = new Quill('#editor', {
      modules: { toolbar: '#toolbar' },
    });
  },

  render() {
    return (
      <div>
        <div id="toolbar">
          <button>Bold</button>
          <button>Italic</button>
        </div>
        <div id="editor">
          <p>Hello World!</p>
        </div>
      </div>
    );
  },
});
