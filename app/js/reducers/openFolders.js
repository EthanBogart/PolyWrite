import ActionTypes from '../actions/ActionTypes';

export default function openFolders(folders = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_FOLDER:
      if (folders.indexOf(action.payload.folder) === -1) {
        return folders.concat(action.payload.folder);
      }
      return folders;
    default:
      return folders;
  }
}
