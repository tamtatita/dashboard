import { db } from "../connect.js";
export const getDataRealTimeController = (req, res) => {
  const sql = `select DATE_FORMAT(orderDate, '%Y-%m-%d') AS formattedOrderDate, count(ord.orderNumber) as tongDonHang from orders ord join orderdetails ords on ord.orderNumber = ords.orderNumber group by ord.orderDate ORDER BY formattedOrderDate ASC;`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const chartCountry = (req, res) => {
  const sql = `SELECT c.country, count(c.customerNumber) as count  FROM customers c GROUP by  c.country  
  ORDER BY count(c.customerNumber) DESC LIMIT 10;`
  db.query(sql, (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
}

export default getDataRealTimeController;
