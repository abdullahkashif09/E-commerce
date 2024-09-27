import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, CartItems, removeFromCart } = useContext(ShopContext); // Ensure variable name matches

  return (
    <div className='CartItems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((e) => {
          if (CartItems[e.id] > 0) { // Changed cartitems to CartItems
            return (
              <div key={e.id}>
                <div className='cartitems-format'>
                  <img src={e.image} alt={e.title} /> {/* Product image */}
                  <p>{e.title}</p> {/* Product title */}
                  <p>${e.new_price}</p> {/* Product price */}
                  <button className='cartitems-quantity'>{CartItems[e.id]}</button> {/* Product quantity */}
                  <p>{e.new_price * CartItems[e.id]}</p> {/* Total price */}
                  <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove item" /> {/* Remove from cart */}
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className='cartitem-down'>
          <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
              <div className='cartitems-total-item'>
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p> {/* Called getTotalCartAmount as a function */}
              </div>
              <hr />
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3> {/* Dynamically reflect the total amount */}
              </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className='cartitems-promocode'>
            <p>If you have a promo code, enter it here:</p>
            <div className='cartitems-promobox'>
              <input type="text" placeholder='Enter a Promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
