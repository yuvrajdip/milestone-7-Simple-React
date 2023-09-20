import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoredCart, removeFromLS } from "../../localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

  const [bottles, setBottles] = useState([]);
  // console.log(bottles);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('../../../public/bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data))
  }, [])


  //* load saved Cart items from localStorage
  useEffect(() => {
    // console.log(`Called the useEffect from Bottles, ${bottles.length}`);
    
    //* Load the Bottles from localStorage and load it only when bottles length previously stored  
    if (bottles.length > 0) {
      const storedCart = getStoredCart(); //* load saved bottles from localStorage 
      // console.log(storedCart);

      const willBeDisplayedBottles = []
      for(const id of storedCart){
        const bottle = bottles.find( bottle => id === bottle.id )
        if(bottle){
          willBeDisplayedBottles.push(bottle)
        }
      }

      console.log(`will be displayed bottles from localStorage`,willBeDisplayedBottles);
      
      setCart(willBeDisplayedBottles);  //* setting cart after fetching data from localStorage
      
    }
  }, [bottles]);


  const handleAddToCart = (bottle) => {
    console.log(`bottle going to be added`, bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);

    //* storing bottles with id in LocalStorage
    addToLS(bottle.id);
  }

  const handleRemoveBottle = (id) => {
    console.log(`remove bottle clicked ${id}`);

    const remainingCart = cart.filter( bottle => bottle.id !== id )
    setCart(remainingCart);
    removeFromLS(id);
  }


  return (
    <div>
      <h2>Bottles Available : {bottles.length}</h2>
      <Cart cart={cart} handleRemoveBottle={handleRemoveBottle}></Cart>

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