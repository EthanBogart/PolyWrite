import ActionTypes from '../actions/ActionTypes';

export default function selectedFile(file = null, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SELECTED_FILE:
      return action.payload;
    case ActionTypes.REMOVE_FILE:
      if (file === action.payload.file) {
        return null;
      }
      return file;
    default:
      return file;
  }
}
