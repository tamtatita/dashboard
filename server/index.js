import Express from "express";
const app = Express();
import cors from "cors";
import bodyParser from "body-parser";
import getPaymentRouter from "./routers/getPaymentRouter.js";
import getTimeLineRouter from "./routers/getTimeLineRouter.js";
import getEmployeeRouter from "./routers/getEmployeeRouter.js";
import getProductLineRouter from './routers/getProductLineRouter.js'

// const cors = require("cors");
// app.use(cors({ origin: "http://127.0.0.1:5173", optionsSuccessStatus: 200 }));
app.use(cors());

app.use(Express.json());

// const bodyParser = require("body-parser");

// const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/payment", getPaymentRouter);
app.use("/timeline", getTimeLineRouter);
app.use("/employee", getEmployeeRouter);
app.use("/productline", getProductLineRouter)

app.listen(8081, () => {
  console.log("Working");
});
