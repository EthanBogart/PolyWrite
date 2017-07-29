import ActionTypes from '../actions/ActionTypes';
import views from './../constants/view';

export default function viewName(name = views.FOLDERS_VIEW, action) {
  switch (action.type) {
    case ActionTypes.SWITCH_VIEW:
      return action.payload;
    default:
      return name;
  }
}
