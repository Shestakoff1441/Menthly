import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ru from "./ru.json";

// Get language from URL parameter
const getLangFromUrl = (): string | null => {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  return lang === "en" || lang === "ru" ? lang : null;
};

// Get initial language: URL > localStorage > navigator > fallback
const getInitialLanguage = (): string => {
  const urlLang = getLangFromUrl();
  if (urlLang) {
    // Also save to localStorage for consistency
    localStorage.setItem("i18nextLng", urlLang);
    return urlLang;
  }

  const storedLang = localStorage.getItem("i18nextLng");
  if (storedLang === "en" || storedLang === "ru") return storedLang;

  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "ru") return "ru";

  return "en";
};

void i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["querystring", "localStorage", "navigator"],
    caches: ["localStorage"],
    lookupQuerystring: "lang",
    lookupLocalStorage: "i18nextLng",
  },
});

export default i18n;

