import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';

const finalCreateStore = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(rootReducer);

createRoot(document.getElementById('root')).render(<App store={store} />);