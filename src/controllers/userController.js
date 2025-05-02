import {
  createUsersService,
  deleteUsersService,
  getAllUsersService,
  getUserByIdService,
  updateUsersService,
} from "../models/userModel.js";

// Standardized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "User fetch successfully", users);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await createUsersService(name, email, password);
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const users = await getUserByIdService(req.params.id);
    if (!users) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User fetch successfully", users);
  } catch (err) {
    next(err);
  }
};

export const updateUsers = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const updatedUser = await updateUsersService(
      req.params.id,
      name,
      email,
      password
    );
    if (!updatedUser) return handleResponse(res, 404, "Users not found");
    handleResponse(res, 200, "Users updated successfully", updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUsers = async (req, res, next) => {
  try {
    const deletedUser = await deleteUsersService(req.params.id);
    if (!deletedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "Users deleted successfully", deletedUser);
  } catch (err) {
    next(err);
  }
};
