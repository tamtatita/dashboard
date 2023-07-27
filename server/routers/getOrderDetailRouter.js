import Express from "express";

import { getOrderDetailController } from "../controller/getOrderDetailController.js";

const router = Express.Router();
router.get("/", getOrderDetailController);
export default router;
