'use es6';

import { Record } from 'immutable';
import { OpenFilesAndFolders } from './OpenFilesAndFolders';
import views from './../constants/view';

export default Record({
  openFilesAndFolders: new OpenFilesAndFolders(),
  viewName: views.FOLDERS_VIEW,
}, 'AppState');
