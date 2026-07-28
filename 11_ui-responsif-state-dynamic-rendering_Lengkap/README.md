# Pertemuan 11 — UI Responsif Lanjutan, State Sederhana, dan Dynamic Rendering

**CPMK52 · Navigasi responsif · State management sederhana · Dynamic rendering · Komponen data badge dan kartu**

## Capaian Pembelajaran

Mahasiswa mampu menerapkan desain UI responsif lanjutan dengan navigasi yang adaptif, mengelola state sederhana di JavaScript, melakukan dynamic rendering dari data API/JSON, serta membangun komponen berbasis data seperti kartu produk, badge status, ringkasan dashboard, dan riwayat konten AI pada studi kasus **“Asisten AI untuk UMKM”**.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 11 RPS TI-501:

- desain UI responsif lanjutan dengan navigasi dan layout adaptif;
- state management sederhana di frontend;
- dynamic rendering berbasis data;
- komponen UI berbasis data, seperti badge, kartu, summary, dan empty state.

## Isi Folder

```text
11_ui-responsif-state-dynamic-rendering_Lengkap/
├── README.md
├── PANDUAN_UPLOAD.md
├── assets/
│   ├── state-render-flow.svg
│   ├── responsive-nav.svg
│   └── component-card-badge.svg
├── materi/
│   └── PPT_Pertemuan_11_TI501_UI_State_Dynamic_Rendering_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_11_TI501_UI_State_Dynamic_Rendering_VALID.docx
├── src/
│   ├── package.json
│   ├── server.js
│   ├── database/schema.sql
│   └── public/
│       ├── index.html
│       ├── style.css
│       └── app.js
├── tugas/
│   ├── instruksi-tugas.md
│   ├── rubrik-penilaian.md
│   ├── checklist-ui-state.md
│   └── template-laporan.md
└── demo-opsional/
    └── index.html
```

## Cara Menjalankan Praktikum

1. Masuk ke folder `src`.
2. Jalankan instalasi dependency:

```bash
npm install
```

3. Jalankan server:

```bash
npm run dev
```

4. Buka `http://localhost:3000`.
5. Uji fitur pencarian, filter status, kartu produk, badge, navigasi responsif, dan riwayat konten AI.

## Catatan Dosen

Starter project menyediakan endpoint dummy berbasis array agar praktikum dapat berjalan tanpa konfigurasi database. File `database/schema.sql` tetap disediakan sebagai acuan integrasi dengan database dari Pertemuan 9 dan 10.
