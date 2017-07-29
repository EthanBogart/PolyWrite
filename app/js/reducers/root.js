import AppState from '../models/AppState';
import openFolders from './openFolders';
import viewName from './viewName';

export default function root(state = AppState(), action) {
  return new AppState({
    openFolders: openFolders(state.openFolders, action),
    viewName: viewName(state.viewName, action),
  });
}
