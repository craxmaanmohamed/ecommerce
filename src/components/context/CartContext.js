// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
