
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";



function Cards() {

  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://boldfonts.com/wp-content/uploads/2021/02/Star-Wars-Font.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
       
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/demo"> 
         <Button variant="primary">Go somewhere</Button>
         
        </Link>
       
        <Button variant="outline-warning"> <i className="fal fa-heart"></i> </Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default Cards;