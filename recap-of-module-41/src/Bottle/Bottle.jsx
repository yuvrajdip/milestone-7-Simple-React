import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart }) => {
  
  const {id, name , price  ,img}= bottle;

  return (
    <div className='bottle'>
      <img width="200px" height={`200px`} src={img} alt="" />
      <h3>{name}</h3>
      <h3>Price: {price}$</h3>
      <button onClick={()=>handleAddToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Bottle;