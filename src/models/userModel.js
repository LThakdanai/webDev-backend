import pool from "../config/db.js";
export const getAllUsersService = async () => {
  const result = await pool.query("SELECT * FROM auth");
  return result.rows;
};

export const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM auth where id = $1", [id]);
  return result.rows[0];
};
export const createUsersService = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO auth (name,email) VALUES ($1,$2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
};
export const updateUsersService = async (id, name, email) => {
  const result = await pool.query(
    "UPDATE auth SET name=$1, email=$2 WHERE id=$3 RETURNING *",
    [name, email, id]
  );
  return result.rows[0];
};
export const deleteUsersService = async (id) => {
  const result = await pool.query("DELETE FROM auth WHERE id = $1 RETURNING *");
  return result.rows[0];
};
