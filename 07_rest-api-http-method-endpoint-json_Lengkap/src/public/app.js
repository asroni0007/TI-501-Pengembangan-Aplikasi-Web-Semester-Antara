const produkList = document.querySelector('#produkList');
const produkForm = document.querySelector('#produkForm');
const pesan = document.querySelector('#pesan');
const muatUlang = document.querySelector('#muatUlang');

async function ambilProduk() {
  produkList.innerHTML = '<p>Sedang mengambil data...</p>';

  try {
    const response = await fetch('/api/produk');
    const result = await response.json();

    if (!result.sukses) {
      throw new Error(result.pesan);
    }

    renderProduk(result.data);
  } catch (error) {
    produkList.innerHTML = `<p class="message error">${error.message}</p>`;
  }
}

function renderProduk(items) {
  if (items.length === 0) {
    produkList.innerHTML = '<p>Belum ada produk.</p>';
    return;
  }

  produkList.innerHTML = items.map((produk) => `
    <article class="produk-card">
      <h3>${produk.nama}</h3>
      <p>${produk.deskripsi}</p>
      <p><strong>Kategori:</strong> ${produk.kategori}</p>
      <p><strong>Harga:</strong> Rp${produk.harga.toLocaleString('id-ID')}</p>
      <p><strong>Stok:</strong> ${produk.stok}</p>
    </article>
  `).join('');
}

produkForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  pesan.textContent = '';
  pesan.classList.remove('error');

  const formData = new FormData(produkForm);
  const body = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/produk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.errors ? result.errors.join(' ') : result.pesan);
    }

    pesan.textContent = result.pesan;
    produkForm.reset();
    ambilProduk();
  } catch (error) {
    pesan.textContent = error.message;
    pesan.classList.add('error');
  }
});

muatUlang.addEventListener('click', ambilProduk);
ambilProduk();
