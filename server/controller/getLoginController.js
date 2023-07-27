import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getLoginController = (req, res) => {
  const { lastName, employeeNumber } = req.body;
  const sql =
    "select * from employees where lastName = ? and employeeNumber = ? ";
  db.query(sql, [lastName, employeeNumber], (error, data) => {
    if (data.length > 0) {
      const token = jwt.sign(data[0], process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      }); // Close the jwt.sign function call with a semicolon
      res.json({ token });
    } else {
      res.json({ success: false, message: "Sai TK, MK" });
    }
  });
};
