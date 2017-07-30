'use es6';

import { Record, List } from 'immutable';

export const Folder = Record({
  path: '',
  files: new List(),
}, 'Folder');

export const OpenFilesAndFolders = Record({
  files: new List(),
  folders: [],
}, 'OpenFilesAndFolders');
