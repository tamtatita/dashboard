import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "classicmodels",
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connected");
});
