import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import TaskList from "./components/TasksList";
import MultipleChoiceQuiz from "./components/MultipleChoiceQuestion";
import CodeAnswerQuiz from "./components/CodeAnswerQuiz";
import TrueFalse from "./components/TrueFalse";
import FinalExam from "./components/FinalExam";
import QuizContainer from "./components/QuizContainer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/mcq" element={<MultipleChoiceQuiz />} />
        <Route path="/code" element={<CodeAnswerQuiz />} />
        <Route path="/qz" element={<QuizContainer />} />
        
        <Route path="/tf" element={<TrueFalse />} />
        <Route path="/final" element={<FinalExam />} />
       
       
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
