import Express from "express";

import { getOrderController } from "../controller/getOrderController.js";

const router = Express.Router();
router.get("/", getOrderController);
export default router;
