import ActionTypes from '../actions/ActionTypes';

export default function selectedFile(file = null, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SELECTED_FILE:
      return action.payload;
    default:
      return file;
  }
}
