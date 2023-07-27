import { db } from "../connect.js";
export const getOrderController = (req, res) => {
  const sql = `SELECT ORD.orderNumber, ORD.orderDate, ORD.shippedDate, ORD.status, ORD.customerNumber, CONCAT('[', GROUP_CONCAT(JSON_OBJECT('productCode', ORDS.productCode, 'quantityOrdered', ORDS.quantityOrdered,'priceEach', ORDS.priceEach, 'productName', P.productName,'orderLineNumber', ORDS.orderLineNumber, 'productLine',  P.productLine)), ']') AS Children 
    FROM orders ORD JOIN orderdetails ORDS ON ORD.orderNumber = ORDS.orderNumber
    JOIN customers C ON C.customerNumber = ORD.customerNumber
    JOIN products P ON P.productCode = ORDS.productCode
    GROUP BY ORD.orderNumber, ORD.orderDate, ORD.shippedDate, ORD.status, ORD.customerNumber`;
  const values = [0];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    const transformedData = data.map((item) => ({
      orderNumber: item.orderNumber,
      orderDate: item.orderDate,
      shippedDate: item.shippedDate,
      status: item.status,
      customerNumber: item.customerNumber,
      productLine: item.productLine,

      Children: JSON.parse(item.Children),
    }));
    return res.json(transformedData);
  });
};

export default getOrderController;
