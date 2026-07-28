const express = require('express');
const path = require('path');
const produkRoutes = require('./routes/produkRoutes');
const { success, error } = require('./utils/apiResponse');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  return success(res, 200, 'API Asisten AI UMKM aktif.', {
    aplikasi: 'Asisten AI UMKM',
    materi: 'REST API, HTTP Method, Endpoint, dan JSON',
    versi: '1.0.0',
    waktu: new Date().toISOString()
  });
});

app.use('/api/produk', produkRoutes);

app.use((req, res) => {
  return error(res, 404, 'Endpoint tidak ditemukan. Periksa method dan URL.');
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return error(res, 400, 'Format JSON tidak valid.');
  }

  console.error(err);
  return error(res, 500, 'Terjadi kesalahan pada server.');
});

app.listen(PORT, () => {
  console.log(`REST API berjalan di http://localhost:${PORT}`);
});
