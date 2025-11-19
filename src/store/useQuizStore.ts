import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { questions } from "@/data/questions";

/**
 * Answer value can be:
 * - number: for single-select questions (the selected option value)
 * - number[]: for multi-select questions (array of selected option values)
 */
export interface QuizState {
  current: number;
  answers: Record<number, number | number[]>;
  /**
   * Set answer for a question.
   * For single-select: pass the option value (number)
   * For multi-select: pass the array of selected option values (number[])
   */
  setAnswer: (id: number, value: number | number[]) => void;
  /**
   * Set answer for multi-select question (convenience method)
   */
  setMultiAnswer: (id: number, values: number[]) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  getScore: () => number;
}

const initialState = {
  current: 0,
  answers: {} as Record<number, number | number[]>,
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
        setMultiAnswer: (id, values) => {
          set((state) => ({
            answers: {
              ...state.answers,
              [id]: values,
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
          const answerValues: (number | number[])[] = Object.values(get().answers);
          let total = 0;
          for (const value of answerValues) {
            if (Array.isArray(value)) {
              // Multi-select: sum the array
              total += value.reduce((sum, v) => sum + v, 0);
            } else {
              // Single-select: add the value directly
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

