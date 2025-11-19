import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { QuestionCard } from "@/components/QuestionCard";
import { questions } from "@/data/questions";
import { useQuizStore } from "@/store";

import styles from "./QuizPage.module.scss";

export const QuizPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { current, answers, setAnswer, setMultiAnswer, next, prev } =
    useQuizStore();

  const question = questions[current];
  const isMultiSelect = question?.multi ?? false;
  const selected = question ? answers[question.id] : undefined;
  const isLastQuestion = current === questions.length - 1;

  // Allow proceeding if:
  // - Single-select: selected is a number (the option value)
  // - Multi-select: selected is an array with at least one value
  const canProceed =
    selected !== undefined &&
    (isMultiSelect
      ? Array.isArray(selected) && selected.length > 0
      : typeof selected === "number");
  const handleNext = () => {
    if (!question || !canProceed) return;

    if (isLastQuestion) {
      navigate("/results");
      return;
    }

    next();
  };

  const handlePrev = () => {
    if (current === 0) return;
    prev();
  };

  if (!question) {
    return (
      <div className={styles.emptyState}>
        <p>{t("quiz.noQuestions")}</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerInfo}>
              <p className={styles.counter}>
                {t("quiz.questionCounter", {
                  current: current + 1,
                  total: questions.length,
                })}
              </p>
              <h1 className={styles.title}>{t("quiz.title")}</h1>
              <p className={styles.note}>{t("quiz.progressNote")}</p>
            </div>
            <LanguageSwitcher />
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </header>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <QuestionCard
              question={question}
              multiSelect={isMultiSelect}
              selected={selected}
              onSelect={(value) => {
                // For single-select, store the value directly
                // For multi-select, this is the sum (calculated in QuestionCard)
                // The array is stored separately via onMultiSelect
                if (!isMultiSelect) {
                  setAnswer(question.id, value);
                }
              }}
              onMultiSelect={(values) => {
                // Store the array for multi-select questions
                setMultiAnswer(question.id, values);
              }}
            />
          </motion.div>
        </AnimatePresence>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={handlePrev}
            disabled={current === 0}
            className={clsx(styles.button, styles.backButton)}
          >
            {t("common.buttons.back")}
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceed}
            className={clsx(styles.button, styles.nextButton, {
              [styles.nextButtonDisabled]: !canProceed,
            })}
          >
            {isLastQuestion
              ? t("common.buttons.finish")
              : t("common.buttons.next")}
          </button>
        </div>
      </div>
    </div>
  );
};

