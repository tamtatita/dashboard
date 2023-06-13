import { db } from "../connect.js";
export const getEmployeeController = (req, res) => {
  const sql = "select * from employees";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export default getEmployeeController;
