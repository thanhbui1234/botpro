import { showError, showSuccess } from "../components/toast";

interface LoginResponse {
  token: string;
}

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  if (username === "chithanh" && password === "123456") {
    const token = "1232132132132131"; // Token giả định
    localStorage.setItem("token", token);
    showSuccess("Login Successful", "You have successfully logged in.");
    return { token };
  } else {
    showError("Login Failed", "Incorrect username or password.");
    throw new Error("Invalid credentials");
  }
};

// Logout function
export const logout = () => {
  localStorage.removeItem("token");
  showSuccess("Logged Out", "You have been logged out.");
  window.location.href = "/login";
};
