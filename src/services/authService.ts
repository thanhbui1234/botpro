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
    return { token };
  } else {
    throw new Error("Invalid credentials");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
