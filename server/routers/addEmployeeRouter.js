import Express from "express";

import {addEmployeeController}  from "../controller/getEmployeeController.js";

const router = Express.Router();
router.post("/", addEmployeeController );
export default router;
