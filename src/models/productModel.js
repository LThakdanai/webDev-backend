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

export const getEffProductService = async (id, date_stamp) => {
  const result = await pool.query(
    "SELECT ROUND((SUM(actual) * 100.0 / NULLIF(SUM(plan), 0))::numeric, 3) AS ActualPlan_percentage FROM product_data WHERE userId = $1 AND date_stamp = $2",
    [id, date_stamp]
  );
  return result.rows[0];
};

export const getlineEffService = async (id, date_stamp, line) => {
  const result = await pool.query(
    "SELECT ROUND((SUM(actual) * 100.0 / NULLIF(SUM(plan), 0))::numeric, 3) AS Line_ActualPlan_percentage FROM product_data WHERE userId = $1 AND date_stamp = $2 AND line = $3;",
    [id, date_stamp, line]
  );
  return result.rows[0];
};

export const getSumPlanByTimeService = async (
  id,
  date_stamp,
  time_start,
  time_end
) => {
  const result = await pool.query(
    "SELECT SUM(plan) as sum_plan_by_time FROM product_data WHERE userid = $1 AND date_stamp = $2 AND time_stamp BETWEEN $3 AND $4;",
    [id, date_stamp, time_start, time_end]
  );
  return result.rows[0];
};

export const getSumActualByTimeService = async (
  id,
  date_stamp,
  time_start,
  time_end
) => {
  const result = await pool.query(
    "SELECT SUM(actual) as sum_actual_by_time FROM product_data WHERE userid = $1 AND date_stamp = $2 AND time_stamp BETWEEN $3 AND $4;",
    [id, date_stamp, time_start, time_end]
  );
  return result.rows[0];
};
