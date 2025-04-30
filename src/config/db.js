import env from "dotenv";
env.config();

import pkg from "pg";
const { Pool } = pkg;

console.log(process.env.DB_USER);
//console.log(process.env.DB_HOST);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
pool.on("connect", () => {
  console.log("Connection pool estabiesed with database");
});

export default pool;
