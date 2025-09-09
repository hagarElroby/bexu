"use client";

import { createContext, useContext, useState, useEffect } from "react";
const TranslationContext = createContext();
export function TranslationProvider({ children }) {
  const [translations, setTranslations] = useState({});
  const [lang, setLang] = useState("en");
  useEffect(() => {
    import(`../app/i18n/${lang}.json`).then((module) => {
         setTranslations(module.default);
          document.cookie = `lang=${lang}; path=/; max-age=31536000`;
     }
    );
  }, [lang]);
  const changeLanguage = (newLang) => {
    setLang(newLang);
  };
  return (
    <TranslationContext.Provider value={{lang, translations, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}
export function useTranslation() {
  return useContext(TranslationContext);
}