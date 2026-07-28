require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const assistantRoutes = require('./routes/assistantRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json({ limit: '1mb' }));

app.get('/', (req, res) => {
  res.json({
    app: process.env.APP_NAME || 'Asisten AI UMKM',
    version: '1.0.0',
    endpoints: ['/health', '/api/assistant']
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

app.use('/api', assistantRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint tidak ditemukan.' });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
}

module.exports = app;
