'use es6';

import AppState from '../models/AppState';
import openFilesAndFolders from './openFilesAndFolders';
import viewName from './viewName';
import selectedFile from './selectedFile';

export default function root(state = AppState(), action) {
  return new AppState({
    openFilesAndFolders: openFilesAndFolders(state.openFilesAndFolders, action),
    viewName: viewName(state.viewName, action),
    selectedFile: selectedFile(state.selectedFile, action),
  });
}
