// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productService from './services/ProductService';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      productService.getProductById(id).then(productData => {
        setProduct(productData);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await productService.updateProduct(id, product);
    } else {
      await productService.createProduct(product);
    }
    navigate('/admin');
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">{id ? 'Edit Product' : 'Add Product'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={product.description}
            onChange={handleChange}
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
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={product.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
