import Express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = Express();
import cors from "cors";
import bodyParser from "body-parser";
import getPaymentRouter from "./routers/getPaymentRouter.js";
import getTimeLineRouter from "./routers/getTimeLineRouter.js";
import getEmployeeRouter from "./routers/getEmployeeRouter.js";
import getProductLineRouter from "./routers/getProductLineRouter.js";
import getOrderRouter from "./routers/getOrderRouter.js";
import getOrderDetailRouter from "./routers/getOrderDetailRouter.js";
import getDataRealTimeRouter from "./routers/getDataRealTimeRouter.js";
import getCustomerRouter from "./routers/getCustomerRouter.js";
import getCusBuyOrderRouter from "./routers/getCusBuyOrderRouter.js";
import addEmployeeRouter from "./routers/addEmployeeRouter.js";
import getProductRouter from "./routers/getProductRouter.js";
import getLoginRouter from "./routers/getLoginRouter.js";
import deleteEmpRouter from "./routers/deleteEmpRouter.js";
import chartCountry from "./routers/chartCountry.js";
// const cors = require("cors");
// app.use(cors({ origin: "http://127.0.0.1:5173", optionsSuccessStatus: 200 }));
app.use(
  cors({
    // origin: 'http://103.173.254.194',
    origin: "http://127.0.0.1:5173",

    credentials: true,
  })
);

app.use(Express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

// const clientPath = path.join(__dirname, 'client');
// app.use(Express.static(clientPath));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

export const authenToken = (req, res, next) => {
  const authorization = req.headers["authorization"];
  const token = authorization.split(" ")[1];
  if (!token) res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    console.log(err, data);
  });
};

app.use("/payment", getPaymentRouter);
app.use("/timeline", getTimeLineRouter);
app.use("/employee", getEmployeeRouter);
app.use("/productline", getProductLineRouter);
app.use("/order", getOrderRouter);
app.use("/orderdetail", getOrderDetailRouter);
app.use("/realtime", getDataRealTimeRouter);
app.use("/customer", getCustomerRouter);
app.use("/cusbuyorder", getCusBuyOrderRouter);
app.use("/add/emp", addEmployeeRouter);
app.use("/product", getProductRouter);
app.use("/login", getLoginRouter);
app.use("/delete/emp", deleteEmpRouter);
app.use("/chart/country", chartCountry);
app.listen(8081, () => {
  console.log("Working");
});
