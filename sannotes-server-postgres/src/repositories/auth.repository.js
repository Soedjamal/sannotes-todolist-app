import prisma from "../config/prisma.js";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const createUser = async (userData) => {
  const user = await prisma.user.create({
    data: {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    },
  });
  return user;
};

export const updateTodoById = async (userId, userData) => {
  const todo = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...userData,
    },
  });
  return todo;
};

export const deleteTodo = async (userId) => {
  const todo = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return todo;
};
