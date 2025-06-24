import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import sw from './locales/sw/translation.json';
import zh from './locales/zh/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      sw: { translation: sw },
      zh: { translation: zh },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already handles XSS protection
    },
  });

export default i18n;
