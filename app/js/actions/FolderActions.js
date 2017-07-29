import ActionTypes from './ActionTypes';
import createAction from './createAction';

export function addFolder(folders) {
  return createAction(ActionTypes.ADD_FOLDER, {
    folders,
  });
}

export function removeFolder(folders) {
  return createAction(ActionTypes.REMOVE_FOLDER, {
    folders,
  });
}
