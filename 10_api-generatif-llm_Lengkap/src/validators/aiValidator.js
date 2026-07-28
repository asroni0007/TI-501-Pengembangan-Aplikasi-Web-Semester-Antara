function validasiPermintaanKontenAI(body) {
  const errors = [];
  const produkId = Number(body.produk_id);
  const gaya = String(body.gaya || '').trim();
  const kanal = String(body.kanal || '').trim();

  if (!Number.isInteger(produkId) || produkId <= 0) {
    errors.push('produk_id harus berupa angka positif.');
  }
  if (gaya.length < 3) {
    errors.push('gaya promosi minimal 3 karakter, contoh: ramah, profesional, lucu.');
  }
  if (kanal.length < 3) {
    errors.push('kanal promosi harus diisi, contoh: Instagram, WhatsApp, marketplace.');
  }

  return errors;
}

module.exports = { validasiPermintaanKontenAI };
