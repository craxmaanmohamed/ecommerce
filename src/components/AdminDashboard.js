// src/components/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', imageUrl: '' });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async () => {
    try {
      await axios.post('http://localhost:8080/api/products', newProduct);
      setNewProduct({ name: '', price: '', imageUrl: '' });
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`http://localhost:8080/api/products/${editProduct.id}`, editProduct);
      setEditProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Add Product</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={newProduct.imageUrl}
            onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
          />
        </div>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <ul className="list-disc pl-6">
          {products.map((product) => (
            <li key={product.id} className="mb-4 flex justify-between items-center">
              <span>
                {product.name} - ${product.price} 
                {product.imageUrl && (
                  <a href={product.imageUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500">
                    View Image
                  </a>
                )}
              </span>
              <div>
                <button
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition mr-2"
                  onClick={() => setEditProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {editProduct && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={editProduct.name}
              onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={editProduct.price}
              onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={editProduct.imageUrl}
              onChange={(e) => setEditProduct({ ...editProduct, imageUrl: e.target.value })}
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={handleUpdateProduct}
          >
            Update Product
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
