// server/summary.js

import dbConnect from "./database.js";

export const getAttributes = async (req, res) => {
  try {
    const connection = await dbConnect();

    // Ganti 'customer' dengan nama tabel yang sesuai
    const sqlQuery = "SHOW COLUMNS FROM customer";
    
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

export const executeQuery = async (req, res) => {
  const { groupBy, operation, select } = req.query;
  
  try {
    const connection = await dbConnect();

    // Ganti 'customer' dengan nama tabel yang sesuai
    const sqlQuery = `
      SELECT ${groupBy}, ${operation}(${select}) AS "${operation} (${select}) oleh tiap kelompok (${groupBy})"
      FROM customer
      GROUP BY ${groupBy};
    `;

    connection.query(sqlQuery, (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json(results);
    });

    connection.end();
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
