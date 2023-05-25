import { db } from "../connect.js";
export const getTimeLineController = (req, res) => {
  const sql =
    "select cs.contactLastName, cs.contactFirstName , cs.city, ord.orderDate from `orders` ord INNER join `customers` cs on ord.customerNumber = cs.customerNumber ORDER BY `ord`.`orderDate` DESC;";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
