import ActionTypes from '../actions/ActionTypes';

export default function openFolders(folders = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_FOLDER: {
      const newFolders = [];
      const openFolderList = action.payload.folders;
      let folder;
      for (folder in action.payload.folders) {
        const newFolder = openFolderList[folder]
        if (!folders.includes(newFolder)) {
          newFolders.push(newFolder);
        }
      }
      return folders.concat(newFolders);
    }
    default:
      return folders;
  }
}
