'use es6';

import { List, Record } from 'immutable';

import views from './../constants/view';

export default Record({
  openFiles: new List(),
  openFolders: new List(),
  viewName: views.FOLDERS_VIEW,
  selectedFile: null,
}, 'AppState');
