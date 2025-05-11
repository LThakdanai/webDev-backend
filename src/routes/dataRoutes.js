import express from "express";
import {
  getAllProductData,
  getProductDataByRId,
  getAllSumPlan,
  getAllSumActual,
  getAllSumDefect,
} from "../controllers/productController.js";
import {
  getAllRunner,
  getRunnerByID,
} from "../controllers/runnerController.js";
import {
  getAllProcessData,
  getProcessDataByRId,
} from "../controllers/processController.js";
import {
  getAllEffstat,
  getEffStatByRId,
} from "../controllers/effController.js";

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
router.get("/today_plan/:id/date/:date_stamp", getAllSumPlan);
router.get("/actual/:id/date/:date_stamp", getAllSumActual);
router.get("/defect/:id/date/:date_stamp", getAllSumDefect);

//Service eff_stat
router.get("/eff_stat/:id/", getAllEffstat);
router.get("/eff_stat/:id/:product_number", getEffStatByRId);

export default router;
