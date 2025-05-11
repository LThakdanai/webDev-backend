import {
  getAllRunnerService,
  getRunnerByIdService,
} from "../models/runnerModel.js";

// Standardized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const getAllRunner = async (req, res, next) => {
  try {
    const runner = await getAllRunnerService(req.params.id);
    if (!runner) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", runner);
  } catch (err) {
    next(err);
  }
};

export const getRunnerByID = async (req, res, next) => {
  try {
    const runner = await getRunnerByIdService(
      req.params.id,
      req.params.runner_id
    );
    if (!runner) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", runner);
  } catch (err) {
    next(err);
  }
};
