import React from "react";
import { Card } from "react-bootstrap";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cards from "./Card.js";
import { Context } from "../store/appContext.js";
import { Characters } from "./Characters.js";


export const Home = () => (
	
		
	<> 
         <div className="container" >
              <h1 className="mx-3" >Characters</h1>
           <div className=" row">    
         <Cards/>
     <Characters/>
		    </div>
		     
		    <h1 className="mx-3" >Planets</h1>
           <div className=" row">    
         <Cards/>
		    </div>

		    <h1 className="mx-3" >Vehicles</h1>
           <div className=" row">    
         <Cards/>
		    </div>
	          </div>
 </>


	



	

);