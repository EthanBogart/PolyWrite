import { Record } from 'immutable';
import { AppState } from '../models/AppState';
import openFolders from './openFolders';

export default function root(state = new AppState(), action) {
  debugger;
  return Record({
    openFolders: openFolders(state.openFolders, action),
  });
}
