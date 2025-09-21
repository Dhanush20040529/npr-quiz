/* import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentForm = () => {
  const [student, setStudent] = useState({ name: "", department: "", year: "" });
  const navigate = useNavigate();

  const handleChange = e => setStudent({ ...student, [e.target.name]: e.target.value });

  // StudentForm.jsx
const handleSubmit = async e => {
  e.preventDefault();
  try {
    const { data } = await axios.post("http://localhost:3500/api/student", student);
    // store the student ID for later use
    navigate("/quiz", { state: { studentId: data._id, name: data.name } });
  } catch (err) {
    console.error(err);
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={student.name} onChange={handleChange} />
      <input name="department" placeholder="Department" value={student.department} onChange={handleChange} />
      <input name="year" placeholder="Year" value={student.year} onChange={handleChange} />
      <button type="submit">Start Quiz</button>
    </form>
  );
};

export default StudentForm;
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const StudentForm = () => {
  const navigate = useNavigate();

     // Redirect already registered user to quiz
  useEffect(() => {
    const registered = localStorage.getItem("registeredStudent");
    if (registered) {
      navigate("/quiz", { state: JSON.parse(registered) });
    }
  }, [navigate]);

  const [form, setForm] = useState({
    name: "",
    department: "",
    year: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:3500/api/student", form);
      // redirect to quiz page with student data
      navigate("/quiz", { state: { studentId: res.data._id } });
      console.log(res.data)

        // Store registered student info in localStorage
      localStorage.setItem(
        "registeredStudent",
        JSON.stringify({ studentId: res.data._id, name: res.data.name })
      );

    } catch (err) {
      if (err.response && err.response.status === 500) {
        setError(err.response.data.message);
        setError("Email already registered");
        console.log("done") // "Email already registered"
      } else {
        setError("Email already registered.");
        console.log(err.response,err.response.status,err.response.message)
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full ">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-wide">
          Student Registration
        </h1>
        {error && <p className="text-red-500 text-center mb-6 font-medium">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              required
              className="peer w-full p-4 text-gray-800 border border-gray-300 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <label
              htmlFor="name"
              className="absolute left-4 -top-3 text-sm text-gray-600 bg-white px-1 transition-all
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-blue-600 peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="department"
              placeholder=" "
              value={form.department}
              onChange={handleChange}
              required
              className="peer w-full p-4 text-gray-800 border border-gray-300 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <label
              htmlFor="department"
              className="absolute left-4 -top-3 text-sm text-gray-600 bg-white px-1 transition-all
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-blue-600 peer-focus:text-sm"
            >
              Department
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="year"
              placeholder=" "
              value={form.year}
              onChange={handleChange}
              required
              className="peer w-full p-4 text-gray-800 border border-gray-300 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <label
              htmlFor="year"
              className="absolute left-4 -top-3 text-sm text-gray-600 bg-white px-1 transition-all
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-blue-600 peer-focus:text-sm"
            >
              Year
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              required
              className="peer w-full p-4 text-gray-800 border border-gray-300 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-3 text-sm text-gray-600 bg-white px-1 transition-all
              peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-blue-600 peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Start Quiz 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
