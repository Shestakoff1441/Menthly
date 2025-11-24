import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import styles from "./LanguageSwitcher.module.scss";

const languages = ["en", "ru"] as const;

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const current = i18n.language || i18n.resolvedLanguage;

  // Sync i18n language when URL parameter changes
  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang === "en" || urlLang === "ru") {
      const currentLang = i18n.language || i18n.resolvedLanguage;
      if (currentLang !== urlLang) {
        void i18n.changeLanguage(urlLang);
      }
    }
  }, [searchParams, i18n]);

  const handleChange = (lng: (typeof languages)[number]) => {
    if (current === lng) return;
    
    // Update i18n language
    void i18n.changeLanguage(lng);
    
    // Update URL parameter
    const newParams = new URLSearchParams(searchParams);
    newParams.set("lang", lng);
    setSearchParams(newParams, { replace: true });
  };

  return (
    <div className={styles.switcher}>
      {languages.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => handleChange(lng)}
          className={clsx(styles.button, {
            [styles.active]: current?.startsWith(lng),
          })}
        >
          {t(`common.languages.${lng}`)}
        </button>
      ))}
    </div>
  );
};

