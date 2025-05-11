import pool from "../config/db.js";

export const getAllProcessDataService = async (id) => {
  const result = await pool.query(
    "SELECT * FROM process_data WHERE userId =$1",
    [id]
  );
  return result.rows;
};

export const getProcessDataByRIdService = async (id, runner_id) => {
  const result = await pool.query(
    "SELECT * FROM process_data WHERE userId = $1 and runner_id = $2",
    [id, runner_id]
  );
  return result.rows[0];
};
