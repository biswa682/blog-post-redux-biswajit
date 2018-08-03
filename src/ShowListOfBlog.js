import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ShowListOfBlog extends React.Component{ 
	componentDidMount(){
		this.props.getAllBlogs()
	}
	render(){
		const listItems = this.props.state.blog.map((item)=>{
			return(
				<li key={item._id} id={item._id}><input type="checkbox"/>
					<Link to={`/blogs/${item._id}`}>{item.blogHeader}</Link>
				<button onClick={(event) => this.props.deleteList(event)} >X</button></li>
				)			
		});
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
		},
		getAllBlogs: () =>{
			fetch('/api/blogs/').then(res => res.json())
			.then(data =>{
				dispatch({
					type: "getAllBlogs",
					payload: data
				})}
			);
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowListOfBlog);