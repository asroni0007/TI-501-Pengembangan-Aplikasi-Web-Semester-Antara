function validateProduk(body) {
  const errors = [];

  if (!body.nama || body.nama.trim() === '') {
    errors.push('Nama produk wajib diisi.');
  }

  if (!body.kategori || body.kategori.trim() === '') {
    errors.push('Kategori wajib diisi.');
  }

  const harga = Number(body.harga);
  if (!Number.isFinite(harga) || harga <= 0) {
    errors.push('Harga harus berupa angka lebih dari 0.');
  }

  const stok = Number(body.stok);
  if (!Number.isInteger(stok) || stok < 0) {
    errors.push('Stok harus berupa bilangan bulat minimal 0.');
  }

  if (!body.deskripsi || body.deskripsi.trim() === '') {
    errors.push('Deskripsi wajib diisi.');
  }

  return errors;
}

function normalizeProduk(body) {
  return {
    nama: body.nama.trim(),
    kategori: body.kategori.trim(),
    harga: Number(body.harga),
    stok: Number(body.stok),
    deskripsi: body.deskripsi.trim()
  };
}

module.exports = { validateProduk, normalizeProduk };
