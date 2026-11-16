import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if token exists in localStorage (or via your authServices.js logic)
  const isAuthenticated = localStorage.getItem('token') !== null || true; // Set true temporarily for testing UI

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;