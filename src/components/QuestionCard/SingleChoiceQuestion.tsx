import clsx from "clsx";
import { useTranslation } from "react-i18next";

import type { Question } from "@/data/questions";

import styles from "./QuestionCard.module.scss";

interface SingleChoiceQuestionProps {
  question: Question;
  selected?: number;
  onSelect: (value: number) => void;
}

export const SingleChoiceQuestion = ({
  question,
  selected,
  onSelect,
}: SingleChoiceQuestionProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <p className={styles.title}>{t(question.textKey)}</p>

      <div className={styles.options} role="radiogroup">
        {question.options.map((option) => {
          const isActive = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={clsx(styles.optionButton, {
                [styles.active]: isActive,
              })}
              role="radio"
              aria-checked={isActive}
              aria-label={t(option.textKey)}
            >
              <span className={styles.radioIndicator} aria-hidden="true">
                {isActive && <span className={styles.radioIndicatorInner} />}
              </span>
              <span className={styles.optionText}>{t(option.textKey)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

