import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({ cart, handleRemoveBottle }) => {
  // console.log(cart);
  return (
    <>
      <h3>Cart length : {cart.length}</h3>

      <div className='singleBottle'>
        {
          cart.map((singleBottle) =>
            <div key={singleBottle.id}>
              <img src={singleBottle.img} alt="" />
              <div>
                <button onClick={() => handleRemoveBottle(singleBottle.id)}>Remove</button>
              </div>            
            </div>
          )
        }
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveBottle: PropTypes.func.isRequired
}

export default Cart;