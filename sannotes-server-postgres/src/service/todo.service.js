import { getAllTodos } from "../repositories/todo.repository.js";

export const getTodos = async (id) => {
  const todos = await getAllTodos(id);
  return todos;
};
