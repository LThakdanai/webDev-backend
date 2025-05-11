import pool from "../config/db.js";

export const getAllProductDataService = async (id) => {
  const result = await pool.query(
    "SELECT * FROM product_data WHERE userId = $1",
    [id]
  );
  return result.rows;
};

export const getProductDataByRIdService = async (id, product_number) => {
  const result = await pool.query(
    "SELECT * FROM product_data WHERE userId = $1 and product_number = $2",
    [id, product_number]
  );
  return result.rows[0];
};

export const getAllSumPlanService = async (id, date_stamp) => {
  const result = await pool.query(
    "SELECT SUM(plan) AS total_plan_sum FROM product_data WHERE userId = $1 AND date_stamp = $2",
    [id, date_stamp]
  );
  return result.rows[0];
};

export const getAllSumActualService = async (id, date_stamp) => {
  const result = await pool.query(
    "SELECT SUM(actual) AS total_actual_sum FROM product_data WHERE userId = $1 AND date_stamp = $2",
    [id, date_stamp]
  );
  return result.rows[0];
};

export const getAllSumDefectService = async (id, date_stamp) => {
  const result = await pool.query(
    "SELECT SUM(defect) AS total_defect_sum FROM product_data WHERE userId = $1 AND date_stamp = $2",
    [id, date_stamp]
  );
  return result.rows[0];
};
