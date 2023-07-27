import Express from "express";
import { getProductController } from "../controller/getProductController.js";

const router = Express.Router();
router.get("/", getProductController);
export default router;
