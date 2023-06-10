import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import "../../styles/home.css";

import Cards from "../component/Card.js";
import { SavedItems } from "./SavedListItems.js";

import { Context } from "../store/appContext.js";
import { Characters } from "./Characters.js";
import { Link } from "react-router-dom";


export const Home = () => {

   const { store, actions } = useContext(Context);

   return(
	<div className="container">


<h1 className="mx-3" >Characters</h1>
 <div className="row">  
      {store.characters.map((char, index) =>{
         return(             
              <Cards key={index} name={char.name} id={char.uid} url={'characters'}
              />                
            )
      })}
        <Cards />
        
		   </div>
		 
		 <h1 className="mx-3" >Planets</h1>
       <div className=" row"> 
       {store.planets.map((plan, i) =>{
         return(
             <Cards key={i} name={plan.name} id={plan.uid} url={"planets"}/>
         )
       })}   
         
		  </div>

		<h1 className="mx-3" >Vehicles</h1>
       <div className=" row">  

       {store.vehicles.map((vec, j) =>{
         return(
            <Cards key={j} name={vec.name} id={vec.uid} url={"vehicles"}/>
         )
       })}  
        
		 </div>
	     
  
<h1>Saved for later:</h1>

<div className="row">
   {store.favourites.map((fav, i)=>{

return(
<SavedItems key={i} name={fav.name} id={fav.uid} ></SavedItems>
)}
)}

</div>
  

   </div>

   


	



	

)


}




/*{store.characters.map((char) =>{
   return(             
        <Cards key={char.uid} name={char.name} />                
      )
})}



xxxxxx
   <h1 className="mx-3" >Saved</h1>
       <div className=" row">  

       {store.favorites.map((fav, i) =>{
         return(
            <Cards key={i} name={fav.name} id={fav.uid}/>
         )
       })}  
        
 

		 </div>

xxxxxxxxxxxxxx
*/