'use es6';

import * as jsonfile from 'jsonfile';
import { remote } from 'electron';
import { isImmutable, List, Record } from 'immutable';

import createAction from './../actions/createAction';
import ActionTypes from './../actions/ActionTypes';
import { Folder, File } from './../models/OpenFilesAndFolders';
import AppState from './../models/AppState';

import safeSave from './safesave';

const dataPath = [remote.app.getPath('userData'), 'appState.json'].join('/');

const descriptiveNames = {
  File,
  Folder,
  AppState,
};

function WriteTypeException() {
  this.message = 'Could not convert to JSON. Use immutable or add unsupported type to persist.js file.';
  this.name = 'WriteTypeException';
}

function ReadTypeException() {
  this.message = 'Could not convert to correct state. Add unsupported type to persist.js file.';
  this.name = 'ReadTypeException';
}

function convertImmutableToJSON(immutableObject) {
  switch (true) {
    case immutableObject === null:
      return immutableObject;
    case typeof immutableObject === 'string':
      return immutableObject;
    case typeof immutableObject === 'boolean':
      return immutableObject;
    case Array.isArray(immutableObject):
      return immutableObject.map(element => convertImmutableToJSON(element));

    case isImmutable(immutableObject):
      switch (true) {
        case List.isList(immutableObject):
          return immutableObject
            .toArray()
            .map(element => convertImmutableToJSON(element));
        case Record.isRecord(immutableObject): {
          return stateToJson(immutableObject);
        }
        default:
          throw new WriteTypeException();
      }

    default:
      throw new WriteTypeException();
  }
}

function convertJSONToImmutable(object) {
  switch (true) {
    case object === null:
      return object;
    case typeof object === 'string':
      return object;
    case typeof object === 'boolean':
      return object;
    case Array.isArray(object):
      return new List(object.map(element => convertJSONToImmutable(element)));
    case typeof object === 'object':
      return toImmutable(object);
    default:
      throw new ReadTypeException();
  }
}

function toImmutable(data) {
  const newStateObj = { };
  let key;

  for (key in data) {
    newStateObj[key] = convertJSONToImmutable(data[key]);
  }

  return new descriptiveNames[data.recordType](newStateObj);
}

function stateToJson(newState) {
  const jsonState = newState.toJS();
  let key;

  for (key in jsonState) {
    jsonState[key] = convertImmutableToJSON(newState.get(key));
  }

  jsonState.recordType = Record.getDescriptiveName(newState);
  return jsonState;
}

export function saveState(newState) {
  try {
    safeSave(dataPath, stateToJson(newState));
  } catch (err) { console.log(err); }
}

export function loadState(dispatch) {
  jsonfile.readFile(dataPath, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!err) {
      dispatch(createAction(ActionTypes.REHYDRATE, toImmutable(data)));
    }
  });
}
