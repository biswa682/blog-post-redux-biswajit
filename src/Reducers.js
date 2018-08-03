const initialState = {
	blog: []
}
export default (state = initialState, action) =>{
	switch(action.type){
		case "addItem":
				const inputBox = document.getElementById("inputBox").value;
				const textareaBox = document.getElementById("textareaBox").value;
				const newBlog = {
					"_id": new Date().getTime(),
					"status": false,
					"blogHeader": inputBox,
					"blogDescription": textareaBox
				}
				fetch('/api/blogs', {
					method: 'POST',
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify(newBlog)
				});
				state = {
					...state,
					blog: [...state.blog].concat(newBlog)
				}
			break;
		case "deleteBlogs":
				fetch("/api/blogs"+"/"+action.eventId, {
					method: 'delete',
					headers: {'Content-Type':'application/json'}
				})
				let newElement = state.blog.filter(function(item){
					return item._id !== Number(action.eventId);
				});
				state = {
					...state,
					blog: newElement
				}
			break;
		case "getAllBlogs":
				state = {
					...state,
					blog: action.payload
				}
				// initialState.blog = action.payload
			break;
		case "editBlog":
				let getBlog = 0;
				for(let item of state.blog){
					if(item._id === Number(action.paramId))
						getBlog = item
				}
				const inputBox2 = document.getElementById("inputBox2").value;
				const textareaBox2 = document.getElementById("textareaBox2").value;
				const newBlog2 = {
					"_id": getBlog._id,
					"status": getBlog.status,
					"blogHeader": inputBox2,
					"blogDescription": textareaBox2
				}
				const pos = state.blog.findIndex(item=> item._id===Number(action.paramId))
				fetch("/api/blogs/"+action.paramId, {
					method: 'put',
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify(newBlog2)
				});
				state = {
					...state,
					blog: [...state.blog.slice(0,pos), newBlog2]
				}
			break;
		default:
			return state
	}
	return state;
}