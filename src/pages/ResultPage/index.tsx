import { useMemo } from "react";
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
      <div className={styles.layout}>
        <section className={styles.panel}>
          {/* <div className={styles.panelHeader}>
            <p className={styles.scoreLabel}>{t("results.scoreLabel")}</p>
            <LanguageSwitcher />
          </div> */}

          <div className={styles.scoreValue}>
            <span>{score}</span>
            <span className={styles.scoreMax}>/ {maxScore}</span>
          </div>

          <div className={styles.levelSection}>
            <p className={styles.levelLabel}>{t("results.levelLabel")}</p>
            <div className={styles.levelRow}>
              <span
                className={styles.levelDot}
                style={{ backgroundColor: interpretation.color }}
              />
              <span className={styles.levelName}>
                {t(interpretation.labelKey)}
              </span>
            </div>
            <p className={styles.levelDescription}>
              {t(interpretation.descriptionKey)}
            </p>
          </div>

          <div className={styles.note}>
            <p>{t("results.interpretationNote")}</p>
          </div>
        </section>

        <section className={styles.sidebar}>
          <div>
            <h2 className={styles.sidebarTitle}>{t("results.ctaTitle")}</h2>
            <p className={styles.sidebarText}>{t("results.ctaDescription")}</p>
          </div>

          <div className={styles.tipsCard}>
            <p className={styles.tipsLabel}>{t("results.tips.title")}</p>
            <ul className={styles.tipsList}>
              {tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className={styles.restartButton}
          >
            {t("common.buttons.restart")}
          </button>
        </section>
      </div>
    </div>
  );
};

