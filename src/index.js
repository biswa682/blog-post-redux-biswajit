import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import BlogPostContainer from './BlogPostContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const initialState = {
	todoList : [],
	getHeader: ""
}

const reducer = (state = initialState, action) =>{
	switch(action.type){
		case "addItem":
				let newBlog = {
					status: false,
					blogHeader: action.blogHeader,
					blogDescription: action.blogDescription
				}
				state = {
					...state,
					todoList: [...state.todoList].concat(newBlog)
				} 
			break;
		case "checkStatus":
			break;
		case "deleteItem":
			break;
		case "getHeader":
				state = {
					...state,
					getHeader: action.getHeader
				}
			break;
		default:
			state = this.state

	}
	return state;
}

const store = createStore(reducer)

store.subscribe(()=>{
	console.log("State : ", store.getState());
});

// store.dispatch({
// 	type: "addItem",
// 	blogHeader: "This is the header of the text",
// 	blogDescription: "This is the description for the text"
// })
// store.dispatch({
// 	type:"getHeader",
// 	getHeader: "a"
// })
// store.dispatch({
// 	type: "addItem",
// 	text: "This is a new item"
// })
// console.log(store.getState())
ReactDOM.render(<Provider store={store}><BlogPostContainer/></Provider>, document.getElementById('root'));
registerServiceWorker();
