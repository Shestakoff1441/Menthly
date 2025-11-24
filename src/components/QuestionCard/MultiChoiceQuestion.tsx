import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import type { Question } from "@/data/questions";

import styles from "./QuestionCard.module.scss";

interface MultiChoiceQuestionProps {
  question: Question;
  selected?: Record<number, boolean>;
  onSelect: (value: number) => void;
  onMultiSelect: (selections: Record<number, boolean>) => void;
}

export const MultiChoiceQuestion = ({
  question,
  selected,
  onSelect,
  onMultiSelect,
}: MultiChoiceQuestionProps) => {
  const { t } = useTranslation();

  const [selections, setSelections] = useState<Record<number, boolean>>(() => {
    if (selected && typeof selected === "object" && !Array.isArray(selected)) {
      return { ...selected };
    }
    return {};
  });

  const handleMultiSelect = (optionIndex: number, checked: boolean) => {
    setSelections((prev) => {
      const newSelections = {
        ...prev,
        [optionIndex]: checked,
      };

      const count = Object.values(newSelections).filter(Boolean).length;

      onSelect(count);
      onMultiSelect(newSelections);
      return newSelections;
    });
  };

  useEffect(() => {
    if (selected && typeof selected === "object" && !Array.isArray(selected)) {
      setSelections((currentSelections) => {
        const currentKeys = Object.keys(currentSelections).sort().join(",");
        const newKeys = Object.keys(selected).sort().join(",");
        const currentValues = Object.values(currentSelections).join(",");
        const newValues = Object.values(selected).join(",");

        if (currentKeys !== newKeys || currentValues !== newValues) {
          return { ...selected };
        }
        return currentSelections;
      });
    } else if (
      (typeof selected === "object" && selected !== null && Object.keys(selected).length === 0) ||
      selected === undefined
    ) {
      setSelections((currentSelections) => {
        if (Object.keys(currentSelections).length > 0) {
          return {};
        }
        return currentSelections;
      });
    }
  }, [selected, question.id]);

  const isOptionSelected = (optionIndex: number): boolean => {
    return selections[optionIndex] === true;
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>{t(question.textKey)}</p>

      <div className={styles.options} role="group">
        {question.options.map((option, optionIndex) => {
          const checked = isOptionSelected(optionIndex);
          return (
            <label
              key={`${question.id}-${optionIndex}`}
              className={clsx(styles.optionCheckbox, {
                [styles.checked]: checked,
              })}
              role="checkbox"
              aria-checked={checked}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => handleMultiSelect(optionIndex, e.target.checked)}
                className={styles.checkboxInput}
                aria-label={t(option.textKey)}
              />
              <span className={styles.checkboxIcon} aria-hidden="true">
                {checked && "✓"}
              </span>
              <span className={styles.optionText}>{t(option.textKey)}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

