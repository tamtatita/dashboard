import Express from "express";
import { getPaymentController } from "../controller/getPaymentController.js";

const router = Express.Router();
router.get("/", getPaymentController);
export default router;
