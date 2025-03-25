import { removeCookie, setCookie } from "../cookies";

export const logout = (redirect?: boolean) => {
  removeCookie("token");
  removeCookie("signature");
  localStorage.removeItem("user");
  localStorage.removeItem("register_data");
  if (redirect) window.location.href = "/";
};

export const login = async ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
  setCookie("token", accessToken);
  setCookie("refreshToken", refreshToken);
};
