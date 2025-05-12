import {
  getAllProductDataService,
  getProductDataByRIdService,
  getAllSumPlanService,
  getAllSumActualService,
  getAllSumDefectService,
  getEffService,
  getlineEffService,
} from "../models/productModel.js";

// Standardized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const getAllProductData = async (req, res, next) => {
  try {
    const product = await getAllProductDataService(req.params.id);
    console.log("ID:", req.params.id);
    console.log("Date:", req.params.date_stamp);

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

export const getAllSumPlan = async (req, res, next) => {
  try {
    const product = await getAllSumPlanService(
      req.params.id,
      req.params.date_stamp
    );

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getAllSumActual = async (req, res, next) => {
  try {
    const product = await getAllSumActualService(
      req.params.id,
      req.params.date_stamp
    );

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getAllSumDefect = async (req, res, next) => {
  try {
    const product = await getAllSumDefectService(
      req.params.id,
      req.params.date_stamp
    );

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getEff = async (req, res, next) => {
  try {
    const product = await getEffService(req.params.id, req.params.date_stamp);

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};

export const getLineEff = async (req, res, next) => {
  try {
    const product = await getlineEffService(
      req.params.id,
      req.params.date_stamp,
      req.params.line
    );

    if (!product) return handleResponse(res, 404, "Runner not found");
    handleResponse(res, 200, "runner fetch successfully", product);
  } catch (err) {
    next(err);
  }
};
