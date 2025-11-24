import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { questions } from "@/data/questions";

/**
 * Answer value can be:
 * - number: for single-select, slider, and imageChoice questions
 * - Record<number, boolean>: for multi-select questions (optionIndex -> isSelected)
 * - { most: number[], least: number[] }: for dragAndDrop questions (item IDs)
 */
export type AnswerValue =
  | number
  | Record<number, boolean>
  | { most: number[]; least: number[] };

export interface QuizState {
  current: number;
  answers: Record<number, AnswerValue>;
  /**
   * Set answer for a question.
   * - Single-select/imageChoice: pass the option value (number)
   * - Slider: pass the slider value (number)
   * - Multi-select: pass an object mapping option indices to boolean
   * - DragAndDrop: pass { most: number[], least: number[] }
   */
  setAnswer: (id: number, value: AnswerValue) => void;
  /**
   * Set answer for multi-select question (convenience method)
   */
  setMultiAnswer: (id: number, selections: Record<number, boolean>) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  getScore: () => number;
}

const initialState = {
  current: 0,
  answers: {} as Record<number, AnswerValue>,
};

export const useQuizStore = create<QuizState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setAnswer: (id, value) => {
          set((state) => ({
            answers: {
              ...state.answers,
              [id]: value,
            },
          }));
        },
        setMultiAnswer: (id, selections) => {
          set((state) => ({
            answers: {
              ...state.answers,
              [id]: selections,
            },
          }));
        },
        next: () => {
          set((state) =>
            state.current < questions.length - 1
              ? { current: state.current + 1 }
              : state
          );
        },
        prev: () => {
          set((state) =>
            state.current > 0 ? { current: state.current - 1 } : state
          );
        },
        reset: () => set(initialState),
        getScore: (): number => {
          const answerValues = Object.values(get().answers);
          let total = 0;
          for (const value of answerValues) {
            if (typeof value === "object" && !Array.isArray(value)) {
              // Check if it's dragAndDrop format
              if ("most" in value && "least" in value) {
                // DragAndDrop: sum values from most array, subtract values from least array
                const mostSum = (value.most as number[]).reduce((sum, id) => sum + id, 0);
                const leastSum = (value.least as number[]).reduce((sum, id) => sum + id, 0);
                total += mostSum - leastSum;
              } else {
                // Multi-select: count the number of selected checkboxes (true values)
                const count = Object.values(value).filter(Boolean).length;
                total += count;
              }
            } else if (typeof value === "number") {
              // Single-select, slider, imageChoice: add the value directly
              total += value;
            }
          }
          return total;
        },
      }),
      {
        name: "quiz-store",
      }
    )
  )
);

