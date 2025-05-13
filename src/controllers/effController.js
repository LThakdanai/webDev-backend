import {
  getAllEffStatService,
  getAvaService,
  getEffStatByRIdService,
  getPerformanceService,
  getQualityService,
  getOeeService,
} from "../models/effModel.js";

// Standardized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
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

export const getAva = async (req, res, next) => {
  try {
    const product = await getAvaService(req.params.id, req.params.date_stamp);

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getPerformance = async (req, res, next) => {
  try {
    const product = await getPerformanceService(
      req.params.id,
      req.params.date_stamp
    );

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getQuality = async (req, res, next) => {
  try {
    const product = await getQualityService(
      req.params.id,
      req.params.date_stamp
    );

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getOee = async (req, res, next) => {
  try {
    const product = await getOeeService(req.params.id, req.params.date_stamp);

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};
