/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface PostState {
  posts: any[];
  setPosts: (posts: any[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
