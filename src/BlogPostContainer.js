import React, {Component} from 'react';
import { connect } from 'react-redux';
import BlogPostField from './BlogPostField';
import ShowListOfBlog from './ShowListOfBlog'
import { BrowserRouter, Route} from 'react-router-dom';
import Navigator from "./Navigator";
import ShowBlogContent from "./ShowBlogContent"
class BlogPostContainer extends Component{
	render(){		
		return(
			<div>
				<BrowserRouter>
					<div>
					  <Navigator/>
			          <div>
				          <Route path="/" component={BlogPostField} exact={true}/>
				          <Route path="/blogs" component={ShowListOfBlog}/>
				          <Route path="/blogs/:id" component={ShowBlogContent}/>
			          </div>
					</div>
		        </BrowserRouter>
			</div>	
			)
	}
}
export default connect()(BlogPostContainer);
