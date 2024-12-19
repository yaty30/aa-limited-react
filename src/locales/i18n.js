import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      home: "Home",
      aboutUs: "About Us",
    },
  },
  zh: {
    translation: {
      home: "首頁",
      aboutUs: "關於我們",
    },
  },
  sm_zh: {
    translation: {
      home: "首頁",
      aboutUs: "關於我們",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
