import Express from "express";

import { getLoginController } from "../controller/getLoginController.js";
import { authenToken } from "../index.js";

const router = Express.Router();
router.post("/", getLoginController);
export default router;
