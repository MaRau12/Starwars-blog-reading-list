import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Characters = () => {

  const params = useParams();
  
  useEffect(() => {
  
   if (params.id) {
    actions.showCharacterInfo(params.id);
  }
}, [params.id]);     

 
 
    const {store, actions} = useContext(Context)
  
    return (
        <div className="container">
            <div className="row-cols-2">
             <h1> show something {params.id} </h1>          
                      <h1>{store.characterInfo.name}</h1>
                        
                    
            </div>
            

         </div>   
        
    )

}

