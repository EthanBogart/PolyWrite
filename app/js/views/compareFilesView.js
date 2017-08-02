'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import * as fs from 'fs';
import Quill from 'quill';

export default React.createClass({
  PropTypes: {
    selectedFile: PropTypes.object.isRequired,
  },

  getInitialState() {
    const { selectedFile } = this.props;

    let text = '';

    try {
      text = fs.readFileSync(selectedFile.get('name'), 'utf8');
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
