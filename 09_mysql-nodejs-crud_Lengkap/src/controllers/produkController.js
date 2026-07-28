const { pool } = require('../config/db');
const { validasiProduk } = require('../validators/produkValidator');

function sukses(res, status, pesan, data, meta = {}) {
  return res.status(status).json({ sukses: true, pesan, data, meta });
}

function gagal(res, status, pesan, detail = []) {
  return res.status(status).json({ sukses: false, pesan, detail });
}

async function listProduk(req, res) {
  try {
    const [rows] = await pool.query(`
      SELECT p.id, p.nama, p.harga, p.stok, p.deskripsi,
             p.kategori_id, k.nama AS kategori,
             p.created_at, p.updated_at
      FROM produk p
      JOIN kategori k ON k.id = p.kategori_id
      ORDER BY p.id DESC
    `);
    return sukses(res, 200, 'Daftar produk berhasil diambil.', rows, { total: rows.length });
  } catch (err) {
    return gagal(res, 500, 'Gagal mengambil data produk.', [err.message]);
  }
}

async function detailProduk(req, res) {
  try {
    const id = Number(req.params.id);
    const [rows] = await pool.query(`
      SELECT p.id, p.nama, p.harga, p.stok, p.deskripsi,
             p.kategori_id, k.nama AS kategori,
             p.created_at, p.updated_at
      FROM produk p
      JOIN kategori k ON k.id = p.kategori_id
      WHERE p.id = ?
    `, [id]);

    if (rows.length === 0) return gagal(res, 404, 'Produk tidak ditemukan.');
    return sukses(res, 200, 'Detail produk berhasil diambil.', rows[0]);
  } catch (err) {
    return gagal(res, 500, 'Gagal mengambil detail produk.', [err.message]);
  }
}

async function createProduk(req, res) {
  try {
    const errors = validasiProduk(req.body);
    if (errors.length > 0) return gagal(res, 400, 'Data produk belum valid.', errors);

    const { kategori_id, nama, harga, stok, deskripsi } = req.body;
    const [result] = await pool.query(`
      INSERT INTO produk (kategori_id, nama, harga, stok, deskripsi)
      VALUES (?, ?, ?, ?, ?)
    `, [Number(kategori_id), nama.trim(), Number(harga), Number(stok), deskripsi || null]);

    const [rows] = await pool.query('SELECT * FROM produk WHERE id = ?', [result.insertId]);
    return sukses(res, 201, 'Produk berhasil ditambahkan.', rows[0]);
  } catch (err) {
    return gagal(res, 500, 'Gagal menambahkan produk.', [err.message]);
  }
}

async function updateProduk(req, res) {
  try {
    const id = Number(req.params.id);
    const errors = validasiProduk(req.body);
    if (errors.length > 0) return gagal(res, 400, 'Data produk belum valid.', errors);

    const [cek] = await pool.query('SELECT id FROM produk WHERE id = ?', [id]);
    if (cek.length === 0) return gagal(res, 404, 'Produk tidak ditemukan.');

    const { kategori_id, nama, harga, stok, deskripsi } = req.body;
    await pool.query(`
      UPDATE produk
      SET kategori_id = ?, nama = ?, harga = ?, stok = ?, deskripsi = ?
      WHERE id = ?
    `, [Number(kategori_id), nama.trim(), Number(harga), Number(stok), deskripsi || null, id]);

    return detailProduk(req, res);
  } catch (err) {
    return gagal(res, 500, 'Gagal memperbarui produk.', [err.message]);
  }
}

async function deleteProduk(req, res) {
  try {
    const id = Number(req.params.id);
    const [result] = await pool.query('DELETE FROM produk WHERE id = ?', [id]);
    if (result.affectedRows === 0) return gagal(res, 404, 'Produk tidak ditemukan.');
    return sukses(res, 200, 'Produk berhasil dihapus.', { id });
  } catch (err) {
    return gagal(res, 500, 'Gagal menghapus produk.', [err.message]);
  }
}

async function listKategori(req, res) {
  try {
    const [rows] = await pool.query('SELECT id, nama FROM kategori ORDER BY nama ASC');
    return sukses(res, 200, 'Daftar kategori berhasil diambil.', rows);
  } catch (err) {
    return gagal(res, 500, 'Gagal mengambil kategori.', [err.message]);
  }
}

module.exports = { listProduk, detailProduk, createProduk, updateProduk, deleteProduk, listKategori };
