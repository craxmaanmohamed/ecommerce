// src/components/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../components/context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { getTotalAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Mock payment processing
    alert('Payment successful! Your items will be shipped shortly.');
    clearCart();
    navigate('/');
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleCheckout}>
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(shippingInfo).map((key) => (
            <div className="mb-4" key={key}>
              <label className="block text-gray-700 mb-2" htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type="text"
                id={key}
                name={key}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={shippingInfo[key]}
                onChange={handleShippingChange}
                required
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-2xl font-bold">Total: ${getTotalAmount().toFixed(2)}</h2>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
