// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, getTotalAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-disc pl-6">
            {cart.map((item, index) => (
              <li key={index} className="mb-4">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Total: ${getTotalAmount()}</h2>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
