const daftarProduk = document.querySelector('#daftar-produk');
const form = document.querySelector('#form-produk');
const pesan = document.querySelector('#pesan');
const kategoriSelect = document.querySelector('#kategori_id');
const tombolMuatUlang = document.querySelector('#muat-ulang');

function formatRupiah(nilai) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(nilai));
}

function tampilPesan(teks, tipe = 'ok') {
  pesan.textContent = teks;
  pesan.className = tipe === 'ok' ? 'pesan-ok' : 'pesan-error';
}

async function ambilJson(url, opsi = {}) {
  const response = await fetch(url, opsi);
  const data = await response.json();
  if (!response.ok) throw new Error(data.pesan || 'Request gagal.');
  return data;
}

async function loadKategori() {
  const hasil = await ambilJson('/api/kategori');
  kategoriSelect.innerHTML = hasil.data
    .map(item => `<option value="${item.id}">${item.nama}</option>`)
    .join('');
}

async function loadProduk() {
  daftarProduk.innerHTML = '<p>Memuat data...</p>';
  try {
    const hasil = await ambilJson('/api/produk');
    if (hasil.data.length === 0) {
      daftarProduk.innerHTML = '<p>Belum ada produk.</p>';
      return;
    }
    daftarProduk.innerHTML = hasil.data.map(item => `
      <article class="card">
        <p class="meta">${item.kategori}</p>
        <h3>${item.nama}</h3>
        <p>${item.deskripsi || 'Tanpa deskripsi.'}</p>
        <p class="harga">${formatRupiah(item.harga)}</p>
        <p class="meta">Stok: ${item.stok}</p>
        <div class="aksi">
          <button class="hapus" type="button" onclick="hapusProduk(${item.id})">Hapus</button>
        </div>
      </article>
    `).join('');
  } catch (err) {
    daftarProduk.innerHTML = `<p class="pesan-error">${err.message}</p>`;
  }
}

async function hapusProduk(id) {
  if (!confirm('Hapus produk ini?')) return;
  try {
    await ambilJson(`/api/produk/${id}`, { method: 'DELETE' });
    tampilPesan('Produk berhasil dihapus.');
    loadProduk();
  } catch (err) {
    tampilPesan(err.message, 'error');
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const payload = {
    kategori_id: kategoriSelect.value,
    nama: document.querySelector('#nama').value,
    harga: document.querySelector('#harga').value,
    stok: document.querySelector('#stok').value,
    deskripsi: document.querySelector('#deskripsi').value
  };

  try {
    await ambilJson('/api/produk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    form.reset();
    tampilPesan('Produk berhasil disimpan ke MySQL.');
    loadProduk();
  } catch (err) {
    tampilPesan(err.message, 'error');
  }
});

tombolMuatUlang.addEventListener('click', loadProduk);
loadKategori().then(loadProduk).catch(err => tampilPesan(err.message, 'error'));

window.hapusProduk = hapusProduk;
