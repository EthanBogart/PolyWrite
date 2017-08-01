'use es6';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './js/App';
import configureStore from './configureStore';

import { loadState } from './js/utils/persist';

const store = configureStore();
loadState(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
