import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

interface PrivateRouteProps {
  element: React.ReactNode;
}

export default function PrivateRoute({ element }: PrivateRouteProps) {
  const { token } = useAuthStore();
  const storedToken = localStorage.getItem("token");

  return token || storedToken ? element : <Navigate to="/login" replace />;
}
