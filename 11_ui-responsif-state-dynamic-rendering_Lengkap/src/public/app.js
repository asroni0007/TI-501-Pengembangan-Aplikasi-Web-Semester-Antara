const state = {
  view: 'produk',
  query: '',
  status: 'semua',
  produk: [],
  konten: [],
  dashboard: null,
  loading: true
};

const el = {
  nav: document.getElementById('mainNav'),
  menuButton: document.getElementById('menuButton'),
  searchInput: document.getElementById('searchInput'),
  statusFilter: document.getElementById('statusFilter'),
  resetButton: document.getElementById('resetButton'),
  summary: document.getElementById('summary'),
  content: document.getElementById('content'),
  emptyTemplate: document.getElementById('emptyTemplate')
};

const formatRupiah = value => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
const badge = status => `<span class="badge ${status}">${status.toUpperCase()}</span>`;

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Gagal mengambil data dari ${url}`);
  return response.json();
}

async function loadData() {
  state.loading = true;
  render();
  try {
    const [produkRes, kontenRes, dashboardRes] = await Promise.all([
      fetchJSON('/api/produk'),
      fetchJSON('/api/konten'),
      fetchJSON('/api/dashboard')
    ]);
    state.produk = produkRes.data;
    state.konten = kontenRes.data;
    state.dashboard = dashboardRes.data;
  } catch (error) {
    console.error(error);
    state.produk = [];
    state.konten = [];
    state.dashboard = { total_produk: 0, produk_aktif: 0, produk_draft: 0, total_konten: 0 };
  } finally {
    state.loading = false;
    render();
  }
}

function setState(partial) {
  Object.assign(state, partial);
  render();
}

function renderSummary() {
  const data = state.dashboard || { total_produk: 0, produk_aktif: 0, produk_draft: 0, total_konten: 0 };
  const items = [
    ['Total Produk', data.total_produk],
    ['Produk Aktif', data.produk_aktif],
    ['Produk Draft', data.produk_draft],
    ['Total Konten AI', data.total_konten]
  ];
  el.summary.innerHTML = items.map(([label, value]) => `
    <article class="summary-card"><span>${label}</span><strong>${value}</strong></article>
  `).join('');
}

function getFilteredItems() {
  const keyword = state.query.trim().toLowerCase();
  const source = state.view === 'konten' ? state.konten : state.produk;
  return source.filter(item => {
    const text = JSON.stringify(item).toLowerCase();
    const cocokKeyword = !keyword || text.includes(keyword);
    const cocokStatus = state.status === 'semua' || item.status === state.status;
    return cocokKeyword && cocokStatus;
  });
}

function renderProduk(items) {
  return items.map(item => `
    <article class="card">
      ${badge(item.status)}
      <h2>${item.nama}</h2>
      <p>Kategori: ${item.kategori}</p>
      <p>Harga: ${formatRupiah(item.harga)}</p>
      <p>Stok: ${item.stok} · Konten AI: ${item.konten}</p>
      <div class="card-actions">
        <a class="primary-link" href="#">Detail produk</a>
        <span>${item.stok > 0 ? 'Tersedia' : 'Stok kosong'}</span>
      </div>
    </article>
  `).join('');
}

function renderKonten(items) {
  return items.map(item => `
    <article class="card">
      ${badge(item.status)}
      <h2>${item.judul}</h2>
      <p>Produk: ${item.produk}</p>
      <p>Kanal: ${item.kanal} · Gaya: ${item.gaya}</p>
      <p>Tanggal: ${item.tanggal}</p>
      <div class="card-actions">
        <a class="primary-link" href="#">Lihat caption</a>
        <span>ID #${item.id}</span>
      </div>
    </article>
  `).join('');
}

function renderLaporan() {
  const topProduk = [...state.produk].sort((a, b) => b.konten - a.konten).slice(0, 3);
  return topProduk.map((item, index) => `
    <article class="card">
      <span class="badge siap">TOP ${index + 1}</span>
      <h2>${item.nama}</h2>
      <p>${item.konten} konten AI dibuat.</p>
      <p>Status produk: ${item.status}</p>
    </article>
  `).join('');
}

function renderContent() {
  if (state.loading) {
    el.content.innerHTML = '<div class="empty-state"><h2>Memuat data...</h2><p>Mohon tunggu sebentar.</p></div>';
    return;
  }
  let html = '';
  if (state.view === 'laporan') {
    html = renderLaporan();
  } else {
    const items = getFilteredItems();
    html = state.view === 'konten' ? renderKonten(items) : renderProduk(items);
  }
  if (!html) html = el.emptyTemplate.innerHTML;
  el.content.innerHTML = html;
}

function renderNav() {
  document.querySelectorAll('.nav-link').forEach(button => {
    button.classList.toggle('active', button.dataset.view === state.view);
  });
}

function render() {
  renderNav();
  renderSummary();
  renderContent();
}

el.nav.addEventListener('click', event => {
  const button = event.target.closest('[data-view]');
  if (!button) return;
  setState({ view: button.dataset.view });
  el.nav.classList.remove('open');
});

el.menuButton.addEventListener('click', () => el.nav.classList.toggle('open'));
el.searchInput.addEventListener('input', event => setState({ query: event.target.value }));
el.statusFilter.addEventListener('change', event => setState({ status: event.target.value }));
el.resetButton.addEventListener('click', () => {
  el.searchInput.value = '';
  el.statusFilter.value = 'semua';
  setState({ query: '', status: 'semua' });
});

loadData();
