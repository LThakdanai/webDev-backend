import express from "express";
import {
  getAllEffstat,
  getAllProcessData,
  getAllProductData,
  getAllRunner,
  getEffStatByRId,
  getProcessDataByRId,
  getProductDataByRId,
  getRunnerByID,
} from "../controllers/dataController.js";

const router = express.Router();

//Service Runner
router.get("/runner/:id/", getAllRunner);
router.get("/runner/:id/:runner_id", getRunnerByID);

//Service process_data
router.get("/process_data/:id/", getAllProcessData);
router.get("/process_data/:id/:runner_id", getProcessDataByRId);

//Service product_data
router.get("/product_data/:id/", getAllProductData);
router.get("/product_data/:id/:product_number", getProductDataByRId);

//Service eff_stat
router.get("/eff_stat/:id/", getAllEffstat);
router.get("/eff_stat/:id/:product_number", getEffStatByRId);

export default router;
