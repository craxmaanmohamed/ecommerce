// src/components/Equipment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Product Equipment on store </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
