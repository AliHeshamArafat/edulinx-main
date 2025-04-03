import { AxiosRequestConfig } from "axios";
import api from "./apiInstance";
import { ApiResponse } from "@/types/api";

const apiService = {
  get: async ({
    resource,
    params = {},
    skipSuccessMessage = true,
    skipErrorMessage = true,
    config,
  }: {
    resource: string;
    params?: any;
    skipSuccessMessage?: boolean;
    skipErrorMessage?: boolean;
    config?: AxiosRequestConfig;
  }): Promise<ApiResponse<any> | undefined> => {
    try {
      const response = await api.get(`/${resource}`, { params, skipSuccessMessage, skipErrorMessage, ...config });
      return response.data;
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message: error.response?.data?.message || "An error occurred",
        data: null,
        status: error.response?.status
      };
    }
  },

  post: async ({
    resource,
    data,
    config,
    params = {},
  }: {
    resource: string;
    data?: any;
    config?: AxiosRequestConfig;
    params?: any;
  }) => {
    try {
      const response = await api.post(`/${resource}`, data, { ...config, params });
      return response.data;
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message: error.response?.data?.message || "An error occurred",
        data: null,
        status: error.response?.status
      };
    }
  },

  postwithfile: async (resource: string, data: any, config?: AxiosRequestConfig) => {
    try {
      const response = await api.post(`/${resource}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
        ...config,
      });
      return response.data;
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message: error.response?.data?.message || "An error occurred",
        data: null,
        status: error.response?.status
      };
    }
  },

  put: async ({ resource, data, config }: { resource: string; data: any; config?: AxiosRequestConfig }) => {
    try {
      const response = await api.put(`/${resource}`, data, { ...config });
      return response.data;
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message: error.response?.data?.message || "An error occurred",
        data: null,
        status: error.response?.status
      };
    }
  },

  delete: async ({ resource, id }: { resource: string; id: string | number }) => {
    try {
      const response = await api.delete(`/${resource}/${id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        message: error.response?.data?.message || "An error occurred",
        data: null,
        status: error.response?.status
      };
    }
  },
};

export default apiService;
