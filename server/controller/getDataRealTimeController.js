import { db } from "../connect.js";
export const getDataRealTimeController = (req, res) => {
  const sql = `select DATE_FORMAT(orderDate, '%Y-%m-%d') AS formattedOrderDate, count(ord.orderNumber) as tongDonHang from orders ord join orderdetails ords on ord.orderNumber = ords.orderNumber group by ord.orderDate ORDER BY formattedOrderDate ASC;`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export default getDataRealTimeController;
