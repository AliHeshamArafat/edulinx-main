export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Type for your messages
export type Messages = typeof import('../locales/en.json'); 