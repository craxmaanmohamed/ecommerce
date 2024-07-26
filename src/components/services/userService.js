// src/services/userService.js
import axiosInstance from '../api/axiosConfig';

const getAllUsers = async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
};

const getUserById = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

export default {
  getAllUsers,
  getUserById,
};

// // src/services/userService.js
// import axiosInstance from '../api/axiosConfig';

// const getUsers = async () => {
//   const response = await axiosInstance.get('/users');
//   return response.data;
// };

// const createUser = async (user) => {
//   const response = await axiosInstance.post('/users', user);
//   return response.data;
// };

// const updateUser = async (id, user) => {
//   const response = await axiosInstance.put(`/users/${id}`, user);
//   return response.data;
// };

// const deleteUser = async (id) => {
//   await axiosInstance.delete(`/users/${id}`);
// };

// export default {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser,
// };
