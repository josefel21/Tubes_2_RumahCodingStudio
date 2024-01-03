import dbConnect from "./database.js";
import multer from 'multer';
import csv from 'fast-csv';

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// db connection
const conn = await dbConnect();

// post upload
export const uploadPost = async (req, res) => {
  try {
    // Use the 'upload.single' middleware here
    upload.single('csvFile')(req, res, async (err) => {
        if (err) {
            return res.status(400).send('Error uploading file: ' + err.message);
        }

        if (!req.file || req.file.mimetype !== 'text/csv') {
            return res.status(400).send('Invalid or no CSV file uploaded.');
        }

        const fileBuffer = req.file.buffer;

        // Parse CSV data using fast-csv
        const csvData = await new Promise((resolve, reject) => {
            const data = [];
            csv.parseString(fileBuffer.toString(), { headers: true })
            .on('data', (row) => data.push(row))
            .on('end', () => resolve(data))
            .on('error', (error) => reject(error));
        });

        if (csvData.length === 0) {
            return res.status(400).send('Empty CSV file.');
        }

        const columns = Object.keys(csvData[0]).join(',');
        const values = csvData.map(row => `(${Object.values(row).map(value => `'${value}'`).join(',')})`).join(',');

        const query = `INSERT INTO customer (${columns}) VALUES ${values}`;

        // Use async/await with the connection query
        const result = await conn.query(query);
    });
  } catch (err) {
  }
};
