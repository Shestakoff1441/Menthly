import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { InfoScreen } from "@/components/InfoScreen";
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
  const isInfoScreen = question?.isInfo ?? false;
  const questionType = question?.type || (question?.multi ? "multi" : "single");
  const selected = question ? answers[question.id] : undefined;
  const isLastQuestion = current === questions.length - 1;

  // Determine if user can proceed based on question type
  const canProceed = (() => {
    if (isInfoScreen) return true;
    if (selected === undefined) return false;

    switch (questionType) {
      case "slider":
      case "imageChoice":
      case "single":
        return typeof selected === "number";
      case "multi":
        return (
          typeof selected === "object" &&
          !Array.isArray(selected) &&
          !("most" in selected) &&
          Object.values(selected).some(Boolean)
        );
      case "dragAndDrop":
        return (
          typeof selected === "object" &&
          "most" in selected &&
          "least" in selected &&
          ((selected as { most: number[]; least: number[] }).most.length > 0 ||
            (selected as { most: number[]; least: number[] }).least.length > 0)
        );
      default:
        return false;
    }
  })();

  const handleNext = () => {
    if (!question) return;

    // For info screens, just navigate to next (no scoring)
    if (isInfoScreen) {
      if (isLastQuestion) {
        navigate("/results");
        return;
      }
      next();
      return;
    }

    if (!canProceed) return;

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

  // For info screens, render full-screen without header
  if (isInfoScreen) {
    return (
      <div className={clsx(styles.page, styles.pageFullScreen)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={question.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <InfoScreen question={question} onContinue={handleNext} />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.contentContainer}>
          <header className={styles.header}>
            <div className={styles.headerTop}>
              <div className={styles.headerInfo}>
                <h1 className={styles.title}>{t("quiz.title")}</h1>
                <p className={styles.note}>{t("quiz.progressNote")}</p>
              </div>
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
                selected={selected}
                onSelect={(value) => {
                  // For single, slider, and imageChoice
                  if (
                    questionType === "single" ||
                    questionType === "slider" ||
                    questionType === "imageChoice"
                  ) {
                    setAnswer(question.id, value);
                  }
                }}
                onMultiSelect={(selections) => {
                  // For multi-select
                  if (questionType === "multi") {
                    setMultiAnswer(question.id, selections);
                  }
                }}
                onDragAndDropSelect={(value) => {
                  // For drag and drop
                  if (questionType === "dragAndDrop") {
                    setAnswer(question.id, value);
                  }
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>


        <div className={styles.actions}>
          <button
            type="button"
            onClick={handlePrev}
            disabled={current < 1}
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

