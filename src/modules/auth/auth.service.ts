import { pool } from "../../db/db";
import bcrypt from "bcrypt";

const createUserIntroDB = async (payload: any) => {
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

export const AuthService = {
  createUserIntroDB,
};
