import { Navigate } from 'react-router-dom';
import authService from '../../services/authService';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
