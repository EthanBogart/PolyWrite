import { Record } from 'immutable';
import AppState from '../models/AppState';
import openFolders from './openFolders';

export default function root(state = AppState(), action) {
  return new AppState({
    openFolders: openFolders(state.openFolders, action),
  });
}
