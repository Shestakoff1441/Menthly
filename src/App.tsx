import { Route, Routes } from "react-router-dom";

import { QuizPage } from "@/pages/QuizPage";
import { ResultsPage } from "@/pages/ResultPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
};

export default App;
