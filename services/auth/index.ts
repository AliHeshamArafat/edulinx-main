import { removeCookie } from "../cookies";

export const logout = () => {
  removeCookie("token");
  removeCookie("signature");
  localStorage.removeItem("user");
  localStorage.removeItem("register_data");
};
