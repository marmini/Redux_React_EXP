import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger'
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
