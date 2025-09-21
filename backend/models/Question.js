import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String
});

export default mongoose.model("Question", questionSchema);
