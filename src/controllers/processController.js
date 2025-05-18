import {
  getAllProcessDataService,
  getProcessDataByRIdService,
  getCtDataService,
} from "../models/processModel.js";

// Standardized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const getAllProcessData = async (req, res, next) => {
  try {
    const process = await getAllProcessDataService(req.params.id);
    if (!process) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", process);
  } catch (err) {
    next(err);
  }
};

export const getProcessDataByRId = async (req, res, next) => {
  try {
    const process = await getProcessDataByRIdService(
      req.params.id,
      req.params.runner_id
    );
    if (!process) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", process);
  } catch (err) {
    next(err);
  }
};

export const getCtData = async (req, res, next) => {
  try {
    const process = await getCtDataService(
      req.params.id,
      req.params.date_stamp,
      req.params.time_stamp
    );
    if (!process) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", process);
  } catch (err) {
    next(err);
  }
};
