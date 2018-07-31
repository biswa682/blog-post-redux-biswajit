import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ShowListOfBlog extends React.Component{ 
	render(){

		const listItems = this.props.state.todoList.map((item)=>{
			return(
				<li key={item._id} id={item._id}><input type="checkbox"/>
					<Link to={`/blogs/${item._id}`}>{item.blogHeader}</Link>
				<button onClick={(event) => this.props.deleteList(event)} >X</button></li>
				)			
		});
		console.log(listItems)
		return(
			<div>
				{listItems}
			</div>
			)
	}
}
const mapStateToProps =(state) => {
	return{
		state: state
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		deleteList: (event) =>{
			dispatch({
				type: "deleteBlogs",
				eventId: event.target.parentNode.id
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowListOfBlog);