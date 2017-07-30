import ActionTypes from './ActionTypes';
import createAction from './createAction';

export default selectedFile => createAction(
  ActionTypes.CHANGE_SELECTED_FILE,
  selectedFile,
);
