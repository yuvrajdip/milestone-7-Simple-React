
const getStoredCartFromLS = ()=> {
  const cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(cart);
  }
  return [];
}

const saveCartToLS = (cart) => {
  const Cart = JSON.stringify(cart)
  localStorage.setItem('cart', Cart)
}

const addToLS = (id) => {
  const cart = getStoredCartFromLS();
  cart.push(id);
  saveCartToLS(cart);
}

const removeFromLS = (id) => {
  const cart = getStoredCartFromLS();
  const remaining = cart.filter( idx=> idx!==id );
  saveCartToLS(remaining);
}

export {addToLS, getStoredCartFromLS , removeFromLS}