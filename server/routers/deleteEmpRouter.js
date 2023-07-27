import Express from "express";

import {deleteEmp}  from "../controller/getEmployeeController.js";

const router = Express.Router();
router.delete("/", deleteEmp );
export default router;
