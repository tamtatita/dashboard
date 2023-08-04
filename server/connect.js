import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "classicmodels",
});
// export const db = mysql.createConnection({
//   host: "103.173.254.194",
//   user: "mindx_sql",
//   password: "mindx_sql",
//   database: "classicmodels",
// });
db.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối đến cơ sở dữ liệu:", err);
    // setTimeout(connectDatabase, 2000); // Kết nối lại sau 2 giây
  } else {
    console.log("Đã kết nối đến cơ sở dữ liệu");
  }
});
