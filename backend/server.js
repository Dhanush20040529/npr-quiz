import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import studentRoutes from "./routes/studentRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/student", studentRoutes);
app.use("/api/quiz", quizRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
