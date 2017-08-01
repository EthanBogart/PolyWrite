'use es6';

import { List } from 'immutable';

import { File } from './../models/OpenFilesAndFolders';
import ActionTypes from './../actions/ActionTypes';

export default function openFiles(
  state = new List(),
  action,
) {
  switch (action.type) {
    case ActionTypes.ADD_FILE: {
      let newFiles = new List();
      const openFileList = action.payload.files;
      let file;

      for (file in action.payload.files) {
        const newFile = openFileList[file]
        if (!state.includes(newFile)) {
          newFiles = newFiles.push(new File({
            name: newFile,
          }));
        }
      }

      return state.concat(newFiles);
    }
    case ActionTypes.REMOVE_FILE: {
      const fileIndex = state.indexOf(action.payload.file);

      return state.delete(fileIndex);
    }
    default:
      return state;
  }
}
