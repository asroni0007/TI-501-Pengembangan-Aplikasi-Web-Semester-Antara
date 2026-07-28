const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const produk = [
  { id: 1, nama: 'Kopi Arabika Merapi', kategori: 'Minuman', harga: 25000, status: 'aktif', stok: 38, konten: 4 },
  { id: 2, nama: 'Brownies Mini Cokelat', kategori: 'Makanan', harga: 18000, status: 'aktif', stok: 12, konten: 3 },
  { id: 3, nama: 'Totebag Batik Lokal', kategori: 'Fashion', harga: 45000, status: 'draft', stok: 20, konten: 1 },
  { id: 4, nama: 'Sabun Herbal Sereh', kategori: 'Perawatan', harga: 15000, status: 'arsip', stok: 0, konten: 0 },
  { id: 5, nama: 'Keripik Pisang Manis', kategori: 'Makanan', harga: 12000, status: 'aktif', stok: 55, konten: 2 }
];

const riwayatKonten = [
  { id: 1, produk_id: 1, kanal: 'Instagram', gaya: 'Hangat', status: 'siap', tanggal: '2026-07-21', judul: 'Kopi hangat untuk teman belajar' },
  { id: 2, produk_id: 2, kanal: 'WhatsApp', gaya: 'Promo', status: 'draft', tanggal: '2026-07-21', judul: 'Brownies mini untuk hampers' },
  { id: 3, produk_id: 5, kanal: 'Instagram', gaya: 'Santai', status: 'siap', tanggal: '2026-07-20', judul: 'Camilan manis teman kerja' }
];

app.get('/api/produk', (req, res) => {
  res.json({ sukses: true, data: produk });
});

app.get('/api/konten', (req, res) => {
  const data = riwayatKonten.map(item => ({
    ...item,
    produk: produk.find(p => p.id === item.produk_id)?.nama || 'Produk tidak ditemukan'
  }));
  res.json({ sukses: true, data });
});

app.get('/api/dashboard', (req, res) => {
  const aktif = produk.filter(item => item.status === 'aktif').length;
  const draft = produk.filter(item => item.status === 'draft').length;
  const totalKonten = produk.reduce((sum, item) => sum + item.konten, 0);
  res.json({ sukses: true, data: { total_produk: produk.length, produk_aktif: aktif, produk_draft: draft, total_konten: totalKonten } });
});

app.get('/api/status', (req, res) => {
  res.json({ sukses: true, message: 'Server Pertemuan 11 berjalan', waktu: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
