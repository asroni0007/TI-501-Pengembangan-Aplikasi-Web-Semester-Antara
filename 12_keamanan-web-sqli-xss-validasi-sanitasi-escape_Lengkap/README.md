# Pertemuan 12 — Keamanan Dasar Aplikasi Web: SQL Injection, XSS, Validasi, Sanitasi, dan Escape HTML

**CPMK53 · Amanah · Secure by design · SQL Injection · XSS · Validasi server-side · Sanitasi · Escape HTML**

## Capaian Pembelajaran

Mahasiswa mampu menerapkan prinsip keamanan dasar pada aplikasi web **“Asisten AI untuk UMKM”** dengan memvalidasi input di sisi server, menggunakan parameterized query untuk mencegah SQL Injection, memilih safe DOM sink/escape HTML untuk mencegah XSS, serta menggunakan sanitasi hanya ketika aplikasi memang mengizinkan sebagian markup HTML. Penerapan ini menjadi wujud **Amanah** dalam menjaga data, integritas layanan, dan kepercayaan pengguna.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 12 RPS TI-501:

- SQL Injection dan parameterized query;
- reflected, stored, dan DOM-based XSS;
- validasi input server-side;
- sanitasi HTML sesuai kebijakan;
- escape/output encoding sesuai konteks HTML;
- pengujian negatif dan pencatatan error yang aman.

## Alur Pembelajaran

```text
Input tidak tepercaya
        ↓
Validasi server-side (tipe, panjang, format, aturan bisnis)
        ↓
Proses sesuai tujuan
 ┌──────┴────────────┐
 ↓                   ↓
Query database       Tampilkan ke antarmuka
Parameterized query  textContent / escape HTML
                     atau sanitasi HTML jika markup diizinkan
 └──────────┬────────┘
            ↓
Pengujian negatif, logging aman, dan respons error konsisten
```

## Isi Folder

```text
12_keamanan-web-sqli-xss-validasi-sanitasi-escape_Lengkap/
├── README.md
├── PANDUAN_UPLOAD.md
├── assets/
│   ├── alur-pertahanan-berlapis.svg
│   ├── sqli-query-aman.svg
│   └── xss-output-aman.svg
├── materi/
│   └── PPT_Pertemuan_12_TI501_Keamanan_Web_SQLi_XSS_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_12_TI501_Keamanan_Web_VALID.docx
├── src/
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   ├── config/db.js
│   ├── database/schema.sql
│   ├── middleware/errorHandler.js
│   ├── routes/produkRoutes.js
│   ├── utils/escapeHtml.js
│   ├── validators/produkValidator.js
│   └── public/{index.html,style.css,app.js}
├── tugas/
│   ├── instruksi-tugas.md
│   ├── rubrik-penilaian.md
│   ├── checklist-keamanan.md
│   └── template-laporan.md
└── demo-opsional/
    └── index.html
```

## Cara Menjalankan Praktikum

1. Masuk ke folder `src`.
2. Salin `.env.example` menjadi `.env` dan sesuaikan koneksi MySQL.
3. Jalankan `database/schema.sql` pada MySQL.
4. Instal dependency dengan `npm install`.
5. Jalankan `npm run dev`.
6. Buka `http://localhost:3000`.
7. Uji input normal dan pengujian negatif yang disediakan pada panduan.

## Batas Etis Praktikum

Seluruh percobaan hanya dilakukan pada aplikasi lokal milik sendiri. Jangan menguji payload pada situs, akun, jaringan, atau data pihak lain tanpa izin tertulis.

## Referensi Utama

- OWASP SQL Injection Prevention Cheat Sheet
- OWASP Cross Site Scripting Prevention Cheat Sheet
- OWASP Input Validation Cheat Sheet
- OWASP DOM based XSS Prevention Cheat Sheet
