import { getCookie } from "@/services/cookies";

export const createQueryString = (params: Record<string, string | number>): string => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

export const getHeaders = () => {
  const token = getCookie("token");

  return {
    Authorization: `Bearer ${token}`,
    "api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    "Accept-Language": "en",
  };
};
