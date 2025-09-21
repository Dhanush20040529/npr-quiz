/* import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  year: String,
  score: Number
});

export default mongoose.model("Student", studentSchema); */


import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  year: { type: String, required: true },
  email: { type: String, required: true, /* unique: true, */ /* index: true  */}, // ✅ unique + index
  score: { type: Number, default: null },
});

export default mongoose.model("Student", studentSchema);

