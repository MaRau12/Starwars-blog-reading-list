import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Cards from "./Card.js";

export const Characters = () => {
    const {store, actions} = useContext(Context)
    actions.showCharacterInfo(id);

    return (
        <div className="container">
            <div className="row-cols-2">
             <h1> {char.name}{char.uid} </h1>          
                      
                        
                    
            </div>
            

         </div>   
        
    )

}