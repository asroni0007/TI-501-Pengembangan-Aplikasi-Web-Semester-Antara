const express = require('express');
const path = require('path');
const produkUMKM = require('./data/produk');
const requestLogger = require('./middleware/requestLogger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json({
    status: 'aktif',
    aplikasi: 'Asisten AI UMKM',
    materi: 'Node.js dan Express.js',
    waktu: new Date().toISOString()
  });
});

app.get('/api/produk', (req, res) => {
  res.json(produkUMKM);
});

app.use((req, res) => {
  res.status(404).json({ pesan: 'Endpoint tidak ditemukan.' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
