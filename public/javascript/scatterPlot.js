// routes/data.js
const express = require('express');
const router = express.Router();
import dbConnect from "./database.js";


router.get('/scatter-plot-data', (req, res) => {
  const query = 'SELECT x, y FROM scatter_data';
  dbConnect.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching scatter plot data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

module.exports = router;
