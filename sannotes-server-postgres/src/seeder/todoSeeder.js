import prisma from "../config/prisma.js";

function createTodos() {
  const todo = {
    task: "!Belajar programming",
    userId: 1,
  };
  const insertTodo = async () => {
    await prisma.todo.create({
      data: todo,
    });
  };
  insertTodo();
}

createTodos();
