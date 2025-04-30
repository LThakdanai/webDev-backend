import express from "express";
import {
  createUser,
  deleteUsers,
  getAllUsers,
  getUserById,
  updateUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUsers);
router.delete("/user/:id", deleteUsers);

export default router;
