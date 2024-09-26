import React, { createContext, useState } from 'react';
import all_product from '../components/Assets/all_product';

// Create the context
export const ShopContext = createContext(null);

// Initialize the default cart state based on the length of all_product array
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0; // Initialize all product quantities to 0
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());
  

  const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
  const RemoveFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }

  const contextValue = { all_product,CartItems,addToCart,RemoveFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// Export the context provider
export default ShopContextProvider;
