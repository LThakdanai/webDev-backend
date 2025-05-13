import pool from "../config/db.js";

export const getAllEffStatService = async (id) => {
  const result = await pool.query("SELECT * FROM eff_stat WHERE userId = $1", [
    id,
  ]);
  return result.rows;
};

export const getEffStatByRIdService = async (id, product_number) => {
  const result = await pool.query(
    "SELECT * FROM eff_stat WHERE userId = $1 AND product_number = $2",
    [id, product_number]
  );
  return result.rows[0];
};

export const getAvaService = async (id, date_stamp) => {
  const result = await pool.query(
    "SELECT ROUND(AVG(availability)::numeric, 3) AS avg_ava FROM  eff_stat WHERE userId = $1 AND date_stamp = $2;",
    [id, date_stamp]
  );
  return result.rows[0];
};

export const getPerformanceService = async (id, date_stamp) => {
  const result = await pool.query(
    "SELECT ROUND(AVG(performance)::numeric, 3) AS avg_performance FROM  eff_stat WHERE userId = $1 AND date_stamp = $2;",
    [id, date_stamp]
  );
  return result.rows[0];
};

export const getQualityService = async (id, date_stamp) => {
  const result = await pool.query(
    "SELECT ROUND(AVG(quality)::numeric, 3) AS avg_quality FROM  eff_stat WHERE userId = $1 AND date_stamp = $2;",
    [id, date_stamp]
  );
  return result.rows[0];
};

export const getOeeService = async (id, date_stamp) => {
  const result = await pool.query(
    "SELECT ROUND(((AVG(availability) * AVG(performance) * AVG(quality))/10000)::numeric,3) AS avg_oee FROM  eff_stat WHERE userId = $1 AND date_stamp = $2;",
    [id, date_stamp]
  );
  return result.rows[0];
};
