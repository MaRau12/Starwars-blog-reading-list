import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Context } from "../store/appContext.js";
import {AiFillDelete} from 'react-icons/ai'


export const Navbar = () => {

	const { store, actions } = useContext(Context);

	

	return (<div className="">
		<nav className="navbar navbar-light bg-light mb-3 ">
	
			
				
					<DropdownButton id="dropdown-basic-button" title="Dropdown button" className="" >

						{store.favourites.map((fav, i)=>{

                         return(    
							 <Dropdown.Item key={i} >   <span>{fav.name} </span> 
							 <AiFillDelete onClick={ ()=> actions.removeFavourite(i)}></AiFillDelete>
							 </Dropdown.Item>   
							 )}
							 )}
				
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
