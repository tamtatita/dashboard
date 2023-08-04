import Express from "express";

import { chartCountry } from "../controller/getDataRealTimeController.js";
const router = Express.Router();

router.get("/", chartCountry);
export default router;
