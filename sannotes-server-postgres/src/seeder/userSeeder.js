import prisma from "../config/prisma.js";

const userData = {
  username: "bima",
  email: "bima@gamil.com",
  password: "hdisbdbsj",
};

async function createUser() {
  await prisma.user.create({
    data: userData,
  });
}

createUser();
