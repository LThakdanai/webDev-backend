import express from "express";
import {
  getAllProductData,
  getProductDataByRId,
  getAllSumPlan,
  getAllSumActual,
  getAllSumDefect,
  getEffProduct,
  getLineEff,
  getSumPlanByTime,
  getSumActualByTime,
} from "../controllers/productController.js";
import {
  getAllRunner,
  getRunnerByID,
} from "../controllers/runnerController.js";
import {
  getAllProcessData,
  getProcessDataByRId,
  getCtData,
} from "../controllers/processController.js";
import {
  getAllEffstat,
  getEffStatByRId,
  getAva,
  getPerformance,
  getQuality,
  getOee,
} from "../controllers/effController.js";

const router = express.Router();

//Service Runner
router.get("/runner/:id/", getAllRunner);
router.get("/runner/:id/:runner_id", getRunnerByID);

//Service process_data
router.get("/process_data/:id/", getAllProcessData);
router.get("/process_data/:id/:runner_id", getProcessDataByRId);
router.get("/ctdata/:id/date/:date_stamp/time/:time_stamp", getCtData);

//Service product_data
router.get("/product_data/:id/", getAllProductData);
router.get("/product_data/:id/:product_number", getProductDataByRId);
router.get("/today_plan/:id/date/:date_stamp", getAllSumPlan);
router.get("/actual/:id/date/:date_stamp", getAllSumActual);
router.get("/defect/:id/date/:date_stamp", getAllSumDefect);
router.get("/efficiency/:id/date/:date_stamp", getEffProduct);
router.get("/lineEff/:id/date/:date_stamp/:line", getLineEff);
router.get("/efficiency/:id/date/:date_stamp", getAllEffstat);

router.get(
  "/plantime/:id/date/:date_stamp/time_start/:time_start/time_end/:time_end",
  getSumPlanByTime
);
router.get(
  "/actualtime/:id/date/:date_stamp/time_start/:time_start/time_end/:time_end",
  getSumActualByTime
);

//Service eff_stat
router.get("/eff_stat/:id/", getAllEffstat);
router.get("/eff_stat/:id/:product_number", getEffStatByRId);
router.get("/ava/:id/date/:date_stamp", getAva);
router.get("/performance/:id/date/:date_stamp", getPerformance);
router.get("/quality/:id/date/:date_stamp", getQuality);
router.get("/oee/:id/date/:date_stamp", getOee);

export default router;
