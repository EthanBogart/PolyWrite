'use es6';

import { Record, List } from 'immutable';

export const Folder = Record({
  path: '',
  files: [],
}, 'Folder');

export const OpenFilesAndFolders = Record({
  files: new List(),
  folders: [],
}, 'OpenFilesAndFolders');
