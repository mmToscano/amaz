import React, { createContext, useState } from 'react';

const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productData) => {
    setCart([...cart, productData]);
  };

  function removeAllFromCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider};