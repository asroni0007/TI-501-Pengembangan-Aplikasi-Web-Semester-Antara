const express = require('express');
const { listProduk } = require('../controllers/produkController');

const router = express.Router();
router.get('/', listProduk);

module.exports = router;
