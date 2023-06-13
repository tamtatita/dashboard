import { db } from "../connect.js";

export const getProductLineController = (req, res) => {
  const sql = `SELECT PR.productLine, SUM(ORD.quantityOrdered) AS Total, YEAR(ORS.orderDate) as 'year'
    FROM productlines PRL
    INNER JOIN products PR ON PRL.productLine = PR.productLine
    INNER JOIN orderdetails ORD ON ORD.productCode = PR.productCode
    INNER JOIN orders ORS ON ORS.orderNumber = ORD.orderNumber
    WHERE YEAR(ORS.orderDate) = 2003
    GROUP BY PR.productLine
    
    UNION ALL
    
    SELECT PR.productLine, SUM(ORD.quantityOrdered) AS Total,YEAR(ORS.orderDate) as 'year'
    FROM productlines PRL
    INNER JOIN products PR ON PRL.productLine = PR.productLine
    INNER JOIN orderdetails ORD ON ORD.productCode = PR.productCode
    INNER JOIN orders ORS ON ORS.orderNumber = ORD.orderNumber
    WHERE YEAR(ORS.orderDate) = 2004
    GROUP BY PR.productLine
    ORDER BY Total ASC `;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
};

export default getProductLineController;
