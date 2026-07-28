require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { generateCaption, getMenuHelp, buildAssistantReply } = require('./services/umkmAssistantService');
const { startLongPolling } = require('./handlers/telegramHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    app: 'TI-501 Pertemuan 13',
    topic: 'Telegram Bot API, long polling, dan DRY service logic',
    endpoints: ['/api/menu', '/api/assistant?message=caption produk kopi']
  });
});

app.get('/api/menu', (req, res) => {
  res.json({ message: getMenuHelp() });
});

app.get('/api/assistant', (req, res) => {
  const message = req.query.message || '';
  res.json(buildAssistantReply(message));
});

app.post('/api/caption', (req, res) => {
  const { productName, audience = 'pelanggan UMKM', tone = 'ramah' } = req.body;

  if (!productName) {
    return res.status(400).json({ error: 'productName wajib diisi.' });
  }

  res.json({
    productName,
    caption: generateCaption({ productName, audience, tone })
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  startLongPolling();
});
