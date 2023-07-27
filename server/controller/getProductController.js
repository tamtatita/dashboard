import { db } from "../connect.js";

export const getProductController = (req, res) => {
  const sql = `select * from products`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
};

export default getProductController;
