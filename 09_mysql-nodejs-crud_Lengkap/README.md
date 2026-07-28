# Pertemuan 9 — MySQL, Koneksi Node.js, dan Operasi CRUD

**CPMK52 · Perancangan basis data relasional · Node.js–MySQL · CRUD Produk UMKM**

## Capaian Pembelajaran

Mahasiswa mampu merancang dan mengimplementasikan basis data relasional MySQL, menghubungkan aplikasi Express.js ke database, serta membuat operasi CRUD untuk fitur produk pada studi kasus aplikasi web **“Asisten AI untuk UMKM”**.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 9 RPS TI-501:

- perancangan skema basis data;
- koneksi Node.js–MySQL;
- operasi CRUD;
- penguatan studi kasus aplikasi web Asisten AI untuk UMKM.

## Isi Folder

```text
09_mysql-nodejs-crud_Lengkap/
├── README.md
├── PANDUAN_UPLOAD.md
├── assets/
│   ├── relational-schema.svg
│   ├── node-mysql-flow.svg
│   └── crud-lifecycle.svg
├── materi/
│   └── PPT_Pertemuan_9_TI501_MySQL_NodeJS_CRUD_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_9_TI501_MySQL_NodeJS_CRUD_VALID.docx
├── src/
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   ├── config/db.js
│   ├── controllers/produkController.js
│   ├── database/schema.sql
│   ├── public/index.html
│   ├── public/style.css
│   ├── public/app.js
│   ├── routes/produkRoutes.js
│   └── validators/produkValidator.js
├── tugas/
│   ├── instruksi-tugas.md
│   ├── rubrik-penilaian.md
│   ├── checklist-crud.md
│   └── template-laporan.md
└── demo-opsional/
    └── index.html
```

## Cara Menjalankan Praktikum

1. Buat database MySQL dengan menjalankan file `src/database/schema.sql`.
2. Salin `src/.env.example` menjadi `src/.env`.
3. Sesuaikan konfigurasi `DB_HOST`, `DB_USER`, `DB_PASSWORD`, dan `DB_NAME`.
4. Masuk ke folder `src`, lalu jalankan:

```bash
npm install
npm run dev
```

5. Buka `http://localhost:3000`.
6. Uji endpoint CRUD menggunakan browser, Thunder Client, Postman, atau cURL.

## Catatan Dosen

Materi ini menjadi jembatan dari REST API in-memory pada Pertemuan 7 menuju aplikasi backend berbasis database. Pada akhir praktikum, data produk tidak lagi hilang ketika server di-restart karena tersimpan di MySQL.
