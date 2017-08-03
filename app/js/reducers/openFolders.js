'use es6';

import * as fs from 'fs';
import { List } from 'immutable';

import { File, Folder } from './../models/OpenFilesAndFolders';
import ActionTypes from './../actions/ActionTypes';

export default function openFolders(
  state = new List(),
  action,
) {
  switch (action.type) {
    case ActionTypes.ADD_FOLDER: {
      const newFolders = [];
      const openFolderList = action.payload.folders;
      let folder;

      for (folder in action.payload.folders) {
        const newFolder = openFolderList[folder];

        if (!state.includes(newFolder)) {
          try {
            const children = new List(fs.readdirSync(newFolder));
            // Filters out folders and hidden files
            const files = children.filter(
              (file) => {
                const path = [newFolder, file].join('/');

                return fs.statSync(path).isFile()
                  && !(/(^|\/)\.[^\/\.]/g).test(file);
              },
            ).map(file => new File({
              path: newFolder,
              name: file,
            }));

            newFolders.push(new Folder({
              path: newFolder,
              name: null,
              files,
            }));
          } catch (err) {
            break;
          }
        }
      }

      return state.concat(new List(newFolders));
    }
    case ActionTypes.FOLDER_CLICKED: {
      const clickedFolder = action.payload.folder;
      const clickedIndex = action.payload.index;

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
