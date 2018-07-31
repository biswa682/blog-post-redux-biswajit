import React from 'react';
import { connect } from 'react-redux';

class BlogPostField extends React.Component{
	render(){	
		return(
			<div>
				<input id="inputBox" type="text" onChange={(event)=> this.props.getBlogHeader(event)}/>
				<textarea id="textareaBox" rows="5" cols="15" onChange={(event)=> this.props.getBlogDescription(event)}></textarea>
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
				type: "addItem"
			})
		},
		getBlogHeader: (event) =>{
			dispatch({
				type: "getBlogHeader",
				getBlogHeader: event.target.value
			})
		},
		getBlogDescription: (event) =>{
			dispatch({
				type: "getBlogDescription",
				getBlogDescription: event.target.value
			})	
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostField);