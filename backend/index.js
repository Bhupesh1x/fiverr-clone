import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import gigRoutes from "./routes/gig.routes.js";
import cors from "cors";

dotenv.config();

const app = express();

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected To Mongo!");
  } catch (error) {
    console.log(error);
  }
}
connectToMongo();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/users", userRoutes);
app.use("/api/gigs", gigRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 500;

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  console.log("Server is running !");
});
