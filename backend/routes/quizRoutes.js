/* import express from "express";
import Question from "../models/Question.js";
import Student from "../models/Student.js";

const router = express.Router();

// Get all questions
router.get("/questions", async (req,res)=>{
  const questions = await Question.find();
  res.json(questions);
});

// Get scoreboard sorted by score descending
router.get("/scoreboard", async (req,res)=>{
  const students = await Student.find().sort({score: -1});
  res.json(students);
});


export default router; */

import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// ✅ Register new student
router.post("/", async (req, res) => {
  const { name, department, year, email } = req.body;

  try {
    // Check if email already exists
    const existingStudent = await Student.findOne({ email });
    console.log(existingStudent)
    if (existingStudent) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const student = new Student({ name, department, year, email });
    await student.save();
    res.json(student);

  } catch (err) {
    res.status(500).json({ message: "Error registering student", error: err });
  }
});

// Update student score
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { score } = req.body;

  try {
    const student = await Student.findById(id);

    if (!student) return res.status(404).json({ message: "Student not found" });

    // ✅ Prevent resubmission
    if (student.score !== null) {
      return res.status(400).json({ message: "Quiz already submitted" });
    }

    student.score = score;
    await student.save();

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Error updating score", error: err });
  }
});


// Get scoreboard sorted by score descending
router.get("/scoreboard", async (req,res)=>{
  const students = await Student.find().sort({score: -1});
  res.json(students);
});

export default router;
