import React, { useState, useEffect } from 'react';
import productService from './services/ProductService';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await productService.getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await productService.deleteProduct(id);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {products.length > 0 ? (
        <ul className="list-disc pl-6">
          {products.map(product => (
            <li key={product.id} className="mb-4 flex justify-between items-center">
              <span>{product.name} - ${product.price}</span>
              <div>
                <button onClick={() => handleEdit(product.id)} className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition mr-2">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
