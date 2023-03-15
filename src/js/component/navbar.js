import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext.js";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	

	return (<div className="">
		<nav className="navbar navbar-light bg-light mb-3 ">
	
			{store.favourites.map((favs, item) =>{
				return(
					<DropdownButton id="dropdown-basic-button" title="Dropdown button" className="" >
				<Dropdown.Item key={item}> {favs.name} </Dropdown.Item>
				</DropdownButton>
				)
			})}

		

		
		</nav>
		</div>
	);
};
