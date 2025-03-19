/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { loginService, logoutService } from "../services/authService";

interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Lấy token từ localStorage khi app khởi động
const storedToken = localStorage.getItem("token");

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: storedToken,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { token, user } = await loginService(email, password);
      localStorage.setItem("token", token);
      set({ user, token, loading: false });
    } catch (error: any) {
      set({ error: "Login failed", loading: false });
    }
  },

  logout: async () => {
    await logoutService();
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
