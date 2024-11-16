import express from "express";
import { getTodos } from "../service/todo.service.js";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodoById,
} from "../repositories/todo.repository.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const todos = await getTodos(userId);
    res.status(200).json({
      data: todos,
    });
  } catch (err) {
    res.status(500).json({
      message: "failed find todos",
    });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json({
      message: "cannot find todos",
    });
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const todoData = req.body;
    const todo = await createTodo(todoData);
    res.status(200).json({
      message: "succes create todo",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(402).json({
      message: "failed create todo",
    });
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const todoId = parseInt(req.params.id);
    const todoData = req.body;
    const newTodo = await updateTodoById(todoId, todoData);
    res.status(200).json({
      message: "succes create todo",
      data: {
        newTodo,
      },
    });
  } catch (err) {
    res.status(402).json({
      message: "failed create todo",
    });
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const todoId = parseInt(req.params.id);
    await deleteTodo(todoId);
    res.status(200).json({
      message: "succes delete todo",
    });
  } catch (err) {
    res.status(402).json({
      message: "failed create todo",
    });
    next(err);
  }
});

export default router;
