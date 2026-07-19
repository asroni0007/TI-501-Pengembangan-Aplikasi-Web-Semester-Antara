# Pertemuan 6 — Node.js Runtime, Express.js, Middleware, dan Static File Serving

**CPMK52 · Praktikum backend dasar · Studi kasus Asisten AI untuk UMKM**

## Capaian Pembelajaran

Mahasiswa mampu membangun server web sederhana menggunakan Node.js dan Express.js, menerapkan middleware dasar, dan melayani file static dari folder `public`.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 6 RPS TI-501:

- Node.js runtime;
- Express.js dasar;
- middleware;
- static file serving.

## Isi Folder

```text
06_nodejs-express-middleware-static/
├── PANDUAN_UPLOAD.md
├── README.md
├── assets/
│   ├── arsitektur-node-express.svg
│   └── alur-middleware.svg
├── demo-opsional/
│   └── index.html
├── materi/
│   └── PPT_Pertemuan_6_TI501_NodeJS_Express_Middleware_Static_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_6_TI501_NodeJS_Express_Middleware_Static_VALID.docx
├── src/
│   ├── package.json
│   ├── server.js
│   ├── data/
│   │   └── produk.js
│   ├── middleware/
│   │   └── requestLogger.js
│   └── public/
│       ├── index.html
│       ├── style.css
│       └── app.js
└── tugas/
    ├── checklist-validasi.md
    ├── instruksi-tugas.md
    ├── rubrik-penilaian.md
    └── template-laporan.md
```

## Cara Menjalankan Source

```bash
cd src
npm install
npm run dev
```

Buka:

```text
http://localhost:3000
http://localhost:3000/api/status
http://localhost:3000/api/produk
```

## Output Praktikum

1. Server Express berjalan di localhost.
2. Middleware logger mencatat request pada terminal.
3. File static dari folder `public` tampil di browser.
4. Endpoint `/api/status` dan `/api/produk` mengirim JSON.
5. Mahasiswa menambahkan minimal satu data produk UMKM.

## Catatan

Materi database, REST API lengkap, autentikasi, dan integrasi AI API belum menjadi fokus Pertemuan 6. Materi tersebut dilanjutkan pada pertemuan berikutnya sesuai RPS.
