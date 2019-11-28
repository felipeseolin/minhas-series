import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';

import Router from './Router';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

const SeriesApp = prop => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default SeriesApp;
