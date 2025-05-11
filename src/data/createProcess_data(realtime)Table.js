import pool from "../config/db.js";

const createProcessDataTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS process_data (
    runner_id SERIAL,
    product_number VARCHAR(50) UNIQUE,
    date_stamp DATE DEFAULT NOW(),
    time_stamp TIME DEFAULT NOW(),
    userId SERIAL,
    ct1 FLOAT,
    ct2 FLOAT,
    ct3 FLOAT,
    ct4 FLOAT,
    ct5 FLOAT,
    ct6 FLOAT,
    ct7 FLOAT,
    ctt FLOAT,
    plt1 BOOLEAN,
    plt2 BOOLEAN,
    plt3 BOOLEAN,
    status_update BOOLEAN,
    PRIMARY KEY (product_number, date_stamp, time_stamp),
    FOREIGN KEY (runner_id) REFERENCES runner(runner_id),
    FOREIGN KEY (userId) REFERENCES users(id)
  );`;

  try {
    await pool.query(queryText);
    console.log("Process table created if not exists");
  } catch (error) {
    console.log("Error creating Process table:", error);
  }
};

export default createProcessDataTable;
