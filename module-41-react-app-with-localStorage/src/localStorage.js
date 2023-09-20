
const getStoredCart = () => {
  const storedCartString = localStorage.getItem('cart');
  if(storedCartString){
    return JSON.parse(storedCartString);
  }
  return [];
}

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  //* save to Local Storage
  saveCartToLS(cart);
}

const removeFromLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter( idx => idx !== id )
  saveCartToLS(remaining);
  return remaining;
}

export {addToLS , getStoredCart , removeFromLS };