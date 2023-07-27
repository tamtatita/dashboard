import Express from "express";

import { getCustomerController } from "../controller/getCustomerController.js";
import { getCustomerBuyOrderController } from "../controller/getCustomerController.js";
const router = Express.Router();
router.get("/", getCustomerController);
router.get("/cusbuyorder", getCustomerBuyOrderController);
export default router;
