# Tugas Praktikum Pertemuan 12

## Tujuan
Melakukan hardening pada modul produk **Asisten AI untuk UMKM** sebagai wujud Amanah.

## Langkah
1. Jalankan starter project dan dokumentasikan kondisi awal.
2. Tambahkan validasi server-side untuk nama, deskripsi, harga, dan satu field tambahan pilihan Anda.
3. Pastikan seluruh query dengan input pengguna memakai placeholder/parameterized query.
4. Pastikan data tidak tepercaya dirender dengan `textContent`; jelaskan kapan sanitasi HTML dibutuhkan.
5. Susun sedikitnya 8 pengujian negatif: tipe salah, nilai di luar rentang, input terlalu panjang, payload SQLi, stored/reflected/DOM XSS, dan JSON tidak valid.
6. Catat hasil sebelum dan sesudah perbaikan tanpa mengekspos kredensial atau data nyata.
7. Buat commit terpisah untuk validasi, SQLi, XSS, dan pengujian.

## Pengumpulan
- source code tanpa `.env` dan `node_modules`;
- laporan PDF/DOCX menggunakan template;
- tabel bukti pengujian;
- tautan repository/commit.

> Pengujian hanya pada localhost atau sistem yang secara tertulis mengizinkan pengujian.
