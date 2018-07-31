import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import BlogPostContainer from './BlogPostContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const initialState = {
	_id: new Date().getTime(),
	todoList : [],
	getBlogHeader: "",
	getBlogDescription: ""
}


const reducer = (state = initialState, action) =>{
	switch(action.type){
		case "addItem":
				let newBlog = {
					_id: new Date().getTime(),
					status: false,
					blogHeader: state.getBlogHeader,
					blogDescription: state.getBlogDescription
				}
				state = {
					...state,
					todoList: [...state.todoList].concat(newBlog),
					getBlogHeader: "",
					getBlogDescription: ""
				}
				document.getElementById("inputBox").value = "";
				document.getElementById("textareaBox").value = "";
			break;
		case "checkStatus":
			break;
		case "getBlogHeader":
				state = {
					...state,
					getBlogHeader: action.getBlogHeader
				}
			break;
		case "getBlogDescription":
				state = {
					...state,
					getBlogDescription: action.getBlogDescription
				}
			break;
		case "deleteBlogs":
				let newElement = state.todoList.filter(function(item){
					return item._id !== Number(action.eventId);
				});
				state = {
					...state,
					todoList: newElement
				}
			break;
		default:
			return state
	}
	return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=>{
// 	console.log("State : ", store.getState());
// });
ReactDOM.render(<Provider store={store}><BlogPostContainer/></Provider>, document.getElementById('root'));
registerServiceWorker();
