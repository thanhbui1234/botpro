import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PostService } from "../services/userService";

// demo

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: PostService.getPosts,
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => PostService.getPostById(id),
    enabled: !!id, // Chỉ gọi API khi id có giá trị
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostService.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // Refetch danh sách sau khi thêm
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: { title?: string; body?: string };
    }) => PostService.updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // Refetch danh sách sau khi cập nhật
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostService.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // Refetch danh sách sau khi xóa
    },
  });
};
