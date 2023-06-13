import mysql from "mysql2";

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "classicmodels",
// });
export const db = mysql.createConnection({
  host: "103.173.254.194",
  user: "mindx_sql",
  password: "mindx_sql",
  database: "classicmodels",
});
db.connect((error) => {
  if (error) throw error;
  console.log("Connected");
});
