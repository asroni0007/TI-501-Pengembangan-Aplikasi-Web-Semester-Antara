const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'asisten_ai_umkm',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function cekKoneksi() {
  const [rows] = await pool.query('SELECT 1 AS status');
  return rows[0];
}

module.exports = { pool, cekKoneksi };
