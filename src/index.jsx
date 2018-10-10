import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import App from './components/App';
import combinedReducers from './reducers/index';

const store = createStore(combinedReducers, applyMiddleware(createLogger()));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
