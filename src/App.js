import React from 'react';
import Prod from './Prod';
import 'bootstrap/dist/css/bootstrap.min.css';

import product from './Product';



function App() {

  return (
    <div className="flex items-center transition-transform duration-300 justify-around object-cover font-bold">
      <Prod Src={product.image} name={product.name} price={product.price} Desc={product.description} />
      <Prod Src={'Chemise.jpeg' } name={'Chemise '} price={20} Desc={'Une chemise blanche élégante en tissu léger, idéale pour les occasions formelles.'}/>
    </div>
    
  );      
}     



export default App;