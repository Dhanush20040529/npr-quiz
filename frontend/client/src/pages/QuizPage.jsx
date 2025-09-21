import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;

const QuizPage = () => {
  const { state: student } = useLocation();
  const navigate = useNavigate();

  // Load saved answers from localStorage only once
  const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
  const savedTime = parseInt(localStorage.getItem("quizTimeLeft"), 10);
  const initialTime = !isNaN(savedTime) ? savedTime : 3600;

  const [answers, setAnswers] = useState(savedAnswers);
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Prevent refresh
  useEffect(() => {
    const handleRefresh = (e) => {
      e.preventDefault();
      e.returnValue = "Refreshing will lose your progress!";
    };
    window.addEventListener("beforeunload", handleRefresh);
    return () => window.removeEventListener("beforeunload", handleRefresh);
  }, []);

  useEffect(() => {
  const handleContextMenu = (e) => e.preventDefault();
  const handleCopyCut = (e) => e.preventDefault();

  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("copy", handleCopyCut);
  document.addEventListener("cut", handleCopyCut);

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("copy", handleCopyCut);
    document.removeEventListener("cut", handleCopyCut);
  };
}, []);


  // Timer countdown
// Timer countdown
useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(prev => {
      if (prev <= 1) {
        clearInterval(timer);
        submitQuiz();
        return 0;
      }

      const newTime = prev - 1;
      localStorage.setItem("quizTimeLeft", newTime); // ✅ save in localStorage
      return newTime;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);


  // Save answers to localStorage when they change
  const handleOptionChange = (qIndex, option) => {
    const newAnswers = { ...answers, [qIndex]: option };
    setAnswers(newAnswers);
    localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
  };

  // Submit quiz and store score in DB
  const submitQuiz = async () => {
  // Calculate score
  let score = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.answer) score += 2;
  });

  try {
    // Save score in DB
    await axios.put(`${API_URL}/api/student/${student.studentId}`, {
      score,
    });

    // Clear localStorage data after saving
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizTimeLeft");
    localStorage.removeItem("quizSubmitted");
    localStorage.removeItem("quizScore");
    localStorage.removeItem("registeredStudent");

  } catch (err) {
    if (err.response?.status === 400 && err.response.data.message === "Quiz already submitted") {
    alert("You have already submitted the quiz!");
     localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizTimeLeft");
    localStorage.removeItem("quizSubmitted");
    localStorage.removeItem("quizScore");
    localStorage.removeItem("registeredStudent")
    navigate("/scoreboard");
  } else {
    console.error(err);
  }
    console.error("Error saving score:", err);
  }

  navigate("/scoreboard");
};


  if (!student?.studentId) {
    navigate("/");
    return null;
  }

  useEffect(() => {
  const submitted = localStorage.getItem("quizSubmitted");
  if (submitted === "true") {
    navigate("/scoreboard");
  }
}, [navigate]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
  <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-extrabold text-gray-800">Quiz</h1>
      <p className="text-xl font-medium text-gray-600">
        Time Left: <span className="text-blue-600">{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</span>
      </p>
    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitQuiz();
      }}
      className="space-y-8"
    >
      {questions.map((q, index) => (
        <div
          key={index}
          className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200"
        >
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Q{index + 1}: {q.question}
          </p>
          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <label key={i} className="flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-200">
                <input
                  type="radio"
                  required
                  name={`question-${index}`}
                  value={opt}
                  checked={answers[index] === opt}
                  onChange={() => handleOptionChange(index, opt)}
                  className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-base text-gray-700 font-medium">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className="text-center mt-8">
        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Submit Quiz
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default QuizPage;

/* 
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import axios from "axios";

const QuizPage = () => {
  const { state: student } = useLocation();
  const navigate = useNavigate();

  // ✅ Load saved progress from localStorage
  const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
  const savedTime = parseInt(localStorage.getItem("quizTimeLeft"), 10);
  const initialTime = !isNaN(savedTime) ? savedTime : 3600; // 1 hour

  const [answers, setAnswers] = useState(savedAnswers);
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // ✅ Prevent refresh
  useEffect(() => {
    const handleRefresh = (e) => {
      e.preventDefault();
      e.returnValue = "You cannot refresh during quiz!";
    };
    window.addEventListener("beforeunload", handleRefresh);
    return () => window.removeEventListener("beforeunload", handleRefresh);
  }, []);

  // ✅ Prevent manual navigation (back/forward buttons)
 

  // ✅ Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        const newTime = prev - 1;
        localStorage.setItem("quizTimeLeft", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [answers]);

  // ✅ Save answers to localStorage
  const handleOptionChange = (qIndex, option) => {
    const newAnswers = { ...answers, [qIndex]: option };
    setAnswers(newAnswers);
    localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
  };

  // ✅ Submit quiz
  const submitQuiz = async () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score += 2;
    });

    try {
      await axios.put(`http://localhost:3500/api/student/${student.studentId}`, { score });
      localStorage.setItem("quizSubmitted", "true");
      localStorage.setItem("quizScore", score);

      localStorage.removeItem("quizAnswers");
      localStorage.removeItem("quizTimeLeft");
    } catch (err) {
      console.error("Error saving score:", err);
    }

    navigate("/scoreboard", { replace: true }); // ✅ forced navigation
  };

  // ✅ Prevent quiz re-entry
  useEffect(() => {
    const submitted = localStorage.getItem("quizSubmitted");
    if (submitted === "true") {
      navigate("/scoreboard", { replace: true });
    }
  }, [navigate]);

  if (!student?.studentId) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div>
      <h1>Quiz</h1>
      <p>
        Time Left: {Math.floor(timeLeft / 60)}:
        {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitQuiz();
        }}
      >
        {questions.map((q, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <p>
              <strong>
                Q{index + 1}: {q.question}
              </strong>
            </p>
            {q.options.map((opt, i) => (
              <label key={i} style={{ display: "block", margin: "5px 0" }}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={opt}
                  checked={answers[index] === opt}
                  onChange={() => handleOptionChange(index, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        ))}

        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default QuizPage;
 */