import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import StoreFactory from './store/index.js';

const store = StoreFactory();
store.dispatch({type:'CHOOSE_PLACE', id:3});
store.dispatch({type:'CHOOSE_FLOWER', id:1});

const render = () => 
	ReactDOM.render(
		<App store = {store}/>, 
		document.getElementById('root')
	);
	
//registerServiceWorker();
store.subscribe(render);
render();