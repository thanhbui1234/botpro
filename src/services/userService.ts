import { api } from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
}

// Get all users
export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");
  return response.data;
};

// Create a new user
export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const response = await api.post("/users", user);
  return response.data;
};

// Update user by ID
export const updateUser = async (
  id: number,
  user: Partial<User>
): Promise<User> => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

// Delete user by ID
export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/users/${id}`);
};
