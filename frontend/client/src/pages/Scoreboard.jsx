import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const API_URL = import.meta.env.VITE_SERVER_URL;

const Scoreboard = () => {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const { data } = await axios.get(/* "http://localhost:3500/api/quiz/scoreboard" */ `${API_URL}/api/quiz/scoreboard`);
        setScores(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchScores();
  }, []);

  // At the start of QuizPage



  return (
  <div className="bg-gray-900 min-h-screen p-8 flex items-center justify-center">
  <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl max-w-4xl w-full transform transition-all duration-500 hover:scale-[1.01]">
    <div className="text-center mb-8">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wider mb-2">
        Leaderboard
      </h1>
      <p className="text-gray-400 text-lg">Top performers from the recent quiz</p>
    </div>

    <div className="overflow-hidden rounded-xl shadow-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-4 text-left font-bold text-gray-200 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-4 text-left font-bold text-gray-200 uppercase tracking-wider">
              Department
            </th>
            <th className="px-6 py-4 text-left font-bold text-gray-200 uppercase tracking-wider">
              Year
            </th>
            <th className="px-6 py-4 text-left font-bold text-gray-200 uppercase tracking-wider">
              Score
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {scores.map((s, i) => (
            <tr key={i} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ease-in-out">
              <td className="px-6 py-4 whitespace-nowrap text-gray-200 font-medium">
                <span className="inline-block w-8 text-center text-blue-400 font-extrabold">{i + 1}.</span> {s.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                {s.department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                {s.year}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-lg font-bold text-purple-400">
                {s.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
    
  );
};

export default Scoreboard;
