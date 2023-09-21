import { useState } from 'react';
import './Bottles.css'

import React from 'react';
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLS, getStoredCartFromLS, removeFromLS } from '../../localStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
  const [bottles, setBottles] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('bottles.json') //* FETCHING DATA FROM PUBLIC FOLDER
      .then(res => res.json())
      .then(data => setBottles(data))
  }, [])

  useEffect(() => {
    if (bottles.length > 0) {
      const storedCartIds = getStoredCartFromLS() //* FETCHING DATA FROM LOCAL STORAGE WITH DEPENDENCY OF bottles DATA

      const willBeDisplayedBottles = [];
      if (storedCartIds) {
        for (const id of storedCartIds) {
          const x = bottles.find(singleBottle => singleBottle.id === id);
          if (x) {
            willBeDisplayedBottles.push(x);
          }
        }
        setCart(willBeDisplayedBottles);
      }
    }
  }, [bottles])

  const handleAddToCart = (id) => {
    // console.log('add to cart button clicked', id);
    const newCart = [...cart, id];
    setCart(newCart);

    addToLS(id);
  }

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter(singleBottle=> singleBottle.id !== id );
    setCart(remainingCart);
    removeFromLS(id);
  }

  return (
    <div>
      <div style={{textAlign:'center',margin:'2rem'}}>
        <h2>{bottles.length} Bottles</h2>
        <h2>Selected Bottles : {cart.length}</h2>

        {/* Cart */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' , justifyContent:'center'}}>
          {
            cart.map(singleBottle =>
              <Cart
                key={singleBottle.id}
                singleBottle={singleBottle}
                handleRemoveFromCart={handleRemoveFromCart}
              >
              </Cart>
            )
          }
        </div>
      </div>
      
      {/* Bottles */}
      <div className="bottles">
        {
          bottles.map(bottle =>
            <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>
          )
        }
      </div>
    </div>
  );
};

export default Bottles;