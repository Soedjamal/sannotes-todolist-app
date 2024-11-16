import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoController from "./controllers/todo.controller.js";
import authController from "./controllers/auth.controller.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "App already",
  });
});

app.use("/todos", todoController);
app.use("/", authController);
