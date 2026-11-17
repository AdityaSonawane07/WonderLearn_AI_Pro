

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if token actually exists in localStorage
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;