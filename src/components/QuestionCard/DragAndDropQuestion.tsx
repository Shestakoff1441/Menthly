import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import type { Question } from "@/data/questions";

import styles from "./DragAndDropQuestion.module.scss";

interface DragAndDropQuestionProps {
  question: Question;
  selected?: { most: number[]; least: number[] };
  onSelect: (value: { most: number[]; least: number[] }) => void;
}

export const DragAndDropQuestion = ({
  question,
  selected,
  onSelect,
}: DragAndDropQuestionProps) => {
  const { t } = useTranslation();

  const config = question.dragAndDropConfig;
  if (!config) {
    return null;
  }

  const [most, setMost] = useState<number[]>(
    selected?.most || []
  );
  const [least, setLeast] = useState<number[]>(
    selected?.least || []
  );

  useEffect(() => {
    if (selected) {
      setMost(selected.most || []);
      setLeast(selected.least || []);
    }
  }, [selected]);

  const availableItems = config.items.filter(
    (item) => !most.includes(item.id) && !least.includes(item.id)
  );

  const handleDragStart = (e: React.DragEvent, itemId: number) => {
    e.dataTransfer.setData("text/plain", itemId.toString());
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, zone: "most" | "least") => {
    e.preventDefault();
    const itemId = Number(e.dataTransfer.getData("text/plain"));

    if (zone === "most") {
      const newMost = [...most, itemId];
      const newLeast = least.filter((id) => id !== itemId);
      setMost(newMost);
      setLeast(newLeast);
      onSelect({ most: newMost, least: newLeast });
    } else {
      const newLeast = [...least, itemId];
      const newMost = most.filter((id) => id !== itemId);
      setLeast(newLeast);
      setMost(newMost);
      onSelect({ most: newMost, least: newLeast });
    }
  };

  const removeFromZone = (itemId: number, zone: "most" | "least") => {
    if (zone === "most") {
      const newMost = most.filter((id) => id !== itemId);
      setMost(newMost);
      onSelect({ most: newMost, least });
    } else {
      const newLeast = least.filter((id) => id !== itemId);
      setLeast(newLeast);
      onSelect({ most, least: newLeast });
    }
  };

  const getItemById = (id: number) => {
    return config.items.find((item) => item.id === id);
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>{t(question.textKey)}</p>

      <div className={styles.container}>
        {/* Available Items */}
        <div className={styles.availableSection}>
          <h3 className={styles.sectionTitle}>
            {t("quiz.dragAndDrop.available")}
          </h3>
          <div className={styles.availableItems}>
            {availableItems.map((item) => (
              <div
                key={item.id}
                className={styles.item}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
              >
                {t(item.textKey)}
              </div>
            ))}
            {availableItems.length === 0 && (
              <p className={styles.emptyMessage}>
                {t("quiz.dragAndDrop.allPlaced")}
              </p>
            )}
          </div>
        </div>

        {/* Drop Zones */}
        <div className={styles.dropZones}>
          <div
            className={styles.dropZone}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "most")}
          >
            <h3 className={styles.zoneTitle}>
              {t("quiz.dragAndDrop.mostLikeMe")}
            </h3>
            <div className={styles.zoneItems}>
              {most.map((itemId) => {
                const item = getItemById(itemId);
                if (!item) return null;
                return (
                  <div
                    key={itemId}
                    className={styles.zoneItem}
                    onClick={() => removeFromZone(itemId, "most")}
                  >
                    {t(item.textKey)}
                    <span className={styles.removeIcon}>×</span>
                  </div>
                );
              })}
              {most.length === 0 && (
                <p className={styles.placeholder}>
                  {t("quiz.dragAndDrop.dropHere")}
                </p>
              )}
            </div>
          </div>

          <div
            className={styles.dropZone}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "least")}
          >
            <h3 className={styles.zoneTitle}>
              {t("quiz.dragAndDrop.leastLikeMe")}
            </h3>
            <div className={styles.zoneItems}>
              {least.map((itemId) => {
                const item = getItemById(itemId);
                if (!item) return null;
                return (
                  <div
                    key={itemId}
                    className={styles.zoneItem}
                    onClick={() => removeFromZone(itemId, "least")}
                  >
                    {t(item.textKey)}
                    <span className={styles.removeIcon}>×</span>
                  </div>
                );
              })}
              {least.length === 0 && (
                <p className={styles.placeholder}>
                  {t("quiz.dragAndDrop.dropHere")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

