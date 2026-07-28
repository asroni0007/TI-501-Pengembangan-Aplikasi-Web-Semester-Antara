# Laporan Singkat Pertemuan 7

**Nama:**  
**NIM:**  
**Kelas:**  

## 1. Ringkasan API

Tuliskan tujuan API yang dibuat dan resource utama yang dipakai.

## 2. Kontrak Endpoint

| Method | Endpoint | Request Body | Response Sukses | Response Error |
|---|---|---|---|---|
| GET | `/api/status` | - | status API | - |
| GET | `/api/produk` | - | daftar produk | - |
| GET | `/api/produk/:id` | - | detail produk | 404 jika tidak ditemukan |
| POST | `/api/produk` | JSON produk | produk baru | 400 jika input tidak valid |
| PUT | `/api/produk/:id` | JSON produk | produk hasil update | 400/404 |
| DELETE | `/api/produk/:id` | - | produk terhapus | 404 jika tidak ditemukan |

## 3. Screenshot Pengujian

Lampirkan screenshot hasil uji:

1. `GET /api/produk`
2. `POST /api/produk`
3. `PUT /api/produk/:id`
4. `DELETE /api/produk/:id`
5. Halaman frontend sederhana

## 4. Refleksi Singkat

Jelaskan dengan bahasa sendiri:

- Perbedaan route biasa dan REST API.
- Fungsi HTTP method GET, POST, PUT, dan DELETE.
- Mengapa kontrak endpoint perlu ditulis sebelum frontend dan backend diintegrasikan.
