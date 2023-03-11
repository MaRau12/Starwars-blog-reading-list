import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import "../../styles/home.css";

import Cards from "./Card.js";

import { Context } from "../store/appContext.js";
import { Characters } from "./Characters.js";


export const Home = () => {

   const { store, actions } = useContext(Context);

   return(
	<div className="container">

<h1 className="mx-3" >Characters</h1>
 <div className="row">  
      {store.characters.map((char, index) =>{
         return(             
              <Cards key={index} name={char.name} id={char.uid} />                
            )
      })}
        <Cards />
        
		   </div>
		 
		 <h1 className="mx-3" >Planets</h1>
       <div className=" row"> 
       {store.planets.map((plan, i) =>{
         return(
             <Cards key={i} name={plan.name} id={plan.uid}/>
         )
       })}   
         
		  </div>

		<h1 className="mx-3" >Vehicles</h1>
       <div className=" row">  

       {store.vehicles.map((vec, j) =>{
         return(
            <Cards key={j} name={vec.name} id={vec.uid}/>
         )
       })}  
        
		 </div>
	   

   </div>

   


	



	

)


}




/*{store.characters.map((char) =>{
   return(             
        <Cards key={char.uid} name={char.name} />                
      )
})}



*/