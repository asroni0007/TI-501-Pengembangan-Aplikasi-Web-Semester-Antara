const tombol = document.querySelector('#loadProduk');
const list = document.querySelector('#produkList');

async function loadProduk() {
  try {
    const response = await fetch('/api/produk');
    const data = await response.json();

    list.innerHTML = data.map((item) => `
      <li>
        <strong>${item.nama}</strong>
        <span>${item.kategori}</span>
        <p>${item.keunggulan}</p>
      </li>
    `).join('');
  } catch (error) {
    list.innerHTML = '<li>Data produk gagal dimuat. Pastikan server Express aktif.</li>';
  }
}

tombol.addEventListener('click', loadProduk);
