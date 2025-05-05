import pool from "../config/db.js";

const createProcessDataTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS process_data (
    runner_id INTEGER,
    product_number VARCHAR(50),
    time_stamp TIMESTAMP,
    user_id INTEGER,
    ct1 FLOAT,
    ct2 FLOAT,
    ct3 FLOAT,
    ct4 FLOAT,
    ct5 FLOAT,
    ctt FLOAT,
    plt1 BOOLEAN,
    plt2 BOOLEAN,
    plt3 BOOLEAN,
    plt4 BOOLEAN,
    plt5 BOOLEAN,
    status BOOLEAN
  );`;

  try {
    await pool.query(queryText);
    console.log("Process table created if not exists");
  } catch (error) {
    console.log("Error creating Process table:", error);
  }
};

export default createProcessDataTable;
