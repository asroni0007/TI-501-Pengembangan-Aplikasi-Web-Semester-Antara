const express = require('express');
const { generateKontenProdukAI } = require('../controllers/aiController');

const router = express.Router();
router.post('/generate-konten', generateKontenProdukAI);

module.exports = router;
