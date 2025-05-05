import pool from "../config/db.js";

const createProductDataTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS product_data (
    product_number VARCHAR(50),
    part_number VARCHAR(50),
    user_id INTEGER,
    line VARCHAR(100),
    plan NUMERIC,
    actual NUMERIC,
    deflect NUMERIC,
    total_patch NUMERIC,
    total_actual NUMERIC,
    PRIMARY KEY (product_number, part_number, user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);`;

  try {
    await pool.query(queryText);
    console.log("Product table created if not exists");
  } catch (error) {
    console.log("Error creating Product table :", error);
  }
};

export default createProductDataTable;
