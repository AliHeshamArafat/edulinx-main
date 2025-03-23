import { removeCookie, setCookie } from "../cookies";

export const logout = () => {
  removeCookie("token");
  removeCookie("signature");
  localStorage.removeItem("user");
  localStorage.removeItem("register_data");
};

export const login = async ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
  setCookie("token", accessToken);
  setCookie("refreshToken", refreshToken);
};
