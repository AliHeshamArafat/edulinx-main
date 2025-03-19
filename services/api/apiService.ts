import { AxiosRequestConfig } from "axios";
import api from "./apiInstance";

const apiService = {
  get: async ({
    resource,
    params = {},
    skipSuccessMessage = true,
    skipErrorMessage = true,
  }: {
    resource: string;
    params?: any;
    skipSuccessMessage?: boolean;
    skipErrorMessage?: boolean;
  }) => {
    try {
      const response = await api.get(`/${resource}`, { params, skipSuccessMessage, skipErrorMessage });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  post: async ({ resource, data, config }: { resource: string; data: any; config?: AxiosRequestConfig }) => {
    try {
      const response = await api.post(`/${resource}`, data, config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  postwithfile: async (resource: string, data: any, config?: AxiosRequestConfig) => {
    try {
      const response = await api.post(`/${resource}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
        ...config,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  put: async (resource: string, id: string | number, data: any) => {
    try {
      const response = await api.put(`/${resource}/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  delete: async ({ resource, id }: { resource: string; id: string | number }) => {
    try {
      const response = await api.delete(`/${resource}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default apiService;
