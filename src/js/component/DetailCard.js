import React from 'react';
import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";

function DetailCard(props) {
    const { actions, store } = useContext(Context);

    const handleFavouriteClick = () => {
      if (isFavourite) {
        actions.removeFavourite({ id: props.id, name: props.name, url: props.url})
      } else {
        actions.addFavourite({ id: props.id, name: props.name, url: props.url});
      }
    };

    return(
        <div > 
        
          <Card className='flex-row'>
            
            <Card.Img style={{ width: '24rem' }} className="card-img-left example-card-img-responsive" variant="top" src={`https://starwars-visualguide.com/assets/img/${props.url}/${props.id}.jpg`} />
            

           
             <Card.Body >
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            <div className='container m-3'>
           <div className='row'>
            the ID:
            {props.id}
            {props.description}
           </div>
           <div className='row'>
           Type:
            {props.gender}
            {props.climate}
            {props.model}
           </div>
           <div className='row'>
            Size:
            {props.height}
            {props.diameter}
            {props.length}
           </div>
           <div className='row'>
           </div>
            </div>
      
        </Card.Text>
        <Link to= {
                "/"
              }>
         <Button variant="secondary">Go Back</Button>
         
        </Link>
       
        <Button variant="outline-warning" onClick={() => handleFavouriteClick()} > 
        <AiOutlineHeart/>
         </Button>{' '}
      </Card.Body>
     
          </Card>
          </div>
    );

    
}
export default DetailCard