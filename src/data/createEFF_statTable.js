import pool from "../config/db.js";

const createEFF_statTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS eff_stat (
    product_number VARCHAR(50),
    date_stamp DATE DEFAULT NOW(),
    time_stamp TIME DEFAULT NOW(),
    userId SERIAL,
    product VARCHAR(100),
    downtime INTERVAL,
    availability FLOAT,
    eff FLOAT,
    performance FLOAT,
    quality FLOAT,
    oee FLOAT,
    FOREIGN KEY (product_number, date_stamp, time_stamp)
      REFERENCES process_data(product_number, date_stamp, time_stamp),
    FOREIGN KEY (userId) REFERENCES users(id)
);
`;

  try {
    await pool.query(queryText);
    console.log("EFF table created if not exists");
  } catch (error) {
    console.log("Error creating EFF table :", error);
  }
};

export default createEFF_statTable;
