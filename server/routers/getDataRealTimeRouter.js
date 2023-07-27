import Express from "express";

import { getDataRealTimeController } from "../controller/getDataRealTimeController.js";

const router = Express.Router();
router.get("/", getDataRealTimeController);
export default router;
