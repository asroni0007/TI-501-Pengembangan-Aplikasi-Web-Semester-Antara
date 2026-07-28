function rupiah(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(value || 0));
}

function buatPromptKontenProduk({ produk, gaya, kanal }) {
  return `Anda adalah copywriter digital untuk UMKM.

Konteks produk:
- Nama produk: ${produk.nama}
- Kategori: ${produk.kategori}
- Harga: ${rupiah(produk.harga)}
- Stok: ${produk.stok}
- Target pasar: ${produk.target_pasar || 'pelanggan umum'}
- Deskripsi: ${produk.deskripsi || '-'}

Tugas:
Buat konten promosi untuk kanal ${kanal} dengan gaya ${gaya}.

Aturan output:
1. Gunakan Bahasa Indonesia yang jelas dan ramah.
2. Jangan membuat klaim berlebihan.
3. Sertakan call-to-action.
4. Format jawaban dengan bagian: Judul, Caption, Hashtag, Ide Visual.`;
}

function hasilMock({ produk, gaya, kanal }) {
  return `Judul: ${produk.nama} siap bantu jualan makin menarik\n\nCaption: Lagi cari produk ${produk.kategori.toLowerCase()} yang cocok untuk ${produk.target_pasar || 'pelanggan umum'}? ${produk.nama} hadir dengan harga ${rupiah(produk.harga)} dan stok terbatas. Gaya promosi: ${gaya}. Cocok dibagikan melalui ${kanal}. Yuk pesan sekarang sebelum kehabisan!\n\nHashtag: #UMKM #ProdukLokal #${produk.kategori.replace(/\s+/g, '')}\n\nIde Visual: Foto produk dengan latar sederhana, teks harga jelas, dan tombol ajakan pesan.`;
}

async function panggilGemini(prompt) {
  const { GoogleGenerativeAI } = require('@google/generative-ai');
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error('GEMINI_API_KEY belum diisi di file .env.');
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-1.5-flash' });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function panggilOpenAI(prompt) {
  const OpenAI = require('openai');
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY belum diisi di file .env.');
  const client = new OpenAI({ apiKey });
  const response = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Anda adalah asisten AI yang membantu UMKM membuat konten promosi etis dan jelas.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7
  });
  return response.choices[0].message.content;
}

async function generateKontenProduk({ produk, gaya, kanal }) {
  const provider = (process.env.AI_PROVIDER || 'mock').toLowerCase();
  const prompt = buatPromptKontenProduk({ produk, gaya, kanal });

  if (provider === 'gemini') {
    return { provider, prompt, hasil: await panggilGemini(prompt) };
  }
  if (provider === 'openai') {
    return { provider, prompt, hasil: await panggilOpenAI(prompt) };
  }
  return { provider: 'mock', prompt, hasil: hasilMock({ produk, gaya, kanal }) };
}

module.exports = { buatPromptKontenProduk, generateKontenProduk };
