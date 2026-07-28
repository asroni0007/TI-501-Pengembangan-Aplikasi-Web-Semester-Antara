require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { cekKoneksiDatabase } = require('./config/db');
const produkRoutes = require('./routes/produkRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', async (req, res) => {
  try {
    const db = await cekKoneksiDatabase();
    res.json({ sukses: true, pesan: 'Server dan database aktif.', db, ai_provider: process.env.AI_PROVIDER || 'mock' });
  } catch (error) {
    res.status(500).json({ sukses: false, pesan: 'Database belum terkoneksi.', detail: [error.message] });
  }
});

app.use('/api/produk', produkRoutes);
app.use('/api/ai', aiRoutes);

app.use((req, res) => {
  res.status(404).json({ sukses: false, pesan: 'Endpoint tidak ditemukan.' });
});

app.listen(PORT, () => {
  console.log(`Server Pertemuan 10 berjalan di http://localhost:${PORT}`);
});
