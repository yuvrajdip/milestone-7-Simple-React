import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';

const Bottles = () => {

  const [bottles, setBottles] = useState([]);
  // console.log(bottles);
  const [cart, setCart] =useState([]);

  useEffect(() => {
    fetch('../../../public/bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data))
  }, [])

  const handleAddToCart = (bottle) => {
    console.log(`bottle going to be added`,bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  }

  return (
    <div>
      <h2>Bottles Available : {bottles.length}</h2>
      <h3>Cart Length : {cart.length}</h3>

      <div className="bottles-container">
        {
          bottles.map(bottle =>
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            ></Bottle>
          )
        }
      </div>
    </div>
  );
};

export default Bottles;