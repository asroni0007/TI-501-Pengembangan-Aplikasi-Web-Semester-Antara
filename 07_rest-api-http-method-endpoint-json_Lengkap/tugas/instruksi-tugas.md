# Instruksi Tugas Pertemuan 7

Kembangkan server Express Pertemuan 6 menjadi **REST API produk UMKM** untuk studi kasus **Asisten AI untuk UMKM**.

## Ketentuan

1. Jalankan source pada folder `src`.
2. Pastikan endpoint berikut aktif dan mengirim JSON valid:
   - `GET /api/status`
   - `GET /api/produk`
   - `GET /api/produk/:id`
   - `POST /api/produk`
   - `PUT /api/produk/:id`
   - `DELETE /api/produk/:id`
3. Uji minimal 4 HTTP method: GET, POST, PUT, dan DELETE.
4. Gunakan request body JSON saat menambah dan mengubah produk.
5. Tambahkan validasi sederhana: nama produk, kategori, harga, stok, dan deskripsi tidak boleh kosong.
6. Tulis kontrak endpoint dalam laporan: method, path, request body, response sukses, dan response error.
7. Sertakan screenshot hasil pengujian dari Thunder Client/Postman/cURL serta screenshot halaman frontend.

## Pengumpulan

- Format: ZIP atau link GitHub.
- Nama file: `NIM_Nama_Pertemuan07.zip`.
- Sertakan laporan singkat dengan kontrak endpoint dan hasil pengujian.
