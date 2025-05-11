import pool from "../config/db.js";

export const getAllRunnerService = async (id) => {
  const result = await pool.query("SELECT * FROM runner WHERE userId =$1", [
    id,
  ]);
  return result.rows;
};

export const getRunnerByIdService = async (id, runner_id) => {
  const result = await pool.query(
    "SELECT * FROM runner WHERE userId = $1 AND runner_id = $2",
    [id, runner_id]
  );
  return result.rows[0];
};
