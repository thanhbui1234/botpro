import axios from "axios";

export const API_URL = "https://jsonplaceholder.typicode.com";
import { useAuthStore } from "../store/useAuthStore";

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Attach Token)
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      useAuthStore.getState().token || localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Handle Errors)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Redirecting to login...");
      localStorage.removeItem("token"); // Clear token
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);
