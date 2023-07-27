import Express from "express";

import { getCustomerBuyOrderController } from "../controller/getCustomerController.js";
const router = Express.Router();

router.get("/", getCustomerBuyOrderController);
export default router;
