// src/components/ProductDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from './context/ProductsContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductsContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto my-8">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/2 h-auto object-cover" />
        <div className="ml-8">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-700 my-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
