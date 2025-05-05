import pool from "../config/db.js";

export const getAllRunnerService = async (id) => {
  const result = await pool.query("SELECT * FROM runner WHERE id =$1", [id]);
  return result.rows;
};

export const getRunnerByIdService = async (id, runner_id) => {
  const result = await pool.query(
    "SELECT * FROM runner WHERE id = $1 AND runner_id = $2",
    [id, runner_id]
  );
  return result.rows[0];
};

export const getAllProcessDataService = async (id) => {
  const result = await pool.query("SELECT * FROM process_data WHERE id =$1", [
    id,
  ]);
  return result.rows;
};

export const getProcessDataByRIdService = async (id, runner_id) => {
  const result = await pool.query(
    "SELECT * FROM process_data WHERE id = $1 and runner_id = $2",
    [id, runner_id]
  );
  return result.rows[0];
};

export const getAllProductDataService = async (id) => {
  const result = await pool.query("SELECT * FROM product_data WHERE id = $1", [
    id,
  ]);
  return result.rows;
};

export const getProductDataByRIdService = async (id, product_number) => {
  const result = await pool.query(
    "SELECT * FROM product_data WHERE id = $1 and product_number = $2",
    [id, product_number]
  );
  return result.rows[0];
};

export const getAllEffStatService = async (id) => {
  const result = await pool.query("SELECT * FROM eff_stat WHERE id = $1", [id]);
  return result.rows;
};

export const getEffStatByRIdService = async (id, product_number) => {
  const result = await pool.query(
    "SELECT * FROM eff_stat WHERE id = $1 AND product_number = $2",
    [id, product_number]
  );
  return result.rows[0];
};
