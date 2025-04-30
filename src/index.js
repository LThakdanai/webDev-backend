import express from "express";
import cors from "cors";
import env from "dotenv";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";

env.config();

const app = express();
const port = process.env.PORT || 5430;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

//Error handling middleware
app.use(errorHandling);
//Testing Proges connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`the database name is : ${result.rows[0].current_database}`);
});

//Server running
app.listen(port, () => {
  console.log(`Listen port ${port}`);
});
