
import React from 'react';
import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";



function Cards(props) {

  const { actions, store } = useContext(Context);
  const isFavourite = store.favourites.find(fav => fav.name === props.name);
  
  const handleFavouriteClick = () => {
    if (isFavourite) {
      actions.removeFavourite({ id: props.id, name: props.name, url: props.url})
    } else {
      actions.addFavourite({ id: props.id, name: props.name, url: props.url});
    }
  };
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/${props.url}/${props.id}.jpg`} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
       text
       {props.id}
        </Card.Text>
        <Link to= {{
                pathname: `/${props.url}/${props.id}`
              }}>
         <Button variant="primary">See more!</Button>
         
        </Link>
       
        <Button variant="outline-warning"  onClick={() => handleFavouriteClick()} > 
        <AiOutlineHeart/>
         </Button>{' '}
      </Card.Body>
    </Card>
 
  );
}

export default Cards;

/*

Cards(props, {item})

 const { actions, store } = useContext(Context);
   const ToggleFavouriteHandler = () => actions.favouriteHandler(item)     
    const isFavourite = store.favourites.find(el => el.name === item.name)


    onClick={() => favouriteHandler(item)}


    {isFavourite ? <AiFillHeart/> : <AiOutlineHeart/>}
*/