import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
dotenv.config();
try {
  await mongoose.connect(process.env.MONGO);
  console.log("databse connected");
} catch (error) {
  console.log(error);
}

const app = express();

app.listen(3000, () => {
  console.log("server listeniing on port 3000");
});

app.use("/api/user", userRoutes);
