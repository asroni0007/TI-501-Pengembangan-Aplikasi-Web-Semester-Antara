# Instruksi Tugas Pertemuan 9

## Studi Kasus

Kembangkan fitur **Manajemen Produk UMKM** pada aplikasi “Asisten AI untuk UMKM” menggunakan Node.js, Express.js, MySQL, dan Fetch API.

## Ketentuan

1. Gunakan database MySQL dengan minimal dua tabel: `kategori` dan `produk`.
2. Implementasikan endpoint CRUD:
   - `GET /api/produk`
   - `GET /api/produk/:id`
   - `POST /api/produk`
   - `PUT /api/produk/:id`
   - `DELETE /api/produk/:id`
3. Gunakan parameterized query, bukan string SQL yang digabung langsung dengan input pengguna.
4. Buat response JSON konsisten untuk sukses dan error.
5. Hubungkan minimal fitur read dan create ke halaman frontend.

## Output Pengumpulan

- Folder source code tanpa `node_modules`.
- File `schema.sql`.
- Screenshot tabel database.
- Screenshot pengujian endpoint.
- Laporan singkat menggunakan `template-laporan.md`.
