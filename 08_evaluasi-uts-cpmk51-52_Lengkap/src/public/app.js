const daftarProduk = document.querySelector('#daftar-produk');
const formProduk = document.querySelector('#form-produk');
const pesan = document.querySelector('#pesan');

function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}

function tampilkanPesan(teks, jenis = 'sukses') {
  pesan.textContent = teks;
  pesan.className = `pesan ${jenis}`;
}

function renderProduk(items) {
  daftarProduk.innerHTML = '';
  items.forEach((produk) => {
    const card = document.createElement('article');
    card.className = 'kartu';
    card.innerHTML = `
      <h3>${produk.nama}</h3>
      <p class="meta">${produk.kategori} · Stok ${produk.stok}</p>
      <p><strong>${formatRupiah(produk.harga)}</strong></p>
      <p>${produk.deskripsi || '-'}</p>
    `;
    daftarProduk.appendChild(card);
  });
}

async function ambilProduk() {
  const response = await fetch('/api/produk');
  const result = await response.json();
  renderProduk(result.data || []);
}

formProduk.addEventListener('submit', async (event) => {
  event.preventDefault();
  const payload = {
    nama: document.querySelector('#nama').value,
    kategori: document.querySelector('#kategori').value,
    harga: document.querySelector('#harga').value,
    stok: document.querySelector('#stok').value,
    deskripsi: document.querySelector('#deskripsi').value
  };

  const response = await fetch('/api/produk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const result = await response.json();

  if (!response.ok) {
    tampilkanPesan(result.detail?.join(' ') || result.pesan, 'error');
    return;
  }

  tampilkanPesan(result.pesan, 'sukses');
  formProduk.reset();
  ambilProduk();
});

ambilProduk();
