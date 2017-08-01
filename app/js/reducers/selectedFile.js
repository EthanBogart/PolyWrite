import ActionTypes from '../actions/ActionTypes';

export default function selectedFile(file = null, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SELECTED_FILE: {
      if (file === null) {
        return action.payload;
      }

      const name = file.get('name');
      const selected = action.payload.get('name');

      if (name === selected) {
        return null;
      }
      return action.payload;
    }
    case ActionTypes.REMOVE_FILE: {
      if (file === null) {
        return file;
      }
      
      const name = file.get('name');
      const selected = action.payload.get('name');

      if (name === selected) {
        return null;
      }
      return file;
    }
    default:
      return file;
  }
}
