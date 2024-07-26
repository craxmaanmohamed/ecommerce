// src/components/Products.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';

const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const ProductService = {
  getAllProducts,
};

export default ProductService;



// // src/services/productService.js
// import axiosInstance from '../api/axiosConfig';

// const getAllProducts = async () => {
//   const response = await axiosInstance.get('/products');
//   return response.data;
// };

// const getProductById = async (id) => {
//   const response = await axiosInstance.get(`/products/${id}`);
//   return response.data;
// };

// const createProduct = async (product) => {
//   const response = await axiosInstance.post('/products', product);
//   return response.data;
// };

// const updateProduct = async (id, product) => {
//   const response = await axiosInstance.put(`/products/${id}`, product);
//   return response.data;
// };

// const deleteProduct = async (id) => {
//   const response = await axiosInstance.delete(`/products/${id}`);
//   return response.data;
// };

// export default {
//   getAllProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// };
