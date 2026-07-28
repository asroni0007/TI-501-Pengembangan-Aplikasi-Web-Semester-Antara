const intents = [
  {
    name: 'jam_buka',
    keywords: ['jam', 'buka', 'tutup', 'operasional'],
    reply: 'Toko kami buka setiap Senin-Sabtu pukul 08.00-17.00 WIB.'
  },
  {
    name: 'produk',
    keywords: ['produk', 'menu', 'katalog'],
    reply: 'Produk unggulan kami: kopi arabika, kopi robusta, dan paket hampers UMKM.'
  },
  {
    name: 'promo',
    keywords: ['promo', 'diskon', 'voucher'],
    reply: 'Promo minggu ini: diskon 10% untuk pembelian minimal dua produk.'
  }
];

function normalize(text = '') {
  return String(text).trim().toLowerCase();
}

function detectIntent(message) {
  const text = normalize(message);
  const found = intents.find(intent => intent.keywords.some(keyword => text.includes(keyword)));
  return found || {
    name: 'fallback',
    reply: 'Terima kasih sudah menghubungi Asisten AI UMKM. Silakan ketik: jam buka, produk, atau promo.'
  };
}

function buildAssistantReply(message) {
  const intent = detectIntent(message);
  return {
    intent: intent.name,
    reply: intent.reply,
    source: 'rule-based-demo'
  };
}

module.exports = { buildAssistantReply, detectIntent, normalize, intents };
