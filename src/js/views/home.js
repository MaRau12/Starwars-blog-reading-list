import React, { useContext, useState, useEffect } from "react";
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

<div className="stawars">
   <img src={store.imgStar} alt="" id="star"></img>
   <h2 id="title">THE READING BLOG</h2>
   <img src={store.imgWars} alt="" id="wars"></img>

</div>

<h1 className="mx-3" >Characters</h1>
 <div className="row g-3">  
      {store.characters.map((char, index) =>{
         return(             
              <Cards key={index} name={char.name} id={char.uid} url={'characters'}
              />                
            )
      })}
        <Cards />
        
		   </div>
		 
		 <h1 className="mx-3" >Planets</h1>
       <div className=" row g-3"> 
       {store.planets.map((plan, i) =>{
         return(
             <Cards key={i} name={plan.name} id={plan.uid} url={"planets"} />
         )
       })}   
         
		  </div>

		<h1 className="mx-3" >Vehicles</h1>
       <div className=" row g-3">  

       {store.vehicles.map((vec, j) =>{
         return(
            <Cards key={j} name={vec.name} id={vec.uid} url={"vehicles"}/>
         )
       })}  
        
		 </div>
	     
  
<h1>Saved for later:</h1>

<div className="row mt-5 mb-5">
   {store.favourites.map((fav, i)=>{

return(
<SavedItems key={i} name={fav.name} id={fav.id} url={fav.url} ></SavedItems>
)}
)}

</div>
  

   </div>
	
)

}


