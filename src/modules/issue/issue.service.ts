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

const getSingleIssueFromDB = async (id: number) => {
  const result = await pool.query(
    `
    SELECT * FROM issues WHERE id=$1
    `,
    [id],
  );

  return result.rows[0];
};
export const IssueService = {
  issueIntroDB,
  getAllIssuesFromDB,
  getSingleIssueFromDB,
};
