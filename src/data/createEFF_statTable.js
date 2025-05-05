import pool from "../config/db.js";

const createEFF_statTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS eff_stat (
    product_number VARCHAR(50),
    time_stamp TIMESTAMP,
    id INTEGER,
    product VARCHAR(100),
    downtime INTERVAL,
    availability INTERVAL,
    eff FLOAT,
    performance FLOAT,
    quality FLOAT,
    oee FLOAT,
    PRIMARY KEY (product_number, time_stamp, id),
    FOREIGN KEY (product_number, id) REFERENCES product_data(product_number, id)
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
