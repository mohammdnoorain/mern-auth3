import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
try {
  
   await mongoose.connect(process.env.MONGO)
   console.log("databse connected");
  
} catch (error) {
    console.log(error);
}
  
const app = express();

app.listen(3000, () => {
  console.log("server listeniing on port 3000");
});
