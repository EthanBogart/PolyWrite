'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import * as fs from 'fs';
import mime from 'mime-types';
import Quill from 'quill';

import { diffInstance } from '../utils/webassembly';

export default React.createClass({
  PropTypes: {
    selectedFile: PropTypes.object.isRequired,
  },

  getInitialState() {
    const { selectedFile } = this.props;

    let text = '';
    const path = [selectedFile.get('path'), selectedFile.get('name')].join('/');

    try {
      if (mime.lookup(path) !== 'text/plain') {
        text = 'This file is not supported. Please select a plain text file.';
      } else {
        text = fs.readFileSync(path, 'utf8');
      }
    } catch (err) {
      text = 'Could not open file';
    }

    return {
      text,
    };
  },

  componentDidMount() {
    const { text } = this.state;

    const preview = new Quill('#editor');
    preview.enable(false);
    preview.setText(text);

    diffInstance();
  },

  render() {
    return (
      <div className="text-preview-container flex-column-container">
        <div>Preview of file changes:</div>
        <div id="editor" className="text-preview" />
      </div>
    );
  },
});
