import Express from "express";
import { getTimeLineController } from "../controller/getTimeLineController.js";

const router = Express.Router();
router.get("/", getTimeLineController);
export default router;
