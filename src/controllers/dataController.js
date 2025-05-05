import {
  getAllEffStatService,
  getAllProcessDataService,
  getAllProductDataService,
  getAllRunnerService,
  getEffStatByRIdService,
  getProcessDataByRIdService,
  getProductDataByRIdService,
  getRunnerByIdService,
} from "../models/dataModel.js";

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

export const getAllProductData = async (req, res, next) => {
  try {
    const product = await getAllProductDataService(req.params.id);
    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getProductDataByRId = async (req, res, next) => {
  try {
    const product = await getProductDataByRIdService(
      req.params.id,
      req.params.product_number
    );
    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getAllEffstat = async (req, res, next) => {
  try {
    const eff = await getAllEffStatService(req.params.id);
    if (!eff) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", eff);
  } catch (err) {
    next(err);
  }
};

export const getEffStatByRId = async (req, res, next) => {
  try {
    const eff = await getEffStatByRIdService(
      req.params.id,
      req.params.product_number
    );
    if (!eff) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", eff);
  } catch (err) {
    next(err);
  }
};
