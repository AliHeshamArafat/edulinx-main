import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "../auth";
import { getCookie } from "../cookies";
import { logoutAction } from "@/app/store/actions/authActions";
import { redirect } from "next/navigation";
// Add this type declaration
declare module "axios" {
  export interface AxiosRequestConfig {
    skipSuccessMessage?: boolean;
    skipErrorMessage?: boolean;
    skipUnauthorized?: boolean;
    isServer?: boolean;
  }
}

// Create Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 20000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    const lang = getCookie("lang");

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    config.headers["x-api-key"] = `${process.env.NEXT_PUBLIC_API_KEY}`;

    if (!config.isServer) config.headers["Accept-Language"] = lang === "ar" ? "ar-EG" : "en-US"; // ar-EG, en-US

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // For client-side only
    if (typeof window !== 'undefined' && !response.config?.skipSuccessMessage) {
      toast.success(response.data.message);
    }
    return response;
  },
  (error) => {
    console.log(error);

    // Handle 401 errors
    if (error.response && error.response.status === 401 && !error.config?.skipUnauthorized) {
      if (typeof window !== 'undefined') {
        logoutAction();
        window.location.href = "/";
      } else {
        redirect("/");
      }
    }

    // For client-side only - show toast
    if (typeof window !== 'undefined' && error.response && !error.config?.skipErrorMessage) {
      toast.error(error?.response?.data?.message);
    }

    // Always include error info in the response for client to handle
    if (error.response) {
      error.response.serverError = {
        message: error.response?.data?.message || "An error occurred",
        status: error.response.status
      };
    }

    return Promise.reject(error);
  }
);

export default api;
