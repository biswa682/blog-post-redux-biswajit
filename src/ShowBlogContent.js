import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class ShowBlogContent extends React.Component{
	render(){
		let selectedBlog = 0;
		for(let item of this.props.state.blog){
			if(item._id === Number(this.props.match.params.id))
				selectedBlog = item
		}
		return(
			<div>
				<span>Blog</span>	
				<h2>{selectedBlog.blogHeader}</h2>
 				<h5>{selectedBlog.blogDescription}</h5>
 				<Link to={`/blogs/${this.props.match.params.id}/edit`}><button>Edit</button></Link>
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

