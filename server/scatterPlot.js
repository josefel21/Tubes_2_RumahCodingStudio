// routes/scatter-plot.js
import dbConnect from "./database.js";

export const scatterPage = async (req,res) =>{
    const conn = await dbConnect();
    conn.release();
    res.render("page/scatterPlot.ejs");
}

// ambil data untuk sumbu x & y scatter

export const getScatterData = async (req, res) => {
    const { x, y } = req.query;
    
    try {
      const connection = await dbConnect();
  
      const sqlQuery = `SELECT ${x}, ${y} FROM customer`; 
  
      connection.query(sqlQuery, (error, results) => {
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
  
      connection.end();
    } catch (error) {
      console.error('Error connecting to database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  export const getAttributes = async (req, res) => {
    try {
        const connection = await dbConnect();

        const sqlQuery = 'SHOW COLUMNS FROM customer'; 

        connection.query(sqlQuery, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            const attributes = results.map(row => row.Field);

            res.json(attributes);
        });

        connection.end();
    } catch (error) {
        console.error('Error connecting to database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
