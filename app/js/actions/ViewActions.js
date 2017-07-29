import ActionTypes from './ActionTypes';
import createAction from './createAction';

export default viewName => createAction(ActionTypes.SWITCH_VIEW, viewName);
