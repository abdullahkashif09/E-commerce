import React, { createContext, useState } from 'react';
import all_product from '../components/Assets/all_product';

// Create the context
export const ShopContext = createContext(null);

// Initialize the default cart state based on the length of all_product array
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) { // No need for `+1`
    cart[index] = 0; // Initialize all product quantities to 0
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(CartItems); // Optional: Log to check
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 0) {
        return { ...prev, [itemId]: prev[itemId] - 1 }; // Decrease quantity
      }
      return prev; // Don't go below 0
    });
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * CartItems[item]; // Calculate total
      }
    }
    return totalAmount; // Return after the loop
  }
  const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in CartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem+= cartItems[item]
      }
      return totalItem
    }
  }
  const contextValue = {
    getTotalCartItems,
    all_product,
    CartItems,
    addToCart,
    removeFromCart, // Corrected casing for the remove function
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// Export the context provider
export default ShopContextProvider;
