const { pool } = require('../config/db');
const { validasiPermintaanKontenAI } = require('../validators/aiValidator');
const { generateKontenProduk } = require('../services/aiService');

async function generateKontenProdukAI(req, res) {
  const errors = validasiPermintaanKontenAI(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ sukses: false, pesan: 'Input belum valid.', detail: errors });
  }

  const produkId = Number(req.body.produk_id);
  const gaya = String(req.body.gaya).trim();
  const kanal = String(req.body.kanal).trim();

  try {
    const [rows] = await pool.query(`
      SELECT p.*, k.nama AS kategori
      FROM produk p
      JOIN kategori k ON k.id = p.kategori_id
      WHERE p.id = ?
    `, [produkId]);

    if (rows.length === 0) {
      return res.status(404).json({ sukses: false, pesan: 'Produk tidak ditemukan.' });
    }

    const produk = rows[0];
    const ai = await generateKontenProduk({ produk, gaya, kanal });

    await pool.query(
      'INSERT INTO konten_ai (produk_id, gaya, hasil, provider) VALUES (?, ?, ?, ?)',
      [produkId, gaya, ai.hasil, ai.provider]
    );

    res.json({
      sukses: true,
      provider: ai.provider,
      produk,
      prompt_preview: ai.prompt.slice(0, 500),
      hasil: ai.hasil
    });
  } catch (error) {
    res.status(500).json({ sukses: false, pesan: 'Gagal membuat konten AI.', detail: [error.message] });
  }
}

module.exports = { generateKontenProdukAI };
