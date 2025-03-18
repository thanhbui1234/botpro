import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authenticated";

interface PrivateRouteProps {
  element: React.ReactNode;
}

export default function PrivateRoute({ element }: PrivateRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
}
