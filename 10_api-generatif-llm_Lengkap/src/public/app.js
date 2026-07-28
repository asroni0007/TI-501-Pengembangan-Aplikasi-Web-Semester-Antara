const produkSelect = document.querySelector('#produk');
const form = document.querySelector('#form-ai');
const hasilEl = document.querySelector('#hasil');
const providerEl = document.querySelector('#provider');

async function loadProduk() {
  const response = await fetch('/api/produk');
  const result = await response.json();
  if (!result.sukses) throw new Error(result.pesan || 'Gagal mengambil produk.');

  produkSelect.innerHTML = result.data.map((item) => (
    `<option value="${item.id}">${item.nama} — ${item.kategori}</option>`
  )).join('');
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.disabled = true;
  hasilEl.textContent = 'Memproses prompt dan menunggu respons AI...';
  providerEl.textContent = 'Provider: -';

  const payload = Object.fromEntries(new FormData(form).entries());
  payload.produk_id = Number(payload.produk_id);

  try {
    const response = await fetch('/api/ai/generate-konten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok || !result.sukses) {
      throw new Error((result.detail || [result.pesan]).join('\n'));
    }
    providerEl.textContent = `Provider: ${result.provider}`;
    hasilEl.textContent = result.hasil;
  } catch (error) {
    hasilEl.textContent = `Terjadi kesalahan:\n${error.message}`;
  } finally {
    button.disabled = false;
  }
});

loadProduk().catch((error) => {
  hasilEl.textContent = `Gagal memuat produk: ${error.message}`;
});
