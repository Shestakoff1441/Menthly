export interface QuestionOption {
  textKey: string;
  value: number;
  buttonTextKey?: string;
  titleColor?: string;
  imageKey?: string;
}

export type QuestionType = "single" | "multi" | "slider" | "imageChoice" | "dragAndDrop";

export interface SliderConfig {
  min: number;
  max: number;
  step?: number;
  labels?: {
    min?: string;
    max?: string;
  };
}

export interface DragAndDropConfig {
  items: Array<{
    id: number;
    textKey: string;
    value: number;
  }>;
}

export interface Question {
  id: number;
  textKey: string;
  type?: QuestionType;
  multi?: boolean;
  options: QuestionOption[];
  isInfo?: boolean;
  imageKey?: string;
  sliderConfig?: SliderConfig;
  dragAndDropConfig?: DragAndDropConfig;
}

export const questions: Question[] = [
  {
    id: 1,
    textKey: "questions.q1.text",
    options: [
      { textKey: "questions.q1.options.a", value: 1 },
      { textKey: "questions.q1.options.b", value: 2 },
      { textKey: "questions.q1.options.c", value: 3 },
      { textKey: "questions.q1.options.d", value: 4 },
    ],
  },
  {
    id: 2,
    textKey: "questions.q2.text",
    type: "imageChoice",
    options: [
      { textKey: "questions.q2.options.a", value: 1, imageKey: "image_1.png" },
      { textKey: "questions.q2.options.b", value: 2, imageKey: "image_1.png" },
      { textKey: "questions.q2.options.c", value: 3, imageKey: "image_1.png" },
      { textKey: "questions.q2.options.d", value: 4, imageKey: "image_1.png" },
    ],
  },
  {
    id: 3,
    textKey: "questions.q3.text",
    type: "dragAndDrop",
    dragAndDropConfig: {
      items: [
        { id: 1, textKey: "questions.q3.options.a", value: 1 },
        { id: 2, textKey: "questions.q3.options.b", value: 1 },
        { id: 3, textKey: "questions.q3.options.c", value: 1 },
        { id: 4, textKey: "questions.q3.options.d", value: 1 },
        { id: 5, textKey: "questions.q3.options.e", value: 1 },
      ],
    },
    options: [],
  },
  {
    id: 4,
    textKey: "questions.q4.text",
    options: [
      { textKey: "questions.q4.options.a", value: 1 },
      { textKey: "questions.q4.options.b", value: 2 },
      { textKey: "questions.q4.options.c", value: 3 },
      { textKey: "questions.q4.options.d", value: 4 },
    ],
  },
  {
    id: 5,
    textKey: "questions.q5.text",
    type: "multi",
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
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 4,
      step: 1,
      labels: {
        min: "questions.q6.options.a",
        max: "questions.q6.options.d",
      },
    },
    options: [
      { textKey: "questions.q6.options.a", value: 1 },
      { textKey: "questions.q6.options.b", value: 2 },
      { textKey: "questions.q6.options.c", value: 3 },
      { textKey: "questions.q6.options.d", value: 4 },
    ],
  },
  {
    id: 100,
    textKey: "info.info1.title",
    isInfo: true,
    imageKey: "info1.jpg",
    options: [
      { textKey: "info.info1.description", value: 0 },
    ],
  },
  {
    id: 7,
    textKey: "questions.q7.text",
    options: [
      { textKey: "questions.q7.options.a", value: 1 },
      { textKey: "questions.q7.options.b", value: 2 },
      { textKey: "questions.q7.options.c", value: 3 },
      { textKey: "questions.q7.options.d", value: 4 },
    ],
  },
  {
    id: 8,
    textKey: "questions.q8.text",
    type: "multi",
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
      { textKey: "questions.q9.options.a", value: 1 },
      { textKey: "questions.q9.options.b", value: 2 },
      { textKey: "questions.q9.options.c", value: 3 },
      { textKey: "questions.q9.options.d", value: 4 },
    ],
  },
  {
    id: 10,
    textKey: "questions.q10.text",
    options: [
      { textKey: "questions.q10.options.a", value: 1 },
      { textKey: "questions.q10.options.b", value: 2 },
      { textKey: "questions.q10.options.c", value: 3 },
      { textKey: "questions.q10.options.d", value: 4 },
    ],
  },
  {
    id: 11,
    textKey: "questions.q11.text",
    type: "dragAndDrop",
    dragAndDropConfig: {
      items: [
        { id: 1, textKey: "questions.q11.options.a", value: 1 },
        { id: 2, textKey: "questions.q11.options.b", value: 1 },
        { id: 3, textKey: "questions.q11.options.c", value: 1 },
        { id: 4, textKey: "questions.q11.options.d", value: 1 },
        { id: 5, textKey: "questions.q11.options.e", value: 1 },
      ],
    },
    options: [],
  },
  {
    id: 12,
    textKey: "questions.q12.text",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 4,
      step: 1,
      labels: {
        min: "questions.q12.options.a",
        max: "questions.q12.options.d",
      },
    },
    options: [
      { textKey: "questions.q12.options.a", value: 1 },
      { textKey: "questions.q12.options.b", value: 2 },
      { textKey: "questions.q12.options.c", value: 3 },
      { textKey: "questions.q12.options.d", value: 4 },
    ],
  },
  {
    id: 13,
    textKey: "questions.q13.text",
    options: [
      { textKey: "questions.q13.options.a", value: 1 },
      { textKey: "questions.q13.options.b", value: 2 },
      { textKey: "questions.q13.options.c", value: 3 },
      { textKey: "questions.q13.options.d", value: 4 },
    ],
  },
  {
    id: 14,
    textKey: "questions.q14.text",
    options: [
      { textKey: "questions.q14.options.a", value: 1 },
      { textKey: "questions.q14.options.b", value: 2 },
      { textKey: "questions.q14.options.c", value: 3 },
      { textKey: "questions.q14.options.d", value: 4 },
    ],
  },
  {
    id: 15,
    textKey: "questions.q15.text",
    type: "multi",
    options: [
      { textKey: "questions.q15.options.a", value: 1 },
      { textKey: "questions.q15.options.b", value: 1 },
      { textKey: "questions.q15.options.c", value: 1 },
      { textKey: "questions.q15.options.d", value: 1 },
      { textKey: "questions.q15.options.e", value: 1 },
    ],
  },
  {
    id: 101,
    textKey: "info.info2.title",
    isInfo: true,
    imageKey: "info2.jpg",
    options: [
      { textKey: "info.info2.description", value: 0 },
    ],
  },
  {
    id: 16,
    textKey: "questions.q16.text",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 4,
      step: 1,
      labels: {
        min: "questions.q16.options.a",
        max: "questions.q16.options.d",
      },
    },
    options: [
      { textKey: "questions.q16.options.a", value: 1 },
      { textKey: "questions.q16.options.b", value: 2 },
      { textKey: "questions.q16.options.c", value: 3 },
      { textKey: "questions.q16.options.d", value: 4 },
    ],
  },
  {
    id: 17,
    textKey: "questions.q17.text",
    options: [
      { textKey: "questions.q17.options.a", value: 1 },
      { textKey: "questions.q17.options.b", value: 2 },
      { textKey: "questions.q17.options.c", value: 3 },
      { textKey: "questions.q17.options.d", value: 4 },
    ],
  },
  {
    id: 18,
    textKey: "questions.q18.text",
    type: "multi",
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
      { textKey: "questions.q19.options.a", value: 1 },
      { textKey: "questions.q19.options.b", value: 2 },
      { textKey: "questions.q19.options.c", value: 3 },
      { textKey: "questions.q19.options.d", value: 4 },
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
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 4,
      step: 1,
      labels: {
        min: "questions.q21.options.a",
        max: "questions.q21.options.d",
      },
    },
    options: [
      { textKey: "questions.q21.options.a", value: 1 },
      { textKey: "questions.q21.options.b", value: 2 },
      { textKey: "questions.q21.options.c", value: 3 },
      { textKey: "questions.q21.options.d", value: 4 },
    ],
  },
  {
    id: 22,
    textKey: "questions.q22.text",
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 4,
      step: 1,
      labels: {
        min: "questions.q22.options.a",
        max: "questions.q22.options.d",
      },
    },
    options: [
      { textKey: "questions.q22.options.a", value: 1 },
      { textKey: "questions.q22.options.b", value: 2 },
      { textKey: "questions.q22.options.c", value: 3 },
      { textKey: "questions.q22.options.d", value: 4 },
    ],
  },
  {
    id: 102,
    textKey: "info.info3.title",
    isInfo: true,
    imageKey: "info3.jpg",
    options: [
      { textKey: "info.info3.description", value: 0 },
    ],
  },
  {
    id: 23,
    textKey: "questions.q23.text",
    type: "multi",
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
    type: "imageChoice",
    options: [
      { textKey: "questions.q24.options.a", value: 1, imageKey: "image_1.png" },
      { textKey: "questions.q24.options.b", value: 2, imageKey: "image_1.png" },
      { textKey: "questions.q24.options.c", value: 3, imageKey: "image_1.png" },
      { textKey: "questions.q24.options.d", value: 4, imageKey: "image_1.png" },
    ],
  },
  {
    id: 25,
    textKey: "questions.q25.text",
    type: "multi",
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
    type: "slider",
    sliderConfig: {
      min: 1,
      max: 4,
      step: 1,
      labels: {
        min: "questions.q26.options.a",
        max: "questions.q26.options.d",
      },
    },
    options: [
      { textKey: "questions.q26.options.a", value: 1 },
      { textKey: "questions.q26.options.b", value: 2 },
      { textKey: "questions.q26.options.c", value: 3 },
      { textKey: "questions.q26.options.d", value: 4 },
    ],
  },
  // {
  //   id: 27,
  //   textKey: "questions.q27.text",
  //   type: "single",
  //   options: [
  //     { textKey: "questions.q27.options.a", value: 1 },
  //     { textKey: "questions.q27.options.b", value: 2 },
  //     { textKey: "questions.q27.options.c", value: 3 },
  //     { textKey: "questions.q27.options.d", value: 4 },
  //     { textKey: "questions.q27.options.e", value: 5 },
  //   ],
  // },
  // {
  //   id: 28,
  //   textKey: "questions.q28.text",
  //   type: "slider",
  //   sliderConfig: {
  //     min: 1,
  //     max: 4,
  //     step: 1,
  //     labels: {
  //       min: "questions.q28.options.a",
  //       max: "questions.q28.options.d",
  //     },
  //   },
  //   options: [
  //     { textKey: "questions.q28.options.a", value: 1 },
  //     { textKey: "questions.q28.options.b", value: 2 },
  //     { textKey: "questions.q28.options.c", value: 3 },
  //     { textKey: "questions.q28.options.d", value: 4 },
  //   ],
  // },
  // {
  //   id: 29,
  //   textKey: "questions.q29.text",
  //   type: "multi",
  //   options: [
  //     { textKey: "questions.q29.options.a", value: 1 },
  //     { textKey: "questions.q29.options.b", value: 1 },
  //     { textKey: "questions.q29.options.c", value: 1 },
  //     { textKey: "questions.q29.options.d", value: 1 },
  //     { textKey: "questions.q29.options.e", value: 1 },
  //   ],
  // },
  // {
  //   id: 30,
  //   textKey: "questions.q30.text",
  //   type: "slider",
  //   sliderConfig: {
  //     min: 1,
  //     max: 4,
  //     step: 1,
  //     labels: {
  //       min: "questions.q30.options.a",
  //       max: "questions.q30.options.d",
  //     },
  //   },
  //   options: [
  //     { textKey: "questions.q30.options.a", value: 1 },
  //     { textKey: "questions.q30.options.b", value: 2 },
  //     { textKey: "questions.q30.options.c", value: 3 },
  //     { textKey: "questions.q30.options.d", value: 4 },
  //   ],
  // },
  // {
  //   id: 31,
  //   textKey: "questions.q31.text",
  //   type: "multi",
  //   options: [
  //     { textKey: "questions.q31.options.a", value: 1 },
  //     { textKey: "questions.q31.options.b", value: 1 },
  //     { textKey: "questions.q31.options.c", value: 1 },
  //     { textKey: "questions.q31.options.d", value: 1 },
  //     { textKey: "questions.q31.options.e", value: 1 },
  //   ],
  // },
  // {
  //   id: 103,
  //   textKey: "info.info4.title",
  //   isInfo: true,
  //   imageKey: "info4.jpg",
  //   options: [
  //     { textKey: "info.info4.description", value: 0 },
  //   ],
  // },
  // {
  //   id: 32,
  //   textKey: "questions.q32.text",
  //   type: "slider",
  //   sliderConfig: {
  //     min: 1,
  //     max: 4,
  //     step: 1,
  //     labels: {
  //       min: "questions.q32.options.a",
  //       max: "questions.q32.options.d",
  //     },
  //   },
  //   options: [
  //     { textKey: "questions.q32.options.a", value: 1 },
  //     { textKey: "questions.q32.options.b", value: 2 },
  //     { textKey: "questions.q32.options.c", value: 3 },
  //     { textKey: "questions.q32.options.d", value: 4 },
  //   ],
  // },
  // {
  //   id: 33,
  //   textKey: "questions.q33.text",
  //   type: "slider",
  //   sliderConfig: {
  //     min: 1,
  //     max: 4,
  //     step: 1,
  //     labels: {
  //       min: "questions.q33.options.a",
  //       max: "questions.q33.options.d",
  //     },
  //   },
  //   options: [
  //     { textKey: "questions.q33.options.a", value: 1 },
  //     { textKey: "questions.q33.options.b", value: 2 },
  //     { textKey: "questions.q33.options.c", value: 3 },
  //     { textKey: "questions.q33.options.d", value: 4 },
  //   ],
  // },
  // {
  //   id: 34,
  //   textKey: "questions.q34.text",
  //   type: "multi",
  //   options: [
  //     { textKey: "questions.q34.options.a", value: 1 },
  //     { textKey: "questions.q34.options.b", value: 1 },
  //     { textKey: "questions.q34.options.c", value: 1 },
  //     { textKey: "questions.q34.options.d", value: 1 },
  //     { textKey: "questions.q34.options.e", value: 1 },
  //   ],
  // },
  // {
  //   id: 35,
  //   textKey: "questions.q35.text",
  //   type: "slider",
  //   sliderConfig: {
  //     min: 1,
  //     max: 4,
  //     step: 1,
  //     labels: {
  //       min: "questions.q35.options.a",
  //       max: "questions.q35.options.d",
  //     },
  //   },
  //   options: [
  //     { textKey: "questions.q35.options.a", value: 1 },
  //     { textKey: "questions.q35.options.b", value: 2 },
  //     { textKey: "questions.q35.options.c", value: 3 },
  //     { textKey: "questions.q35.options.d", value: 4 },
  //   ],
  // },
  // {
  //   id: 36,
  //   textKey: "questions.q36.text",
  //   type: "multi",
  //   options: [
  //     { textKey: "questions.q36.options.a", value: 1 },
  //     { textKey: "questions.q36.options.b", value: 1 },
  //     { textKey: "questions.q36.options.c", value: 1 },
  //     { textKey: "questions.q36.options.d", value: 1 },
  //     { textKey: "questions.q36.options.e", value: 1 },
  //   ],
  // },
  // {
  //   id: 37,
  //   textKey: "questions.q37.text",
  //   type: "slider",
  //   sliderConfig: {
  //     min: 1,
  //     max: 4,
  //     step: 1,
  //     labels: {
  //       min: "questions.q37.options.a",
  //       max: "questions.q37.options.d",
  //     },
  //   },
  //   options: [
  //     { textKey: "questions.q37.options.a", value: 1 },
  //     { textKey: "questions.q37.options.b", value: 2 },
  //     { textKey: "questions.q37.options.c", value: 3 },
  //     { textKey: "questions.q37.options.d", value: 4 },
  //   ],
  // },
  // {
  //   id: 104,
  //   textKey: "info.info5.title",
  //   isInfo: true,
  //   imageKey: "info5.jpg",
  //   options: [
  //     { textKey: "info.info5.description", value: 0 },
  //   ],
  // },
  // {
  //   id: 38,
  //   textKey: "questions.q38.text",
  //   type: "multi",
  //   options: [
  //     { textKey: "questions.q38.options.a", value: 1 },
  //     { textKey: "questions.q38.options.b", value: 1 },
  //     { textKey: "questions.q38.options.c", value: 1 },
  //     { textKey: "questions.q38.options.d", value: 1 },
  //     { textKey: "questions.q38.options.e", value: 1 },
  //   ],
  // },
  // {
  //   id: 39,
  //   textKey: "questions.q39.text",
  //   type: "multi",
  //   options: [
  //     { textKey: "questions.q39.options.a", value: 1 },
  //     { textKey: "questions.q39.options.b", value: 1 },
  //     { textKey: "questions.q39.options.c", value: 1 },
  //     { textKey: "questions.q39.options.d", value: 1 },
  //     { textKey: "questions.q39.options.e", value: 1 },
  //   ],
  // },
  // {
  //   id: 40,
  //   textKey: "questions.q40.text",
  //   type: "multi",
  //   options: [
  //     { textKey: "questions.q40.options.a", value: 1 },
  //     { textKey: "questions.q40.options.b", value: 1 },
  //     { textKey: "questions.q40.options.c", value: 1 },
  //     { textKey: "questions.q40.options.d", value: 1 },
  //     { textKey: "questions.q40.options.e", value: 1 },
  //   ],
  // },
];