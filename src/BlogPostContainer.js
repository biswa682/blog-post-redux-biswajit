import React, {Component} from 'react';
import { connect } from 'react-redux';
import BlogPostField from './BlogPostField';
// const getBlogHeader = (event) =>{
// 	return event.target.value;
// }
// const getBlogDescription = (event) =>{
// 	return event.target.value;
// }

class BlogPostContainer extends Component{
	
	render(){
		
		return(
			<div>
				<BlogPostField/>
			</div>	
			)
	}
}



export default connect()(BlogPostContainer);
// export default BlogPostContainer;

// <BlogPostField/>