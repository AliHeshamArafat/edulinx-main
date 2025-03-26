import { dispatch } from "../store";
import { setCredentials, logout, setUser } from "../features/authSlice";
import { login, logout as logoutService } from "@/services/auth";

export const loginAction = (data: any) => {
  login({ accessToken: data.accessToken, refreshToken: data.refreshToken });

  dispatch(setCredentials({ user: data.user, token: data.accessToken }));
};

export const logoutAction = (redirect?: boolean) => {
  logoutService(redirect);
  dispatch(logout());
};

export const setUserAction = (user: any) => {
  dispatch(setUser(user));
};
