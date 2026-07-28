const { pool } = require('../config/db');

async function listProduk(req, res) {
  try {
    const [rows] = await pool.query(`
      SELECT p.id, p.nama, p.harga, p.stok, p.target_pasar, p.deskripsi,
             k.nama AS kategori
      FROM produk p
      JOIN kategori k ON k.id = p.kategori_id
      ORDER BY p.id ASC
    `);
    res.json({ sukses: true, data: rows });
  } catch (error) {
    res.status(500).json({ sukses: false, pesan: 'Gagal mengambil produk.', detail: [error.message] });
  }
}

module.exports = { listProduk };
