import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import {AiFillDelete} from 'react-icons/ai'


export const Navbar = () => {

	const { store, actions } = useContext(Context);


	return (<div className="">
		<nav className="navbar navbar-light bg-light mb-3 ">
	
		<div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           Dropdown button
        </button>
		{store.favourites.map((fav, i)=>{

            return(
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li key={i} > {fav.name} </li>
		   <button className="btn btn-promary" onClick={ ()=> actions.removeFavourite(i)}></button>
         </ul>
		 
        )}
		)}
		</div>	
		
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
