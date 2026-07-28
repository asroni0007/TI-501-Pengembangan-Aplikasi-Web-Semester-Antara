const produkUMKM = require('../data/produk');
const { success, error } = require('../utils/apiResponse');
const { validateProduk, normalizeProduk } = require('../validators/produkValidator');

function getNextId() {
  if (produkUMKM.length === 0) return 1;
  return Math.max(...produkUMKM.map((produk) => produk.id)) + 1;
}

function listProduk(req, res) {
  const keyword = (req.query.keyword || '').toLowerCase();
  const hasil = keyword
    ? produkUMKM.filter((produk) =>
        produk.nama.toLowerCase().includes(keyword) ||
        produk.kategori.toLowerCase().includes(keyword)
      )
    : produkUMKM;

  return success(res, 200, 'Daftar produk berhasil diambil.', hasil, {
    total: hasil.length,
    keyword: keyword || null
  });
}

function detailProduk(req, res) {
  const id = Number(req.params.id);
  const produk = produkUMKM.find((item) => item.id === id);

  if (!produk) {
    return error(res, 404, 'Produk tidak ditemukan.');
  }

  return success(res, 200, 'Detail produk berhasil diambil.', produk);
}

function createProduk(req, res) {
  const errors = validateProduk(req.body);

  if (errors.length > 0) {
    return error(res, 400, 'Request body belum valid.', errors);
  }

  const produkBaru = {
    id: getNextId(),
    ...normalizeProduk(req.body)
  };

  produkUMKM.push(produkBaru);
  return success(res, 201, 'Produk baru berhasil ditambahkan.', produkBaru);
}

function updateProduk(req, res) {
  const id = Number(req.params.id);
  const index = produkUMKM.findIndex((item) => item.id === id);

  if (index === -1) {
    return error(res, 404, 'Produk tidak ditemukan.');
  }

  const errors = validateProduk(req.body);
  if (errors.length > 0) {
    return error(res, 400, 'Request body belum valid.', errors);
  }

  const produkUpdate = {
    id,
    ...normalizeProduk(req.body)
  };

  produkUMKM[index] = produkUpdate;
  return success(res, 200, 'Produk berhasil diperbarui.', produkUpdate);
}

function deleteProduk(req, res) {
  const id = Number(req.params.id);
  const index = produkUMKM.findIndex((item) => item.id === id);

  if (index === -1) {
    return error(res, 404, 'Produk tidak ditemukan.');
  }

  const [produkTerhapus] = produkUMKM.splice(index, 1);
  return success(res, 200, 'Produk berhasil dihapus.', produkTerhapus);
}

module.exports = {
  listProduk,
  detailProduk,
  createProduk,
  updateProduk,
  deleteProduk
};
