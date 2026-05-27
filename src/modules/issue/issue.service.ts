import { pool } from "../../db/db";

const issueIntroDB = async (payload: any) => {
  const { id, title, description, status } = payload;
  const result = await pool.query(
    `
        INSERT INTO issues(
        id,title,description,status
        ) VALUES($1,$2,$3,$4)
        `,
    [id, title, description, status],
  );
  return result.rows[0];
};
const getAllIssuesFromDB = async () => {
  const result = await pool.query(`
        SELECT * FROM issues
        `);

  return result;
};

export const IssueService = {
  issueIntroDB,
  getAllIssuesFromDB
};

