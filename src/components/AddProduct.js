import React, { useState } from 'react';
import productService from './services/ProductService';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await productService.addProduct({ name, price });
      navigate('/admin/products');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
