import pool from "../config/db.js";

const createRunnerTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS runner (
      runner_id INTEGER,
      raw_video VARCHAR(255),
      date_stamp DATE DEFAULT NOW(),
      userId INTEGER,
      FOREIGN KEY (userId) REFERENCES users(id),
      FOREIGN KEY (runner_id) REFERENCES process_data(runner_id)
    );
  `;

  try {
    await pool.query(queryText);
    console.log("Runner table created if not exists");
  } catch (error) {
    console.log("Error creating Runner table :", error);
  }
};

export default createRunnerTable;
