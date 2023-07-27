import { db } from "../connect.js";
export const getCustomerController = (req, res) => {
  const sql = `select * from customers`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getCustomerBuyOrderController = (req, res) => {
  const sql = `select cu.customerNumber as id, concat(cu.contactLastName," ", cu.contactFirstName) as Name, count(ord.orderNumber) as Total
  from customers cu join orders ord on cu.customerNumber = ord.customerNumber
  group by cu.customerNumber 
  ORDER BY total DESC limit 10`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


export const postCusIDGetDetail = (req, res)=> {
  const sql = `select ord.orderNumber, sum(ords.quantityOrdered) as sumQuantity, sum(ords.quantityOrdered* ords.priceEach) as sumMoney, ord.orderDate as dayOrder
  from customers cu join orders ord on cu.customerNumber = ord.customerNumber
  join orderdetails ords on ords.orderNumber = ord.orderNumber
  where cu.customerNumber = ?
  GROUP by ord.orderNumber;`
}