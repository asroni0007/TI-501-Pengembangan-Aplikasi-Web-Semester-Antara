const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/produkRoutes');
const { cekKoneksi } = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', async (req, res) => {
  try {
    await cekKoneksi();
    res.json({ sukses: true, pesan: 'Server dan database aktif.' });
  } catch (err) {
    res.status(500).json({ sukses: false, pesan: 'Database belum terkoneksi.', detail: [err.message] });
  }
});

app.use('/api', routes);

app.use((req, res) => {
  res.status(404).json({ sukses: false, pesan: 'Endpoint tidak ditemukan.' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
