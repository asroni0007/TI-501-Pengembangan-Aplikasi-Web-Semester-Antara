function getMenuHelp() {
  return [
    'Halo! Saya Asisten AI untuk UMKM.',
    '',
    'Perintah yang tersedia:',
    '/start - mulai percakapan',
    '/menu - lihat bantuan',
    '/caption nama produk - buat caption promosi singkat',
    '',
    'Contoh:',
    '/caption Kopi Arabika Merapi 250 gram'
  ].join('\n');
}

function generateCaption({ productName, audience = 'pelanggan UMKM', tone = 'ramah' }) {
  const nama = productName.trim();
  return [
    `Kenalkan ${nama}, pilihan tepat untuk ${audience}.`,
    `Dibuat dengan kualitas terbaik dan gaya komunikasi yang ${tone}.`,
    'Pesan sekarang dan rasakan manfaatnya untuk kebutuhan harian Anda!',
    '',
    '#UMKM #ProdukLokal #AsistenAI'
  ].join('\n');
}

function buildAssistantReply(message) {
  const text = String(message || '').trim();

  if (!text) {
    return { type: 'help', reply: getMenuHelp() };
  }

  const lower = text.toLowerCase();
  if (lower.startsWith('/start') || lower.startsWith('/menu') || lower.includes('menu')) {
    return { type: 'help', reply: getMenuHelp() };
  }

  const productName = text
    .replace(/^\/caption/i, '')
    .replace(/^caption/i, '')
    .trim();

  if (!productName) {
    return { type: 'validation', reply: 'Tuliskan nama produk. Contoh: /caption Kopi Arabika Merapi' };
  }

  return {
    type: 'caption',
    reply: generateCaption({ productName, audience: 'calon pelanggan', tone: 'ramah dan persuasif' })
  };
}

module.exports = { getMenuHelp, generateCaption, buildAssistantReply };
