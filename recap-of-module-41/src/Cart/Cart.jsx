import './Cart.css'

import React from 'react';

const Cart = ({singleBottle, handleRemoveFromCart}) => {
  const { id, img}= singleBottle;
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <img width={`150px`} src={img} alt="" />
      <button onClick={()=>handleRemoveFromCart(id)}>Remove From Cart</button>
    </div>
  );
};

export default Cart;