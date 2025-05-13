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

export const getCtDataService = async (id, date_stamp, time_stamp) => {
  const result = await pool.query(
    "SELECT * FROM process_data WHERE userId = $1 AND date_stamp = $2 AND time_stamp = $3",
    [id, date_stamp, time_stamp]
  );
  return result.rows[0];
};
