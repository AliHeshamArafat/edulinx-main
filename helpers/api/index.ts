import { getCookie } from "@/services/cookies";

export const createQueryString = (params: Record<string, string | number>): string => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

export const getHeaders = () => {
  const token = getCookie("token");
  const lang = getCookie("lang");

  return {
    Authorization: `Bearer ${token}`,
    "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    "Accept-Language": lang === "ar" ? "ar-EG" : "en-US",
  };
};
