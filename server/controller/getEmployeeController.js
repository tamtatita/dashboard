import { db } from "../connect.js";
export const getEmployeeController = (req, res) => {
  const sql = "select * from employees";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
export const addEmployeeController = (req, res) => {
  const sql = `INSERT INTO employees (employeeNumber, lastName, firstName, extension, email, officeCode, jobTitle) VALUES (?,?, ?, ?, ?, ?, ?)`;
  const values = [
    req.body.employeeNumber,
    req.body.lastName,
    req.body.firstName,
    req.body.extension,
    req.body.email,
    req.body.officeCode,
    req.body.jobTitle,
  ];

  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const deleteEmp = (req, res) => {
  const sql = "delete from employees where employeeNumber = ?";
  const values = [req.body.employeeNumber];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json({ success: true, message: "deleted" });
  });
};
