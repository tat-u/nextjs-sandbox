import { useState, useEffect } from "react";
import { isAvailableLanguage, SupportedLanguages } from "./lang";

export const useLang = () => {
  const [lang, setLang] = useState<SupportedLanguages>("ja");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === null) {
      return;
    } else if (isAvailableLanguage(savedLang)) {
      setLang(savedLang);
    }
  }, [lang]);

  return { lang, setLang };
};
