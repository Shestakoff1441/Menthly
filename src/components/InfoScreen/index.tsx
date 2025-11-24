import { useTranslation } from "react-i18next";

import type { Question } from "@/data/questions";

import styles from "./InfoScreen.module.scss";

interface InfoScreenProps {
  question: Question;
  onContinue: () => void;
}

export const InfoScreen = ({ question, onContinue }: InfoScreenProps) => {
  const { t } = useTranslation();

  // For the first info screen (id: 100), use image_1.png, otherwise use imageKey
  const imageFileName =
    question.id === 100
      ? "image_1.png"
      : question.imageKey
        ? question.imageKey
        : undefined;

  const imageUrl = imageFileName ? `/images/${imageFileName}` : undefined;

  return (
    <div className={styles.infoScreen}>
      <div className={styles.content}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt=""
            className={styles.infoImage}
          />
        )}
        <div className={styles.textContent}>
          <h2
            style={{ color: question.options[0]?.titleColor }}
            className={styles.title}
          >
            {t(question.textKey)}
          </h2>
          {question.options.length > 0 && (
            <p className={styles.description}>
              {t(question.options[0].textKey)}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={onContinue}
          className={styles.continueButton}
        >
          {question.options[0]?.buttonTextKey
            ? t(question.options[0].buttonTextKey)
            : t("common.buttons.continue")}
        </button>
      </div>
    </div>
  );
};

