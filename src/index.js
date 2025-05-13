import express from "express";
import cors from "cors";
import env from "dotenv";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import createRunnerTable from "./data/createRunnerTable.js";
import createProduct_dataTable from "./data/createProduct_dataTable.js";
import createProcess_dataTable from "./data/createProcess_data(realtime)Table.js";
import createEFF_statTable from "./data/createEFF_statTable.js";

env.config();

const app = express();
const port = process.env.PORT || 5430;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes, dataRoutes);

//create table before starting server
const startServer = async () => {
  try {
    await createUserTable();
    await createProcess_dataTable();
    await createRunnerTable();
    await createProduct_dataTable();
    await createEFF_statTable();

    // Start server after tables are ready
    app.listen(port, () => {
      console.log(`Listen port ${port}`);
    });
  } catch (error) {
    console.error("Error setting up database tables:", error);
  }
};

startServer();

//Error handling middleware
app.use(errorHandling);

//Testing ProgPN-000001ces connection
//app.get("/", async (req, res) => {
//  const result = await pool.query("SELECT current_database()");
// res.send(`the database name is : ${result.rows[0].current_database}`);
//});

//Server running
app.listen(port, () => {
  console.log(`Listen port ${port}`);
});
