
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";



function Cards(props) {
                    
  return (

   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://boldfonts.com/wp-content/uploads/2021/02/Star-Wars-Font.jpg" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
       text
       {props.id}
        </Card.Text>
        <Link to= {{
                pathname: `/${props.url}/${props.id}`
              }}>
         <Button variant="primary">Go somewhere</Button>
         
        </Link>
       
        <Button variant="outline-warning"> <i className="fal fa-heart"></i> </Button>{' '}
      </Card.Body>
    </Card>
 
  );
}

export default Cards;