import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import {AiFillDelete} from 'react-icons/ai'
import Dropdown from 'react-bootstrap/Dropdown';

export const Navbar = () => {
   
	const { store, actions } = useContext(Context);

    console.log(store.favourites)
	return (

	<div className="">
		<nav className="navbar navbar-light bg-light mb-3 p-3">
	
       
		<div className="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
	
        
        
     
	 



		</nav>
		</div>
	);
};


/*
		{store.favourites.map((fav, i)=>{

return(
<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
<li key={i} > {fav.name} </li>
<button className="btn btn-promary" onClick={ ()=> actions.removeFavourite(i)}></button>
</ul>

)}
)}





	const { store, actions } = useContext(Context);


	{store.favourites.map((favs, item) =>{

return(
		<Dropdown.Item key={item}> {favs.name} >
)
})}

		*/
