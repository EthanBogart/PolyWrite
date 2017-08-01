'use es6';

import AppState from './../models/AppState';
import ActionTypes from './../actions/ActionTypes';
import openFiles from './openFiles';
import openFolders from './openFolders';
import viewName from './viewName';
import selectedFile from './selectedFile';

import { saveState, loadState } from './../utils/persist';

function root(state, action) {
  const newState = new AppState({
    openFiles: openFiles(state.openFiles, action),
    openFolders: openFolders(state.openFolders, action),
    viewName: viewName(state.viewName, action),
    selectedFile: selectedFile(state.selectedFile, action),
  });

  if (action.type !== '@@INIT') {
    saveState(newState);
  }
  return newState;
}

export default (state = new AppState(), action) => {
  if (action.type === ActionTypes.REHYDRATE) {
    return action.payload;
  }
  return root(state, action);
};
