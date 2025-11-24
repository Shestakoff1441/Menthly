import { Route, Routes } from "react-router-dom";

import { QuizPage } from "@/pages/QuizPage";
import { ResultsPage } from "@/pages/ResultPage";
import { StartScreen } from "@/pages/StartScreen";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
};

export default App;
