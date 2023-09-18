import './Cart.css'

const Cart = ({ cart }) => {
  return (
    <>
      <h3>Cart length : {cart.length}</h3>

      <div className='singleBottle'>
        {
          cart.map((singleBottle,id) => <img key={id} src={singleBottle.img} alt="" />)
        }
      </div>
    </>
  );
};

export default Cart;