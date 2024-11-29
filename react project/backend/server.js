const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware0
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL connection pool
const pool = new Pool({
  user: 'visys_dev', // Replace with your database user
  host: '52.66.196.233', // Host of the database
  database: 'devdb', // Replace with your database name
  password: 'dev@123', // Replace with your database password
  port: 5432, // Default PostgreSQL port
});

// Endpoint to handle form submissions
app.post('/api/batches', async (req, res) => {
  const { batchId, nextClassDate, studentName, studentEmail } = req.body;

  if (!batchId || !nextClassDate || !studentName || !studentEmail) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const query = `
      INSERT INTO batches1 (batch_id, student_name, student_email, next_class_date)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    // Ensure correct order of values: batchId, studentName, studentEmail, nextClassDate
    const values = [batchId, studentName, studentEmail, nextClassDate];

    const result = await pool.query(query, values);
    res.status(201).json({
      message: 'Data inserted successfully.',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
