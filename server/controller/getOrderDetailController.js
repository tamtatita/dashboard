import { db } from "../connect.js";
export const getOrderDetailController = (req, res) => {
  const sql = `SELECT
  ORD.orderNumber,
  CUS.customerNumber,
  ORDS.productCode,
  PR.productName,
  PRL.productLine,
  ORDS.quantityOrdered,
  ORDS.priceEach,
  SUM(ORDS.quantityOrdered * ORDS.priceEach) AS sumMoney
FROM
  orders ORD
JOIN
  customers CUS ON ORD.customerNumber = CUS.customerNumber
JOIN
  orderdetails ORDS ON ORD.orderNumber = ORDS.orderNumber
JOIN
	products PR ON PR.productCode = ORDS.productCode
JOIN
	productlines PRL ON PR.productLine = PRL.productLine
WHERE ORD.orderNumber = 10123
GROUP BY
  ORD.orderNumber,
  CUS.customerNumber,
  ORDS.productCode,
  ORDS.quantityOrdered,
  ORDS.priceEach; `;

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export default getOrderDetailController;
