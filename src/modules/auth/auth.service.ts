import { pool } from "../../db/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { IUser } from "./auth.interface";

const createUserIntroDB = async (payload: IUser) => {
  const { name, email, password, role } = payload;

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `
        INSERT INTO users (name,email,password,role) VALUES($1,$2,$3,COALESCE($4,'contributor')) RETURNING *
        `,
    [name, email, hashPassword, role],
  );

  return result.rows[0];
};

const userLogingFromDB = async (payload: {
  email: string;
  password: string;
}) => {
  const { email, password } = payload;

  const userData = await pool.query(
    `
    SELECT * FROM users WHERE email=$1
    `,
    [email],
  );

  const user = userData.rows[0];
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invaild credentials");
  }

  const jwtPayload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(jwtPayload, "sfjsofhs", { expiresIn: "1d" });

  delete user.password;
  return { user, token };
};

export const AuthService = {
  createUserIntroDB,
  userLogingFromDB,
};
