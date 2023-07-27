import { db } from "../connect.js";
export const getEmployeeController = (req, res) => {
  const sql = "select * from employees";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
export const addEmployeeController = (req, res) => {
  const { lastName, firstName, extension, email, officeCode, jobTitle } =
    req.body;
  const sql = `INSERT INTO employees (lastName, firstName, extension, email, officeCode, jobTitle) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [lastName, firstName, extension, email, officeCode, jobTitle];

  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


export const deleteEmp = (req, res) => {
  const id = req.params.id
  
  const sql = 'delete from employees where employeeNumber = ?'
  // const values = [req.body.employeeNumber]
  db.query(sql, [id], (err, data) => {
    if(err) return res.json(err)
    return res.json({message:"deleted"})
  })
}