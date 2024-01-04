// routes/scatter-plot.js
import dbConnect from "./database.js";

// ambil data untuk sumbu x & y scatter
export const getScatterData = async (req, res) => {
    const { x, y } = req.query;
    
    try {
      const conn = await dbConnect();
  
      const sqlQuery = `SELECT ${x}, ${y} FROM customer`; 
  
      conn.query(sqlQuery, (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        const dataFromDB = results.map(row => ({
          x: row[x],
          y: row[y],
        }));
  
        res.json(dataFromDB);
      });
  
      conn.release();
    } catch (error) {
      console.error('Error connecting to database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  export const getAttributes = async (req, res) => {
    try {
        const conn = await dbConnect();

        const sqlQuery = 'SHOW COLUMNS FROM customer'; 

        conn.query(sqlQuery, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            const attributes = results.map(row => row.Field);

            res.json(attributes);
        });

        conn.release();
    } catch (error) {
        console.error('Error connecting to database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};