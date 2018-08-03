import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BlogPostContainer from './BlogPostContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
	console.log("State : ", store.getState());
});
ReactDOM.render(<Provider store={store}><BlogPostContainer/></Provider>, document.getElementById('root'));
registerServiceWorker();
