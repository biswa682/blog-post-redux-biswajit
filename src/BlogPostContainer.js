import React, {Component} from 'react';
import { connect } from 'react-redux';
import BlogPostField from './BlogPostField';
import ShowListOfBlog from './ShowListOfBlog'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigator from "./Navigator";
import ShowBlogContent from "./ShowBlogContent"
import EditBlog from "./EditBlog"
import ErrorPage from "./ErrorPage";
class BlogPostContainer extends Component{
	
	render(){
		return(
			<div>
				<BrowserRouter>
					<div>
					 <Navigator/>
			          <Switch>		          
				          <Route path="/blogs/:id/edit" component={EditBlog}/>
				          <Route path="/blogs/:id" component={ShowBlogContent}/>
						  <Route path="/blogs" component={BlogPostField}/>BlogPostField
 				          <Route path="/" component={ShowListOfBlog} exact={true}/>
 				          <Route component={ErrorPage}/>				          
			          </Switch>
					</div>
		        </BrowserRouter>
			</div>	
			)
	}
}
export default connect()(BlogPostContainer);
 // 