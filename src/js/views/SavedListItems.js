import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const SavedItems = (props) => {
    const { actions, store } = useContext(Context);
    return(
        <div className="col-4">
            <Link to= {{
                pathname: `/${props.url}/${props.id}`
              }}>
            <button className="btn btn-outline-success">{props.name}</button>
            </Link>
        </div>
    )

    
}