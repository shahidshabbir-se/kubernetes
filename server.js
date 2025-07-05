// server.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || 'password',
  database: process.env.PGDATABASE || 'mydb',
});

app.get('/', async (_, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`👋 Hello from a pod!<br/>PostgreSQL time: ${result.rows[0].now}`);
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).send('Database connection failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
