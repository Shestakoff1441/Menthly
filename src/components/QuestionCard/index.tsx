import type { Question } from "@/data/questions";
import type { AnswerValue } from "@/store/useQuizStore";

import { DragAndDropQuestion } from "./DragAndDropQuestion";
import { ImageChoiceQuestion } from "./ImageChoiceQuestion";
import { MultiChoiceQuestion } from "./MultiChoiceQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";
import { SliderQuestion } from "./SliderQuestion";

interface QuestionCardProps {
  question: Question;
  selected?: AnswerValue;
  onSelect: (value: number) => void;
  onMultiSelect?: (selections: Record<number, boolean>) => void;
  onDragAndDropSelect?: (value: { most: number[]; least: number[] }) => void;
}

export const QuestionCard = ({
  question,
  selected,
  onSelect,
  onMultiSelect,
  onDragAndDropSelect,
}: QuestionCardProps) => {
  // Determine question type: use explicit type or infer from multi flag
  const questionType: Question["type"] =
    question.type ||
    (question.multi ? "multi" : "single");

  // Handle drag and drop selection
  const handleDragAndDropSelect = (value: { most: number[]; least: number[] }) => {
    if (onDragAndDropSelect) {
      onDragAndDropSelect(value);
    }
  };

  switch (questionType) {
    case "slider":
      return (
        <SliderQuestion
          question={question}
          selected={typeof selected === "number" ? selected : undefined}
          onSelect={onSelect}
        />
      );

    case "imageChoice":
      return (
        <ImageChoiceQuestion
          question={question}
          selected={typeof selected === "number" ? selected : undefined}
          onSelect={onSelect}
        />
      );

    case "dragAndDrop":
      return (
        <DragAndDropQuestion
          question={question}
          selected={
            selected &&
            typeof selected === "object" &&
            "most" in selected &&
            "least" in selected
              ? (selected as { most: number[]; least: number[] })
              : undefined
          }
          onSelect={handleDragAndDropSelect}
        />
      );

    case "multi":
      return (
        <MultiChoiceQuestion
          question={question}
          selected={
            selected &&
            typeof selected === "object" &&
            !Array.isArray(selected) &&
            !("most" in selected)
              ? (selected as Record<number, boolean>)
              : undefined
          }
          onSelect={onSelect}
          onMultiSelect={onMultiSelect || (() => {})}
        />
      );

    case "single":
    default:
      return (
        <SingleChoiceQuestion
          question={question}
          selected={typeof selected === "number" ? selected : undefined}
          onSelect={onSelect}
        />
      );
  }
};
