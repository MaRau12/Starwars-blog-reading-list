import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Planets = () => {

  const params = useParams();
  
  useEffect(() => {
  
   if (params.id) {
    actions.showPlanetInfo(params.id);
  }
}, [params.id]);     

 
 
    const {store, actions} = useContext(Context)
  
    return (
        <div className="container">
            <div className="row-cols-2">
             <h1> show something {params.id} </h1>          
                      <h1>{store.planetInfo.name}</h1>

                      <h1>{store.planetInfo.climate}</h1>
                
                        
                    
            </div>
            

         </div>   
        
    )

}
