import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import {AiFillDelete} from 'react-icons/ai'
import Dropdown from 'react-bootstrap/Dropdown';

export const Navbar = () => {
   
	const { store, actions } = useContext(Context);

    console.log(store.favourites)
	const dropFavs = store.favourites
	return (

	<div className="">
		<nav className="navbar navbar-dark bg-dark mb-3 p-3">
	
       
		<div className="dropdown">
  <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Your Favorites
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
	{dropFavs.map((fav, index)=>{
		return(
		<div key={index}>
			       <Link to= {{
                pathname: `/${fav.url}/${fav.id}` }}><li>  {fav.name}</li>     </Link>
				
		</div>	
		)}
	)}
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




to= {{
                pathname: `/${props.url}/${props.id}`

		*/
