// src/Price.js
import React from 'react';

function Price({ price }) {
  return <p>Prix : ${price.toFixed(2)}</p>;
}

export default Price;
