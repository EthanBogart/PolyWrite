import ActionTypes from './ActionTypes';
import createAction from './createAction';

export function addFolder(folder) {
  return createAction(ActionTypes.ADD_FOLDER, {
    folder,
  });
}

export function removeFolder(folder) {
  return createAction(ActionTypes.REMOVE_FOLDER, {
    folder,
  });
}
