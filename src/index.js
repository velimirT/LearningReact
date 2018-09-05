import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import StoreFactory from './store/StoreFactory.js';
import PropTypes from 'prop-types';

const store = StoreFactory()
console.log(store);
window.React = React
window.store = store

render(
	<Provider store = {store}>
	    <App/>
    </Provider>,
	document.getElementById('root')
)
//registerServiceWorker();