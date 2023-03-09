import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
    const {store, actions} = useContext(Context)
    const params = useParams();

    return (
        <>
            info
            charactername: {/*store.characters*/}

            {store.characters.map((char) =>{
                return(
                    <p>
                        {char.name}
                    </p>
                )
            })}

            
        </>
    )

}