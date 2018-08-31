import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import StoreFactory from './store/StoreFactory.js';

const store = StoreFactory();

const render = () => 
	ReactDOM.render(
		<App store = {store}/>, 
		document.getElementById('root')
	);
	
//registerServiceWorker();
store.subscribe(render);
render();