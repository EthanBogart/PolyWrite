import ActionTypes from './../actions/ActionTypes';
import OpenFilesAndFolders from './../models/OpenFilesAndFolders';

export default function openFolders(state = new OpenFilesAndFolders(), action) {
  switch (action.type) {
    case ActionTypes.ADD_FOLDER: {
      const newFolders = [];
      const openFolderList = action.payload.folders;
      let folder;
      for (folder in action.payload.folders) {
        const newFolder = openFolderList[folder]
        if (!state.get('folders').includes(newFolder)) {
          newFolders.push(newFolder);
        }
      }
      return state.set('folders',
        state.get('folders').concat(newFolders),
      );
    }
    case ActionTypes.ADD_FILE: {
      const newFiles = [];
      const openFileList = action.payload.files;
      let folder;
      for (folder in action.payload.files) {
        const newFile = openFileList[folder]
        if (!state.get('files').includes(newFile)) {
          newFiles.push(newFile);
        }
      }
      return state.set('files',
        state.get('files').concat(newFiles),
      );
    }
    default:
      return state;
  }
}
