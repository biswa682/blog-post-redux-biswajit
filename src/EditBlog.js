import React from 'react';
import { connect } from 'react-redux';

class EditBlog extends React.Component{
	componentDidMount(){
		const parameter = Number(this.props.match.params.id)
		let newElement = this.props.state.blog.filter(function(item){
			if(item._id === parameter)
				return item
		});
		console.log(newElement[0].blogHeader)
		console.log(newElement[0].blogDescription)
		document.getElementById("inputBox2").value = newElement[0].blogHeader;
		document.getElementById("textareaBox2").value = newElement[0].blogDescription;
	}
	render(){
		return(
			<div>
				<input id="inputBox2" type="text"/>
				<textarea id="textareaBox2" rows="5" cols="15" ></textarea>
				<button  onClick={(newId) => this.props.editBlog(this)}>Submit</button>
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
		editBlog: (thisId) =>{
			dispatch({
				type: "editBlog",
				paramId: thisId.props.match.params.id
			})
		}
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(EditBlog);
