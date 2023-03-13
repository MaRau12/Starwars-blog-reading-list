import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Cards from "./Card.js";

export const Characters = () => {
   // const params = useParams();
    const {store, actions} = useContext(Context)
    
//actions.showCharacterInfo(id)
     
   

    return (
        <div className="container">
            <div className="row-cols-2">
             <h1> show something </h1>          
                      
                        
                    
            </div>
            

         </div>   
        
    )

}

 
/*
    useEffect(() => {
      if (params.theid) {
        actions.showCharacterInfo(params.theid);
      }
    }, [params.theid]); 

    */