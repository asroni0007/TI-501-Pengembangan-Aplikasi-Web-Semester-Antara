const express = require('express');
const controller = require('../controllers/produkController');

const router = express.Router();

router.get('/kategori', controller.listKategori);
router.get('/produk', controller.listProduk);
router.get('/produk/:id', controller.detailProduk);
router.post('/produk', controller.createProduk);
router.put('/produk/:id', controller.updateProduk);
router.delete('/produk/:id', controller.deleteProduk);

module.exports = router;
