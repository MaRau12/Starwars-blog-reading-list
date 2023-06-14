import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import DetailCard from "../component/DetailCard.js";

export const Vehicles = () => {

  const params = useParams();
  
  useEffect(() => {
  
   if (params.id) {
    actions.showVehicleInfo(params.id);
  }
}, [params.id]);     

 
 
    const {store, actions} = useContext(Context)
  
    return (
        <div className="container">
            <DetailCard name={store.vehicleInfo.name} id={store.vehicleInfo.id} model={store.vehicleInfo.model} length={store.vehicleInfo.length} url={'vehicles'} ></DetailCard>
            

         </div>   
        
    )

}
