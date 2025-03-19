import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "../auth";
import { getCookie } from "../cookies";

// Add this type declaration
declare module "axios" {
  export interface AxiosRequestConfig {
    skipSuccessMessage?: boolean;
    skipErrorMessage?: boolean;
    skipUnauthorized?: boolean;
  }
}

// Create Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    const lang = getCookie("lang");

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    config.headers["api-key"] = `${process.env.NEXT_PUBLIC_API_KEY}`;
    config.headers["Accept-Language"] = lang || "en";

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Skip success message if skipSuccessMessage is true
    if (!response.config?.skipSuccessMessage) toast.success(response.data.message);

    return response;
  },
  (error) => {
    console.log(error);

    if (error.response && error.response.status === 401 && !error.config?.skipUnauthorized) {
      toast.error("Unauthorized");
      logout();
      window.location.href = "/";
    }

    if (error.response && !error.config?.skipErrorMessage) toast.error(error?.response?.data?.message);

    return Promise.reject(error);
  }
);

export default api;
