import prisma from "../config/prisma.js";

export const getAllTodos = async (id) => {
  const todos = await prisma.todo.findMany({
    where: {
      userId: id,
    },
  });
  return todos;
};

export const createTodo = async (todoData) => {
  const todo = await prisma.todo.create({
    data: {
      task: todoData.task,
      userId: 1,
    },
  });
  return todo;
};

export const updateTodoById = async (todoId, todoData) => {
  const todo = await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      task: todoData.task,
    },
  });
  return todo;
};

export const deleteTodo = async (todoId) => {
  const todo = await prisma.todo.delete({
    where: {
      id: todoId,
    },
  });
  return todo;
};
