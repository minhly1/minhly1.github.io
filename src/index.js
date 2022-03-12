import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import rootReducer from './reducers/index.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(logger)) )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);