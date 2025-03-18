"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type LanguageCode = "en" | "ar";

interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
  dir: "ltr" | "rtl";
}

interface LanguageContextType {
  language: Language;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
  availableLanguages: Language[];
}

// Available languages
const languages: Record<LanguageCode, Language> = {
  en: { code: "en", name: "English", flag: "🇺🇸", dir: "ltr" },
  ar: { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
};

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    "auth.login": "Login",
    "auth.signup": "Sign Up",
    "auth.logout": "Logout",
    "auth.profile": "My Profile",
    "auth.settings": "Settings",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.features": "الميزات",
    "nav.pricing": "التسعير",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "auth.login": "تسجيل الدخول",
    "auth.signup": "إنشاء حساب",
    "auth.logout": "تسجيل خروج",
    "auth.profile": "الملف الشخصي",
    "auth.settings": "الإعدادات",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as LanguageCode;
    if (storedLanguage && languages[storedLanguage]) {
      setCurrentLanguage(storedLanguage);
    }

    document.documentElement.dir = languages[currentLanguage].dir;
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const setLanguage = (code: LanguageCode) => {
    setCurrentLanguage(code);
    localStorage.setItem("language", code);
    document.documentElement.dir = languages[code].dir;
    document.documentElement.lang = code;
  };

  // Translation function
  const t = (key: string): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language: languages[currentLanguage],
        setLanguage,
        t,
        availableLanguages: Object.values(languages),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
