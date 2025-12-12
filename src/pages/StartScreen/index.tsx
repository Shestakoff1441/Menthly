import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./StartScreen.module.scss";

export const StartScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after 1.5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className={styles.startScreen}>
      {/* Background gradient with animation */}
      <motion.div
        className={styles.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className={styles.content}>
        {/* Animated icon */}
        <motion.div
          className={styles.iconContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.icon}>
            <div className={styles.pulseDot} />
            <div className={styles.pulseDot} />
            <div className={styles.pulseDot} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("startScreen.title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t("startScreen.subtitle")}
        </motion.p>

        {/* Loading animation */}
        {!showButton && (
          <motion.div
            className={styles.loadingContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.loadingDots}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
          </motion.div>
        )}

        {/* Start button */}
        {showButton && (
          <motion.button
            type="button"
            onClick={handleStart}
            className={styles.startButton}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.buttonText}>{t("startScreen.button")}</span>
            {/* <div className={styles.buttonGlow} /> */}
          </motion.button>
        )}
      </div>
    </div>
  );
};

