function getMenuHelp() {
  return [
    'Halo! Saya Asisten AI untuk UMKM.',
    '',
    'Ketik salah satu contoh:',
    'menu - melihat bantuan',
    'caption kopi arabika - membuat caption promosi',
    'faq - melihat pertanyaan umum pelanggan'
  ].join('\n');
}

function generateCaption(productName) {
  const nama = String(productName || '').trim() || 'produk UMKM Anda';
  return [
    `Kenalkan ${nama}, pilihan tepat untuk kebutuhan harian pelanggan.`,
    'Dibuat dengan kualitas terbaik, dikemas menarik, dan cocok untuk hadiah maupun konsumsi pribadi.',
    'Pesan sekarang dan dukung produk lokal!',
    '',
    '#UMKM #ProdukLokal #BelanjaBijak'
  ].join('\n');
}

function getFaq() {
  return [
    'FAQ Singkat:',
    '1. Apakah bisa pesan online? Bisa, silakan tulis produk dan jumlah pesanan.',
    '2. Apakah bisa dikirim? Bisa, admin akan mengonfirmasi ongkir.',
    '3. Apakah ada promo? Silakan tanyakan promo hari ini.'
  ].join('\n');
}

function buildAssistantReply(message) {
  const text = String(message || '').trim();
  const lower = text.toLowerCase();

  if (!text || lower === 'menu' || lower === '/menu' || lower === '/start') {
    return { type: 'help', reply: getMenuHelp() };
  }

  if (lower === 'faq' || lower === '/faq') {
    return { type: 'faq', reply: getFaq() };
  }

  if (lower.startsWith('caption') || lower.startsWith('/caption')) {
    const productName = text.replace(/^\/?caption/i, '').trim();
    return { type: 'caption', reply: generateCaption(productName) };
  }

  return {
    type: 'fallback',
    reply: 'Pesan diterima. Ketik "menu", "faq", atau "caption nama produk" untuk mencoba asisten UMKM.'
  };
}

module.exports = { getMenuHelp, generateCaption, getFaq, buildAssistantReply };
