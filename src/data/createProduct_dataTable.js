import pool from "../config/db.js";

const createProductDataTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS product_data (
  product_number VARCHAR(50) ,
  part_number VARCHAR(50) NOT NULL,
  date_stamp DATE DEFAULT NOW(),
  time_stamp TIME DEFAULT NOW(),
  userId INTEGER,
  line VARCHAR(50),
  plan REAL,
  actual REAL,
  defect REAL,
  total_plan REAL,
  total_actual REAL,
  FOREIGN KEY (product_number, date_stamp, time_stamp)
    REFERENCES process_data(product_number, date_stamp, time_stamp),
  FOREIGN KEY (userId) REFERENCES users(id)
);`;

  try {
    await pool.query(queryText);
    console.log("Product table created if not exists");
  } catch (error) {
    console.log("Error creating Product table :", error);
  }
};

export default createProductDataTable;
