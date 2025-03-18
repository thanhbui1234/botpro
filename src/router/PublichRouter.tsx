import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authenticated";

const PublicRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated ? <Navigate to="/" replace /> : element;
};

export default PublicRoute;
