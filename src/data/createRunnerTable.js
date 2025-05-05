import pool from "../config/db.js";

const createRunnerTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS runner (
    runner_id SERIAL,
    raw_video VARCHAR(255),
    stamp_date TIMESTAMP DEFAULT NOW(),
    user_id INTEGER,
    PRIMARY KEY (runner_id, user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);`;

  try {
    await pool.query(queryText);
    console.log("Runner table created if not exists");
  } catch (error) {
    console.log("Error creating Runner table :", error);
  }
};

export default createRunnerTable;
