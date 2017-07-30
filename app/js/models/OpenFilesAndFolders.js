'use es6';

import { Record } from 'immutable';

export const Folder = Record({
  path: '',
  files: [],
}, 'Folder');

export const OpenFilesAndFolders = Record({
  files: [],
  folders: [],
}, 'OpenFilesAndFolders');
