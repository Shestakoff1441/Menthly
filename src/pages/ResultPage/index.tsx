import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { questions } from "@/data/questions";
import { useQuizStore } from "@/store";

import styles from "./ResultsPage.module.scss";

const interpretations = [
  {
    range: [0, 40],
    labelKey: "levels.mild",
    descriptionKey: "levelDescriptions.mild",
    color: "#10b981",
  },
  {
    range: [41, 70],
    labelKey: "levels.moderate",
    descriptionKey: "levelDescriptions.moderate",
    color: "#fbbf24",
  },
  {
    range: [71, 95],
    labelKey: "levels.high",
    descriptionKey: "levelDescriptions.high",
    color: "#f97316",
  },
  {
    range: [96, Infinity],
    labelKey: "levels.critical",
    descriptionKey: "levelDescriptions.critical",
    color: "#ef4444",
  },
];

const getInterpretation = (score: number) =>
  interpretations.find(
    (item) => score >= item.range[0] && score <= item.range[1]
  ) ?? interpretations[0];

export const ResultsPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { getScore, reset } = useQuizStore();

  const score = getScore();
  const maxScore = questions.reduce((acc, question) => {
    return acc + (question.multi ? question.options.length : question.options.length - 1);
  }, 0);

  const interpretation = useMemo(() => getInterpretation(score), [score]);
  const tips = t("results.tips.items", { returnObjects: true }) as string[];

  const handleRestart = () => {
    reset();
    navigate("/");
  };

  return (
    <div className={styles.page}>
      {/* Background gradient with animation */}
      <motion.div
        className={styles.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className={styles.layout}>
        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className={styles.scoreValue}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>{score}</span>
            <span className={styles.scoreMax}>/ {maxScore}</span>
          </motion.div>

          <motion.div
            className={styles.levelSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className={styles.levelLabel}>{t("results.levelLabel")}</p>
            <div className={styles.levelRow}>
              <motion.span
                className={styles.levelDot}
                style={{ backgroundColor: interpretation.color }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              />
              <span className={styles.levelName}>
                {t(interpretation.labelKey)}
              </span>
            </div>
            <p className={styles.levelDescription}>
              {t(interpretation.descriptionKey)}
            </p>
          </motion.div>

          <motion.div
            className={styles.note}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>{t("results.interpretationNote")}</p>
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.sidebar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className={styles.sidebarTitle}>{t("results.ctaTitle")}</h2>
            <p className={styles.sidebarText}>{t("results.ctaDescription")}</p>
          </motion.div>

          <motion.div
            className={styles.tipsCard}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <p className={styles.tipsLabel}>{t("results.tips.title")}</p>
            <ul className={styles.tipsList}>
              {tips.map((tip, index) => (
                <motion.li
                  key={tip}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  {tip}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.button
            type="button"
            onClick={handleRestart}
            className={styles.restartButton}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.buttonText}>{t("common.buttons.restart")}</span>
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

