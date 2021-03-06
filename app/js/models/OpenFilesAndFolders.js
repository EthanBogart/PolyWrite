'use es6';

import { Record, List } from 'immutable';

export const Folder = Record({
  path: '',
  name: '',
  isListOpen: false,
  files: new List(),
}, 'Folder');

export const File = Record({
  name: '',
  path: '',
}, 'File');
