import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from './services/AuthServices';

const ProtectedRoute = ({ children, role }) => {
  const currentUser = authService.getCurrentUser();
  if (currentUser && currentUser.roles.includes(role)) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
