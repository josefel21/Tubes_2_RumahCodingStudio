import mysql from "mysql";

const pool = mysql.createPool({
  user: "root",
  password: "",
  database: "rumahcodingstudio",
  host: "localhost",
});

const dbConnect = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) reject(err);
      resolve(conn);
    });
  });
};

export const sqlQuery = async (sql, data) => {
  const conn = await dbConnect();

  const res = new Promise((resolve, reject) => {
    conn.query(sql, data, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });

  conn.release();

  return res;
};

export default dbConnect;