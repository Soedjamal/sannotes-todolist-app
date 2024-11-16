import express from "express";
import { Register } from "../service/auth.service.js";
import { getAllUsers } from "../repositories/auth.repository.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const userData = req.body;
  try {
    const result = await Register(userData);
    res.status(200).json({
      message: "register succes",
      token: result.token,
      user: result.user,
    });
  } catch (err) {
    res.status(400).json({
      message: "register failed",
      error: err.message,
      data: userData,
    });
    next(err);
    console.log(err);
  }
});

router.get("/users", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({
      message: "failed find users",
    });
  }
});

export default router;
