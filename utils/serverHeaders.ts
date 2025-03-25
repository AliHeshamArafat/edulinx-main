import { cookies } from "next/headers";

export async function getServerHeaders() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const lang = cookieStore.get("lang")?.value;

  return {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      "Accept-Language": lang === "ar" ? "ar-EG" : "en-US",
    },
    isServer: true,
  };
} 