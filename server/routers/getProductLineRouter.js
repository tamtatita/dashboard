import Express from "express";
import { getProductLineController } from "../controller/getProductLineController.js";
// import getProductLineController from "../controller/getProductLineController.js";

const router = Express.Router();
router.get("/", getProductLineController);
export default router;
