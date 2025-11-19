export interface QuestionOption {
  textKey: string;
  value: number;
}

export interface Question {
  id: number;
  textKey: string;
  multi?: boolean;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: 1,
    textKey: "questions.q1.text",
    options: [
      { textKey: "questions.q1.options.a", value: 0 },
      { textKey: "questions.q1.options.b", value: 1 },
      { textKey: "questions.q1.options.c", value: 2 },
      { textKey: "questions.q1.options.d", value: 3 },
    ],
  },
  {
    id: 2,
    textKey: "questions.q2.text",
    options: [
      { textKey: "questions.q2.options.a", value: 0 },
      { textKey: "questions.q2.options.b", value: 1 },
      { textKey: "questions.q2.options.c", value: 2 },
      { textKey: "questions.q2.options.d", value: 3 },
    ],
  },
  {
    id: 3,
    textKey: "questions.q3.text",
    multi: true,
    options: [
      { textKey: "questions.q3.options.a", value: 1 },
      { textKey: "questions.q3.options.b", value: 1 },
      { textKey: "questions.q3.options.c", value: 1 },
      { textKey: "questions.q3.options.d", value: 1 },
      { textKey: "questions.q3.options.e", value: 1 },
    ],
  },
  {
    id: 4,
    textKey: "questions.q4.text",
    options: [
      { textKey: "questions.q4.options.a", value: 0 },
      { textKey: "questions.q4.options.b", value: 1 },
      { textKey: "questions.q4.options.c", value: 2 },
      { textKey: "questions.q4.options.d", value: 3 },
    ],
  },
  {
    id: 5,
    textKey: "questions.q5.text",
    multi: true,
    options: [
      { textKey: "questions.q5.options.a", value: 1 },
      { textKey: "questions.q5.options.b", value: 1 },
      { textKey: "questions.q5.options.c", value: 1 },
      { textKey: "questions.q5.options.d", value: 1 },
      { textKey: "questions.q5.options.e", value: 1 },
    ],
  },
  {
    id: 6,
    textKey: "questions.q6.text",
    options: [
      { textKey: "questions.q6.options.a", value: 0 },
      { textKey: "questions.q6.options.b", value: 1 },
      { textKey: "questions.q6.options.c", value: 2 },
      { textKey: "questions.q6.options.d", value: 3 },
    ],
  },
  {
    id: 7,
    textKey: "questions.q7.text",
    options: [
      { textKey: "questions.q7.options.a", value: 0 },
      { textKey: "questions.q7.options.b", value: 1 },
      { textKey: "questions.q7.options.c", value: 2 },
      { textKey: "questions.q7.options.d", value: 3 },
    ],
  },
  {
    id: 8,
    textKey: "questions.q8.text",
    multi: true,
    options: [
      { textKey: "questions.q8.options.a", value: 1 },
      { textKey: "questions.q8.options.b", value: 1 },
      { textKey: "questions.q8.options.c", value: 1 },
      { textKey: "questions.q8.options.d", value: 1 },
      { textKey: "questions.q8.options.e", value: 1 },
    ],
  },
  {
    id: 9,
    textKey: "questions.q9.text",
    options: [
      { textKey: "questions.q9.options.a", value: 0 },
      { textKey: "questions.q9.options.b", value: 1 },
      { textKey: "questions.q9.options.c", value: 2 },
      { textKey: "questions.q9.options.d", value: 3 },
    ],
  },
  {
    id: 10,
    textKey: "questions.q10.text",
    options: [
      { textKey: "questions.q10.options.a", value: 0 },
      { textKey: "questions.q10.options.b", value: 1 },
      { textKey: "questions.q10.options.c", value: 2 },
      { textKey: "questions.q10.options.d", value: 3 },
    ],
  },
  {
    id: 11,
    textKey: "questions.q11.text",
    multi: true,
    options: [
      { textKey: "questions.q11.options.a", value: 1 },
      { textKey: "questions.q11.options.b", value: 1 },
      { textKey: "questions.q11.options.c", value: 1 },
      { textKey: "questions.q11.options.d", value: 1 },
      { textKey: "questions.q11.options.e", value: 1 },
    ],
  },
  {
    id: 12,
    textKey: "questions.q12.text",
    options: [
      { textKey: "questions.q12.options.a", value: 0 },
      { textKey: "questions.q12.options.b", value: 1 },
      { textKey: "questions.q12.options.c", value: 2 },
      { textKey: "questions.q12.options.d", value: 3 },
    ],
  },
  {
    id: 13,
    textKey: "questions.q13.text",
    options: [
      { textKey: "questions.q13.options.a", value: 0 },
      { textKey: "questions.q13.options.b", value: 1 },
      { textKey: "questions.q13.options.c", value: 2 },
      { textKey: "questions.q13.options.d", value: 3 },
    ],
  },
  {
    id: 14,
    textKey: "questions.q14.text",
    options: [
      { textKey: "questions.q14.options.a", value: 0 },
      { textKey: "questions.q14.options.b", value: 1 },
      { textKey: "questions.q14.options.c", value: 2 },
      { textKey: "questions.q14.options.d", value: 3 },
    ],
  },
  {
    id: 15,
    textKey: "questions.q15.text",
    multi: true,
    options: [
      { textKey: "questions.q15.options.a", value: 1 },
      { textKey: "questions.q15.options.b", value: 1 },
      { textKey: "questions.q15.options.c", value: 1 },
      { textKey: "questions.q15.options.d", value: 1 },
      { textKey: "questions.q15.options.e", value: 1 },
    ],
  },
  {
    id: 16,
    textKey: "questions.q16.text",
    options: [
      { textKey: "questions.q16.options.a", value: 0 },
      { textKey: "questions.q16.options.b", value: 1 },
      { textKey: "questions.q16.options.c", value: 2 },
      { textKey: "questions.q16.options.d", value: 3 },
    ],
  },
  {
    id: 17,
    textKey: "questions.q17.text",
    options: [
      { textKey: "questions.q17.options.a", value: 0 },
      { textKey: "questions.q17.options.b", value: 1 },
      { textKey: "questions.q17.options.c", value: 2 },
      { textKey: "questions.q17.options.d", value: 3 },
    ],
  },
  {
    id: 18,
    textKey: "questions.q18.text",
    multi: true,
    options: [
      { textKey: "questions.q18.options.a", value: 1 },
      { textKey: "questions.q18.options.b", value: 1 },
      { textKey: "questions.q18.options.c", value: 1 },
      { textKey: "questions.q18.options.d", value: 1 },
      { textKey: "questions.q18.options.e", value: 1 },
    ],
  },
  {
    id: 19,
    textKey: "questions.q19.text",
    options: [
      { textKey: "questions.q19.options.a", value: 0 },
      { textKey: "questions.q19.options.b", value: 1 },
      { textKey: "questions.q19.options.c", value: 2 },
      { textKey: "questions.q19.options.d", value: 3 },
    ],
  },
  {
    id: 20,
    textKey: "questions.q20.text",
    multi: true,
    options: [
      { textKey: "questions.q20.options.a", value: 1 },
      { textKey: "questions.q20.options.b", value: 1 },
      { textKey: "questions.q20.options.c", value: 1 },
      { textKey: "questions.q20.options.d", value: 1 },
      { textKey: "questions.q20.options.e", value: 1 },
    ],
  },
  {
    id: 21,
    textKey: "questions.q21.text",
    options: [
      { textKey: "questions.q21.options.a", value: 0 },
      { textKey: "questions.q21.options.b", value: 1 },
      { textKey: "questions.q21.options.c", value: 2 },
      { textKey: "questions.q21.options.d", value: 3 },
    ],
  },
  {
    id: 22,
    textKey: "questions.q22.text",
    options: [
      { textKey: "questions.q22.options.a", value: 0 },
      { textKey: "questions.q22.options.b", value: 1 },
      { textKey: "questions.q22.options.c", value: 2 },
      { textKey: "questions.q22.options.d", value: 3 },
    ],
  },
  {
    id: 23,
    textKey: "questions.q23.text",
    multi: true,
    options: [
      { textKey: "questions.q23.options.a", value: 1 },
      { textKey: "questions.q23.options.b", value: 1 },
      { textKey: "questions.q23.options.c", value: 1 },
      { textKey: "questions.q23.options.d", value: 1 },
      { textKey: "questions.q23.options.e", value: 1 },
    ],
  },
  {
    id: 24,
    textKey: "questions.q24.text",
    options: [
      { textKey: "questions.q24.options.a", value: 0 },
      { textKey: "questions.q24.options.b", value: 1 },
      { textKey: "questions.q24.options.c", value: 2 },
      { textKey: "questions.q24.options.d", value: 3 },
    ],
  },
  {
    id: 25,
    textKey: "questions.q25.text",
    multi: true,
    options: [
      { textKey: "questions.q25.options.a", value: 1 },
      { textKey: "questions.q25.options.b", value: 1 },
      { textKey: "questions.q25.options.c", value: 1 },
      { textKey: "questions.q25.options.d", value: 1 },
      { textKey: "questions.q25.options.e", value: 1 },
    ],
  },
  {
    id: 26,
    textKey: "questions.q26.text",
    options: [
      { textKey: "questions.q26.options.a", value: 0 },
      { textKey: "questions.q26.options.b", value: 1 },
      { textKey: "questions.q26.options.c", value: 2 },
      { textKey: "questions.q26.options.d", value: 3 },
    ],
  },
  {
    id: 27,
    textKey: "questions.q27.text",
    multi: true,
    options: [
      { textKey: "questions.q27.options.a", value: 1 },
      { textKey: "questions.q27.options.b", value: 1 },
      { textKey: "questions.q27.options.c", value: 1 },
      { textKey: "questions.q27.options.d", value: 1 },
      { textKey: "questions.q27.options.e", value: 1 },
    ],
  },
  {
    id: 28,
    textKey: "questions.q28.text",
    options: [
      { textKey: "questions.q28.options.a", value: 0 },
      { textKey: "questions.q28.options.b", value: 1 },
      { textKey: "questions.q28.options.c", value: 2 },
      { textKey: "questions.q28.options.d", value: 3 },
    ],
  },
  {
    id: 29,
    textKey: "questions.q29.text",
    multi: true,
    options: [
      { textKey: "questions.q29.options.a", value: 1 },
      { textKey: "questions.q29.options.b", value: 1 },
      { textKey: "questions.q29.options.c", value: 1 },
      { textKey: "questions.q29.options.d", value: 1 },
      { textKey: "questions.q29.options.e", value: 1 },
    ],
  },
  {
    id: 30,
    textKey: "questions.q30.text",
    options: [
      { textKey: "questions.q30.options.a", value: 0 },
      { textKey: "questions.q30.options.b", value: 1 },
      { textKey: "questions.q30.options.c", value: 2 },
      { textKey: "questions.q30.options.d", value: 3 },
    ],
  },
  {
    id: 31,
    textKey: "questions.q31.text",
    multi: true,
    options: [
      { textKey: "questions.q31.options.a", value: 1 },
      { textKey: "questions.q31.options.b", value: 1 },
      { textKey: "questions.q31.options.c", value: 1 },
      { textKey: "questions.q31.options.d", value: 1 },
      { textKey: "questions.q31.options.e", value: 1 },
    ],
  },
  {
    id: 32,
    textKey: "questions.q32.text",
    options: [
      { textKey: "questions.q32.options.a", value: 0 },
      { textKey: "questions.q32.options.b", value: 1 },
      { textKey: "questions.q32.options.c", value: 2 },
      { textKey: "questions.q32.options.d", value: 3 },
    ],
  },
  {
    id: 33,
    textKey: "questions.q33.text",
    options: [
      { textKey: "questions.q33.options.a", value: 0 },
      { textKey: "questions.q33.options.b", value: 1 },
      { textKey: "questions.q33.options.c", value: 2 },
      { textKey: "questions.q33.options.d", value: 3 },
    ],
  },
  {
    id: 34,
    textKey: "questions.q34.text",
    multi: true,
    options: [
      { textKey: "questions.q34.options.a", value: 1 },
      { textKey: "questions.q34.options.b", value: 1 },
      { textKey: "questions.q34.options.c", value: 1 },
      { textKey: "questions.q34.options.d", value: 1 },
      { textKey: "questions.q34.options.e", value: 1 },
    ],
  },
  {
    id: 35,
    textKey: "questions.q35.text",
    options: [
      { textKey: "questions.q35.options.a", value: 0 },
      { textKey: "questions.q35.options.b", value: 1 },
      { textKey: "questions.q35.options.c", value: 2 },
      { textKey: "questions.q35.options.d", value: 3 },
    ],
  },
  {
    id: 36,
    textKey: "questions.q36.text",
    multi: true,
    options: [
      { textKey: "questions.q36.options.a", value: 1 },
      { textKey: "questions.q36.options.b", value: 1 },
      { textKey: "questions.q36.options.c", value: 1 },
      { textKey: "questions.q36.options.d", value: 1 },
      { textKey: "questions.q36.options.e", value: 1 },
    ],
  },
  {
    id: 37,
    textKey: "questions.q37.text",
    options: [
      { textKey: "questions.q37.options.a", value: 0 },
      { textKey: "questions.q37.options.b", value: 1 },
      { textKey: "questions.q37.options.c", value: 2 },
      { textKey: "questions.q37.options.d", value: 3 },
    ],
  },
  {
    id: 38,
    textKey: "questions.q38.text",
    multi: true,
    options: [
      { textKey: "questions.q38.options.a", value: 1 },
      { textKey: "questions.q38.options.b", value: 1 },
      { textKey: "questions.q38.options.c", value: 1 },
      { textKey: "questions.q38.options.d", value: 1 },
      { textKey: "questions.q38.options.e", value: 1 },
    ],
  },
  {
    id: 39,
    textKey: "questions.q39.text",
    multi: true,
    options: [
      { textKey: "questions.q39.options.a", value: 1 },
      { textKey: "questions.q39.options.b", value: 1 },
      { textKey: "questions.q39.options.c", value: 1 },
      { textKey: "questions.q39.options.d", value: 1 },
      { textKey: "questions.q39.options.e", value: 1 },
    ],
  },

  {
    id: 40,
    textKey: "questions.q40.text",
    multi: true,
    options: [
      { textKey: "questions.q40.options.a", value: 1 },
      { textKey: "questions.q40.options.b", value: 1 },
      { textKey: "questions.q40.options.c", value: 1 },
      { textKey: "questions.q40.options.d", value: 1 },
      { textKey: "questions.q40.options.e", value: 1 },
    ],
  },
];