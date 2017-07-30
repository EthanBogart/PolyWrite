'use es6';

import * as fs from 'fs';
import { List } from 'immutable';

import ActionTypes from './../actions/ActionTypes';
import * as folderRecords from './../models/OpenFilesAndFolders';

export default function openFolders(
  state = new folderRecords.OpenFilesAndFolders(),
  action,
) {
  switch (action.type) {
    case ActionTypes.ADD_FOLDER: {
      const newFolders = [];
      const openFolderList = action.payload.folders;
      let folder;

      for (folder in action.payload.folders) {
        const newFolder = openFolderList[folder];

        if (!state.get('folders').includes(newFolder)) {
          try {
            const children = fs.readdirSync(newFolder);

            // Filters out folders and hidden files
            const files = children.filter(
              (path) => {
                return fs.statSync([newFolder, path].join('/')).isFile()
                  && !(/(^|\/)\.[^\/\.]/g).test(path);
              },
            ).map(path => [newFolder, path].join('/'));

            newFolders.push(new folderRecords.Folder({
              path: newFolder,
              files,
            }));
          } catch (err) {
            break;
          }
        }
      }

      return state.set(
        'folders',
        state.get('folders').concat(newFolders),
      );
    }
    case ActionTypes.ADD_FILE: {
      let newFiles = new List();
      const openFileList = action.payload.files;
      let folder;

      for (folder in action.payload.files) {
        const newFile = openFileList[folder]
        if (!state.get('files').includes(newFile)) {
          newFiles = newFiles.push(newFile);
        }
      }

      return state.set(
        'files',
        state.get('files').concat(newFiles),
      );
    }
    case ActionTypes.REMOVE_FILE: {
      const files = state.get('files');
      const fileIndex = files.indexOf(action.payload.file);

      return state.set(
        'files',
        files.delete(fileIndex),
      );
    }
    default:
      return state;
  }
}
