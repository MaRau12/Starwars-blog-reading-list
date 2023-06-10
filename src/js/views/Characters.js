import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import DetailCard from "../component/DetailCard.js";

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
          <DetailCard name={store.characterInfo.name} id={params.id} description={store.characterInfo.description} gender={store.characterInfo.gender} height={store.characterInfo.height} birth_year={store.characterInfo.birth_year} url={'characters'} />
         </div>   
        
    )

}

