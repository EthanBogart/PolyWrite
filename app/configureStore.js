import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './js/reducers/root';
import AppState from './js/models/AppState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    new AppState(),
    composeEnhancers(
      applyMiddleware(
        thunk,
      ),
    ),
  );
}
