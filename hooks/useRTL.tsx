import { useLocale } from "next-intl";

export const useRTL = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  return { isRTL, dir };
}; 