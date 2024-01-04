import dbConnect from "./database.js";

// ambil data untuk att1 barChart
export const getBarData = async (req, res) => {
  const { att1 } = req.query;
  
  try {
    const conn = await dbConnect();

    const sqlQuery = `SELECT ${att1} FROM customer`; 

    conn.query(sqlQuery, (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      const dataFromDB = results.map(row => ({
        att1: row[att1],
      }));
      res.json(dataFromDB);
      conn.release();
    });

  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};