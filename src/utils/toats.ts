// hooks/useToast.tsx
import { message } from "antd";

type ToastType = "success" | "error" | "info" | "warning" | "loading";

export const useToast = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const toast = (type: ToastType, content: string, duration = 2) => {
    messageApi.open({
      type,
      content,
      duration,
    });
  };

  return {
    toast, // dùng toast('success', 'Hello')
    contextHolder, // đưa vào JSX
  };
};
