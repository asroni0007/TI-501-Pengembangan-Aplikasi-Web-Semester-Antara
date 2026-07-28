const express = require('express');
const path = require('path');
const produkUMKM = require('./data/produk');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function sukses(res, status, pesan, data, meta = {}) {
  return res.status(status).json({ sukses: true, pesan, data, meta });
}

function gagal(res, status, pesan, detail = []) {
  return res.status(status).json({ sukses: false, pesan, detail });
}

function validasiProduk(body) {
  const errors = [];
  if (!body.nama || body.nama.trim() === '') errors.push('Nama produk wajib diisi.');
  if (!body.kategori || body.kategori.trim() === '') errors.push('Kategori wajib diisi.');
  if (Number(body.harga) <= 0) errors.push('Harga harus lebih dari 0.');
  if (!Number.isInteger(Number(body.stok)) || Number(body.stok) < 0) errors.push('Stok harus bilangan bulat minimal 0.');
  return errors;
}

app.get('/api/status', (req, res) => {
  sukses(res, 200, 'Server UTS TI-501 aktif.', { pertemuan: 8, topik: 'UTS CPMK51-52' });
});

app.get('/api/produk', (req, res) => {
  sukses(res, 200, 'Data produk berhasil diambil.', produkUMKM, { total: produkUMKM.length });
});

app.get('/api/produk/:id', (req, res) => {
  const id = Number(req.params.id);
  const produk = produkUMKM.find(item => item.id === id);
  if (!produk) return gagal(res, 404, 'Produk tidak ditemukan.');
  sukses(res, 200, 'Detail produk berhasil diambil.', produk);
});

app.post('/api/produk', (req, res) => {
  const errors = validasiProduk(req.body);
  if (errors.length > 0) return gagal(res, 400, 'Data produk belum valid.', errors);

  const produkBaru = {
    id: produkUMKM.length ? Math.max(...produkUMKM.map(item => item.id)) + 1 : 1,
    nama: req.body.nama.trim(),
    kategori: req.body.kategori.trim(),
    harga: Number(req.body.harga),
    stok: Number(req.body.stok),
    deskripsi: req.body.deskripsi || ''
  };
  produkUMKM.push(produkBaru);
  sukses(res, 201, 'Produk berhasil ditambahkan.', produkBaru);
});

app.use((req, res) => {
  gagal(res, 404, 'Endpoint tidak ditemukan.');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
