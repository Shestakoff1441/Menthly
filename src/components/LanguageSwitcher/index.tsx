import clsx from "clsx";
import { useTranslation } from "react-i18next";

import styles from "./LanguageSwitcher.module.scss";

const languages = ["en", "ru"] as const;

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const current = i18n.language || i18n.resolvedLanguage;

  const handleChange = (lng: (typeof languages)[number]) => {
    if (current === lng) return;
    void i18n.changeLanguage(lng);
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

