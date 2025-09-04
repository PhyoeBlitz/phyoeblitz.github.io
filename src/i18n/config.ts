import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import jaTranslations from './locales/ja.json';

const resources = {
  en: {
    translation: enTranslations
  },
  ja: {
    translation: jaTranslations
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind react-i18next to the instance
  .init({
    resources,
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    
    fallbackLng: 'en', // Fallback language
    debug: false, // Set to true for development
    
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
