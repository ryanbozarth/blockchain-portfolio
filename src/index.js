import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware( promise
)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
