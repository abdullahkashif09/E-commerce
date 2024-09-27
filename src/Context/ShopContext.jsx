import React, { createContext, useState } from 'react';
import all_product from '../components/Assets/all_product';

// Create the context
export const ShopContext = createContext(null);

// Initialize the default cart state based on the length of all_product array
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0; // Initialize all product quantities to 0
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // Optional: Use useEffect to log CartItems after it updates.
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 0) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * CartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        totalItem += CartItems[item];
      }
    }
    return totalItem; // Moved return outside the loop
  };

  const contextValue = {
    getTotalCartItems,
    all_product,
    CartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount, // Include this in the context so it's accessible
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// Export the context provider
export default ShopContextProvider;
