// src/Image.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


import Description from './Description';
import Price from './Price';
import Name from './Name';


function Prod({ Src, name, price, Desc }) {
  return (
    <div className='hover:scale-105'>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title><Name name={name} /></Card.Title>
          <Card.Text><Price price={price} /></Card.Text>
          <Card.Text><Description description={Desc} /></Card.Text>
          <img src={Src} alt='product' width='250' height='300' />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Prod;