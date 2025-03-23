import { dispatch } from "../store";
import { setCredentials, logout } from "../features/authSlice";
import { login, logout as logoutService } from "@/services/auth";

export const loginAction = (data: any) => {
  login({ accessToken: data.accessToken, refreshToken: data.refreshToken });

  console.log(data, "data.user");

  dispatch(setCredentials({ user: data.user, token: data.accessToken }));
};

export const logoutAction = () => {
  logoutService();
  dispatch(logout());
};
