import { notification } from "antd";

export const showSuccess = (message: string, description?: string) => {
  notification.success({
    message,
    description,
    duration: 3, // Auto close after 3s
  });
};

export const showError = (message: string, description?: string) => {
  console.log("hi");

  notification.error({
    message,
    description,
    duration: 3,
  });
};

export const showInfo = (message: string, description?: string) => {
  notification.info({
    message,
    description,
    duration: 3,
  });
};
