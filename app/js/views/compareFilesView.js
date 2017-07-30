'use es6';

import React, { PropTypes } from 'react';
import * as fs from 'fs';
import Quill from 'quill';

export default React.createClass({
  PropTypes: {
    selectedFile: PropTypes.string.isRequired,
  },

  getInitialState() {
    const { selectedFile } = this.props;

    let text = '';

    try {
      text = fs.readFileSync(selectedFile, 'utf8');
    } catch (err) {
      text = 'Could not open file';
    }

    return {
      text,
    };
  },

  componentDidMount() {
    const { text } = this.state;

    const preview = new Quill('#editor', {
      modules: { toolbar: '#toolbar' },
    });

    preview.setText(text);
  },

  render() {
    return (
      <div>
        <div id="toolbar">
          <button>Bold</button>
          <button>Italic</button>
        </div>
        <div id="editor" />
      </div>
    );
  },
});
