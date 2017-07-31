'use es6';

import * as jsonfile from 'jsonfile';
import { remote } from 'electron';
import { List } from 'immutable';

import createAction from './../actions/createAction';
import ActionTypes from './../actions/ActionTypes';
import { Folder, OpenFilesAndFolders } from './../models/OpenFilesAndFolders';
import AppState from './../models/AppState';

const dataPath = [remote.app.getPath('userData'), 'appState.json'].join('');

function getFilesAndFoldersObject(oldState, newState) {
  if (oldState.equals(newState)) {
    return oldState;
  }

  const newFiles = newState.get('files').toArray();
  const newFolders = newState.get('folders').map((folder) => {
    const newFolder = folder.toJSON();
    newFolder.files = newFolder.files.toArray();
    return newFolder;
  });

  return {
    files: newFiles,
    folders: newFolders,
  };
}

function getFilesAndFoldersRecord(data) {
  const loadedFiles = data.OpenFilesAndFolders;
  const newFolders = loadedFiles.folders.map((folder) => {
    return new Folder({
      path: folder.path,
      files: new List(folder.files),
    });
  });

  const newOpen = new OpenFilesAndFolders({
    folders: newFolders,
    files: new List(loadedFiles.files),
  });

  return newOpen;
}

export function saveState(oldState, newState) {
  const stateToSave = {
    openFilesAndFolders: getFilesAndFoldersObject(oldState, newState),
    viewName: newState.get('viewName'),
    selectedFile: newState.get('selectedFile'),
  };

  try {
    jsonfile.writeFile(dataPath, stateToSave);
  } catch (err) { }
}

export function loadState(dispatch) {
  jsonfile.readFile(dataPath, (err, data) => {
    if (!err) {
      const loadedState = new AppState({
        openFilesAndFolders: getFilesAndFoldersRecord(data),
        viewName: data.viewName,
        selectedFile: data.selectedFile,
      });

      dispatch(createAction(ActionTypes.REHYDRATE, loadedState));
    }
  });
}
