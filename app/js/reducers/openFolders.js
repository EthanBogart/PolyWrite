'use es6';

import * as fs from 'fs';
import { List } from 'immutable';

import { File, Folder } from './../models/OpenFilesAndFolders';
import ActionTypes from './../actions/ActionTypes';

import mime from 'mime-types';

function readContainingFiles(folderPath) {
  let files;

  try {
    const children = new List(fs.readdirSync(folderPath));
    // Filters out folders and hidden files
    files = children.filter(
      (file) => {
        const path = [folderPath, file].join('/');

        return mime.lookup(path) === 'text/plain'
          && !(/(^|\/)\.[^\/\.]/g).test(file);
      },
    ).map(file => new File({
      path: folderPath,
      name: file,
    }));
  } catch (err) {
    files = new List();
  }

  return files;
}

export default function openFolders(
  state = new List(),
  action,
) {
  switch (action.type) {
    case ActionTypes.ADD_FOLDER: {
      const newFolders = [];
      const openFolderList = action.payload.folders;
      let folder;

      for (folder in openFolderList) {
        const newFolder = openFolderList[folder];
        const files = readContainingFiles(folder);

        if (!state.includes(newFolder)) {
          newFolders.push(new Folder({
            path: newFolder,
            name: null,
            files,
          }));
        }
      }

      return state.concat(new List(newFolders));
    }
    case ActionTypes.FOLDER_CLICKED: {
      let clickedFolder = action.payload.folder;
      const clickedIndex = action.payload.index;

      if (!clickedFolder.get('isListOpen')) {
        clickedFolder = clickedFolder.set(
          'files',
          readContainingFiles(clickedFolder.get('path')),
        );
      }

      return state.set(
        clickedIndex,
        clickedFolder.set(
          'isListOpen',
          !clickedFolder.get('isListOpen'),
        ),
      );
    }
    default:
      return state;
  }
}
