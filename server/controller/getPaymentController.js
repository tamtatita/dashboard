import { db } from "../connect.js";
export const getPaymentController = (req, res) => {
  const sql = "select * from payments";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export default getPaymentController;
