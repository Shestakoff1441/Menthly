import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import type { Question } from "@/data/questions";

import styles from "./QuestionCard.module.scss";

interface QuestionCardProps {
  question: Question;
  /**
   * If true, renders checkboxes allowing multiple selections.
   * If false, renders radio buttons for single selection.
   */
  multiSelect?: boolean;
  /**
   * Selected value(s):
   * - For single-select: number (the selected option value)
   * - For multi-select: number[] (array of selected option values)
   */
  selected?: number | number[];
  /**
   * Callback fired when selection changes.
   * For multi-select, receives the sum of all selected option values.
   * For single-select, receives the selected option value.
   */
  onSelect: (value: number) => void;
  /**
   * Callback fired when multi-select changes (receives the array of selected values).
   * Used to persist the array in the store for UI reconstruction.
   */
  onMultiSelect?: (values: number[]) => void;
}

export const QuestionCard = ({
  question,
  multiSelect = false,
  selected,
  onSelect,
  onMultiSelect,
}: QuestionCardProps) => {
  const { t } = useTranslation();

  // Calculate sum of selected values for multi-select
  const calculateSum = (values: number[]): number => {
    return values.reduce((sum, value) => sum + value, 0);
  };

  // Track selected option values for multi-select
  // Initialize from selected prop if it's an array
  const [selectedValues, setSelectedValues] = useState<number[]>(() => {
    if (multiSelect && Array.isArray(selected)) {
      return selected;
    }
    return [];
  });

  // Handle single-select: directly call onSelect with the value
  const handleSingleSelect = (value: number) => {
    onSelect(value);
  };

  // Handle multi-select: update local state and calculate sum
  const handleMultiSelect = (value: number, checked: boolean) => {
    setSelectedValues((prev) => {
      const newValues = checked
        ? [...prev, value]
        : prev.filter((v) => v !== value);
      const sum = calculateSum(newValues);
      // Call onSelect with the sum (for scoring)
      onSelect(sum);
      // Call onMultiSelect with the array (for persistence)
      if (onMultiSelect) {
        onMultiSelect(newValues);
      }
      return newValues;
    });
  };

  // Sync local state when selected prop changes (e.g., when navigating back)
  useEffect(() => {
    if (multiSelect && Array.isArray(selected)) {
      // If selected is an array, use it directly
      setSelectedValues(selected);
    } else if (multiSelect && selected === 0) {
      // If selected is 0, nothing should be selected
      setSelectedValues([]);
    }
  }, [selected, multiSelect]);

  // Check if an option is selected (for multi-select)
  const isOptionSelected = (value: number): boolean => {
    if (multiSelect) {
      return selectedValues.includes(value);
    }
    return selected === value;
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>{t(question.textKey)}</p>

      <div className={styles.options} role={multiSelect ? "group" : "radiogroup"}>
        {question.options.map((option) => {
          if (multiSelect) {
            const checked = isOptionSelected(option.value);
            return (
              <label
                key={option.value}
                className={clsx(styles.optionCheckbox, {
                  [styles.checked]: checked,
                })}
                role="checkbox"
                aria-checked={checked}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) =>
                    handleMultiSelect(option.value, e.target.checked)
                  }
                  className={styles.checkboxInput}
                  aria-label={t(option.textKey)}
                />
                <span className={styles.checkboxIcon} aria-hidden="true">
                  {checked && "✓"}
                </span>
                <span className={styles.optionText}>{t(option.textKey)}</span>
              </label>
            );
          }

          // Single-select: render as button (radio behavior)
          const isActive = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSingleSelect(option.value)}
              className={clsx(styles.optionButton, {
                [styles.active]: isActive,
              })}
              role="radio"
              aria-checked={isActive}
              aria-label={t(option.textKey)}
            >
              <span className={styles.optionText}>{t(option.textKey)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
