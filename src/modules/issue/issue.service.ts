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
  const issue = await pool.query(
    `
    SELECT * FROM issues WHERE id=$1
    `,
    [id],
  );

  if (!issue) {
    throw new Error("issue not found");
  }

  return issue.rows[0];
};

const deleteIssueFromDB = async (id: number) => {
  const issueResult = await pool.query(
    `
      SELECT * FROM issues WHERE id=$1
    `,
    [id],
  );

  const issee = issueResult.rows[0];
  if (!issee) {
    throw new Error("Issue not found");
  }

  await pool.query(
    `
        DELETE FROM issues WHERE id=$1
      `,
    [id],
  );
};
export const IssueService = {
  issueIntroDB,
  getAllIssuesFromDB,
  getSingleIssueFromDB,
  deleteIssueFromDB,
};
