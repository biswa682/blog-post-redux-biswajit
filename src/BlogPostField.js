import React from 'react';
import { connect } from 'react-redux';

class BlogPostField extends React.Component{
	render(){	
	const getBlogHeader = (event) =>{
		console.log(event.target.value)
		return event.target.value;
	}
	// const getBlogDescription = (event) =>{
	// 	return event.target.value;
	// }
		return(
			<div>
				<input type="text" onChange={(event)=> getBlogHeader(event)}/>
				<textarea rows="5" cols="15"></textarea>
				<button onClick={()=>this.props.addItem()}>Submit</button>
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
		addItem: ()=>{
			dispatch({
				type: "addItem",
				blogHeader: "blogHeader",
				blogDescription: "blogDescription"
			})
			console.log("addItem")
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostField);