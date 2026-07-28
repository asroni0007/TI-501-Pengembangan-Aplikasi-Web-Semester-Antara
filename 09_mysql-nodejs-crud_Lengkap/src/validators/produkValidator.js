function validasiProduk(body) {
  const errors = [];
  const kategoriId = Number(body.kategori_id);
  const harga = Number(body.harga);
  const stok = Number(body.stok);

  if (!Number.isInteger(kategoriId) || kategoriId <= 0) {
    errors.push('Kategori wajib dipilih.');
  }
  if (!body.nama || body.nama.trim().length < 3) {
    errors.push('Nama produk minimal 3 karakter.');
  }
  if (!Number.isFinite(harga) || harga <= 0) {
    errors.push('Harga harus lebih dari 0.');
  }
  if (!Number.isInteger(stok) || stok < 0) {
    errors.push('Stok harus bilangan bulat minimal 0.');
  }

  return errors;
}

module.exports = { validasiProduk };
