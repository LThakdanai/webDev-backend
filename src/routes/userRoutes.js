import express from "express";
import {
  createUser,
  deleteUsers,
  getAllUsers,
  getUserById,
  updateUsers,
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

//Authentication
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);

export default router;
