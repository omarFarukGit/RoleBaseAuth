import { pool } from "../../db/db";

const createUserIntroDB = async (payload: any) => {
  const { name, email, password, role } = payload;
  const result = await pool.query(
    `
        INSERT INTO users (name,email,password,role) VALUES($1,$2,$3,COALESCE($4,'contributor')) RETURNING *
        `,
    [name, email, password, role],
  );

  return result.rows[0];
};

export const AuthService = {
  createUserIntroDB,
};
