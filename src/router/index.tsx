import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import { lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublichRouter";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/bot" replace />,
      },
      {
        element: <PrivateRoute element={<Home />} />,
        path: "/bot",
      },
      {
        element: <PrivateRoute element={<h1>hihi</h1>} />,
        path: "/strategy",
      },
      {
        element: <PrivateRoute element={<h1>huhu </h1>} />,
        path: "/position",
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
