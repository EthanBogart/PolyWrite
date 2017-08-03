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

export function addFile(files) {
  return createAction(ActionTypes.ADD_FILE, {
    files,
  });
}

export function removeFile(file) {
  return createAction(ActionTypes.REMOVE_FILE, {
    file,
  });
}

export function changeSelectedFile(file) {
  return createAction(
    ActionTypes.CHANGE_SELECTED_FILE,
    file,
  );
}

export function folderClicked(folder, index) {
  return createAction(
    ActionTypes.FOLDER_CLICKED,
    {
      folder,
      index,
    },
  );
}
