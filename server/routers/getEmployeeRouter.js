import Express from "express";

import { getEmployeeController } from "../controller/getEmployeeController.js";

const router = Express.Router();
router.get("/", getEmployeeController);
export default router;
