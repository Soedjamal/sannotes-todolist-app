import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser } from "../repositories/auth.repository.js";

export const Register = async (userData) => {
  const hashSalt = 10;
  const { username, email, password } = userData;

  if (!username || !email || !password) {
    throw new Error("Username, email, and password are required");
  }

  const hashedPassword = bcrypt.hashSync(password, hashSalt);

  const userPayload = {
    username,
    email,
    password: hashedPassword,
  };

  const createdUser = await createUser(userPayload);

  const secretKey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(
    {
      id: createdUser.id,
      username: createdUser.username,
      email: createdUser.email,
    },
    secretKey,
    { expiresIn: "1h" },
  );

  return {
    token,
    user: {
      id: createdUser.id,
      username: createdUser.username,
      email: createdUser.email,
    },
  };
};
