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
