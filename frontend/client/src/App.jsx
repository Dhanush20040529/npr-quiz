import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./pages/StudentForm.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import Scoreboard from "./pages/Scoreboard.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<StudentForm />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/scoreboard" element={<Scoreboard />} />
    </Routes>
  </Router>
);

export default App;

/* 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StudentForm from "./pages/StudentForm";
import QuizPage from "./pages/QuizPage";
import Scoreboard from "./pages/Scoreboard";

function App() {
  const submitted = localStorage.getItem("quizSubmitted") === "true";
  const hasStudent = !!localStorage.getItem("studentId");

  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/"
          element={
            submitted ? <Navigate to="/scoreboard" replace /> : <StudentForm />
          }
        />

        
        <Route
          path="/quiz"
          element={
            !hasStudent
              ? <Navigate to="/" replace />
              : submitted
              ? <Navigate to="/scoreboard" replace />
              : <QuizPage />
          }
        />

        
        <Route
          path="/scoreboard"
          element={
            submitted ? <Scoreboard /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 */