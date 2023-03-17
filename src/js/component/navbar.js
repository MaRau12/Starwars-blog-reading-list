import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext.js";

export const Navbar = () => {



	

	return (<div className="">
		<nav className="navbar navbar-light bg-light mb-3 ">
	
			
				
					<DropdownButton id="dropdown-basic-button" title="Dropdown button" className="" >
				<Dropdown.Item > This item </Dropdown.Item>
				</DropdownButton>
				
			

		

		
		</nav>
		</div>
	);
};


/*

	const { store, actions } = useContext(Context);


	{store.favourites.map((favs, item) =>{

return(
		<Dropdown.Item key={item}> {favs.name} >
)
})}

		*/
