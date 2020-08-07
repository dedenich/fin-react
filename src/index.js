import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';

import {reducer, initialState} from './reducer.js';
import {REDUX_STORE} from './const.js';

const store = createStore(
    reducer,
    ((localStorage[REDUX_STORE]) ? JSON.parse(localStorage[REDUX_STORE]) : initialState),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.subscribe(() => {
  localStorage[REDUX_STORE] = JSON.stringify(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
