import { axiosInstance } from "./api";

export const PostService = {
  getPosts: async () => {
    const response = await axiosInstance.get("/posts");
    return response.data;
  },

  getPostById: async (id: number) => {
    const response = await axiosInstance.get(`/posts/${id}`);
    return response.data;
  },

  createPost: async (postData: {
    title: string;
    body: string;
    userId: number;
  }) => {
    const response = await axiosInstance.post("/posts", postData);
    return response.data;
  },

  updatePost: async (
    id: number,
    updatedData: { title?: string; body?: string }
  ) => {
    const response = await axiosInstance.put(`/posts/${id}`, updatedData);
    return response.data;
  },

  deletePost: async (id: number) => {
    await axiosInstance.delete(`/posts/${id}`);
  },
};
