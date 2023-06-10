import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import DetailCard from "../component/DetailCard.js";

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
          <DetailCard name={store.planetInfo.name} id={params.id} description={store.planetInfo.description} climate={store.planetInfo.climate} diameter={store.planetInfo.diameter} url={'planets'} />
         </div>   
        
    )

}