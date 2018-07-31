import React from 'react';
import { connect } from 'react-redux'
class ShowBlogContent extends React.Component{
	render(){
		let selectedBlog = 0;
		for(let item of this.props.state.todoList){
			if(item._id === Number(this.props.match.params.id))
				selectedBlog = item
		}
		console.log(selectedBlog)
		return(
			<div>
				<span>Blog</span>	
				<h2>{selectedBlog.blogHeader}</h2>
 				<h5>{selectedBlog.blogDescription}</h5>
			</div>
			)
	}
}
const mapStateToProps =(state) => {
	return{
		state: state
	}
}
export default connect(mapStateToProps)(ShowBlogContent)

// <h2>{selectedBlog[0].blogHeader}</h2>
// 				<h5>{selectedBlog[0].blogDescription}</h5>