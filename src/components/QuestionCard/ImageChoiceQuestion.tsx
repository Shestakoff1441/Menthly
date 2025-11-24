import clsx from "clsx";
import { useTranslation } from "react-i18next";

import type { Question } from "@/data/questions";

import styles from "./ImageChoiceQuestion.module.scss";

interface ImageChoiceQuestionProps {
  question: Question;
  selected?: number;
  onSelect: (value: number) => void;
}

export const ImageChoiceQuestion = ({
  question,
  selected,
  onSelect,
}: ImageChoiceQuestionProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <p className={styles.title}>{t(question.textKey)}</p>

      <div className={styles.imageGrid} role="radiogroup">
        {question.options.map((option) => {
          const isActive = selected === option.value;
          const imageUrl = option.imageKey
            ? `/images/${option.imageKey}`
            : undefined;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={clsx(styles.imageOption, {
                [styles.active]: isActive,
              })}
              role="radio"
              aria-checked={isActive}
              aria-label={t(option.textKey)}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={t(option.textKey)}
                  className={styles.image}
                />
              )}
              <span className={styles.optionText}>{t(option.textKey)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

