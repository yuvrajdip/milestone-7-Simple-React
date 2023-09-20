import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({ cart, handleRemoveBottle }) => {
  // console.log(cart);
  return (
    <>
      <h3>Cart length : {cart.length}</h3>
      <h3>Your Selected Bottles : </h3>
      <div className='singleBottle'>
        {
          cart.map((singleBottle) =>
            <div key={singleBottle.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <img src={singleBottle.img} alt="" />
              </div>

              <button style={{marginRight:'17%'}} onClick={() => handleRemoveBottle(singleBottle.id)}>Remove</button>
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