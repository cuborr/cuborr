import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: require('./locales/en.json'),
  },
  de: {
    translation: require('./locales/de.json'),
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'de',
    keySeparator: '.',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
