import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import type { Question } from "@/data/questions";

import styles from "./SliderQuestion.module.scss";
import clsx from "clsx";

interface SliderQuestionProps {
  question: Question;
  selected?: number;
  onSelect: (value: number) => void;
}

export const SliderQuestion = ({
  question,
  selected,
  onSelect,
}: SliderQuestionProps) => {
  const { t } = useTranslation();

  const config = question.sliderConfig || { min: 0, max: 10, step: 1 };
  const { min, max, step = 1, labels } = config;

  const [value, setValue] = useState<number>(
    selected !== undefined ? selected : Math.floor((min + max) / 2)
  );

  useEffect(() => {
    if (selected !== undefined) {
      setValue(selected);
    }
  }, [selected]);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    onSelect(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={styles.card}>
      <p className={styles.title}>{t(question.textKey)}</p>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderLabels}>
          {labels?.min && <span className={clsx(styles.label, styles.minLabel)}>{t(labels.min)}</span>}
          {labels?.max && (
            <span className={clsx(styles.label, styles.maxLabel)}>{t(labels.max)}</span>
          )}
        </div>

        <div className={styles.sliderTrack}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => handleChange(Number(e.target.value))}
            className={styles.sliderInput}
            aria-label={t(question.textKey)}
          />
          <div
            className={styles.sliderFill}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
