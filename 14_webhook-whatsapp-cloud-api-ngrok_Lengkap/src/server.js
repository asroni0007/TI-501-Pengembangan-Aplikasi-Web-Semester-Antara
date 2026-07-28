require('dotenv').config();
const express = require('express');
const cors = require('cors');
const webhookRoutes = require('./routes/webhookRoutes');
const { buildAssistantReply } = require('./services/umkmAssistantService');

const app = express();
const PORT = process.env.PORT || 3000;

// Simpan raw body agar signature webhook dapat diverifikasi jika APP_SECRET diaktifkan.
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString('utf8');
  }
}));
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    app: 'TI-501 Pertemuan 14',
    topic: 'Webhook, WhatsApp Cloud API, verifikasi endpoint, dan ngrok',
    webhook: '/webhook',
    test: '/api/assistant?message=buat caption produk kopi'
  });
});

app.get('/api/assistant', (req, res) => {
  const message = req.query.message || '';
  res.json(buildAssistantReply(message));
});

app.use('/webhook', webhookRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log('Jalankan tunnel: ngrok http ' + PORT);
});
