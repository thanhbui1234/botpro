import { JSX } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

const PublicRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? <Navigate to="/" replace /> : element;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PrivateRoute element={<Home />} />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <PublicRoute element={<Login />} />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

export default router;
