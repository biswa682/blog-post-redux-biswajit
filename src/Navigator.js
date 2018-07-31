import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigator = ()=>{
	return(
		<div>
			<NavLink to="/">Home</NavLink><br/>
			<NavLink to="/blogs">List of blogs</NavLink>
		</div>
		)
}

export default Navigator