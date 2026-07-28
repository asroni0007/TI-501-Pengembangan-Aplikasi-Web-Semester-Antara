# Soal UTS TI-501 — Paket A

## Ketentuan Umum

- Kerjakan secara mandiri.
- Gunakan bahasa yang jelas dan ringkas.
- Untuk bagian praktik, sertakan kode dan screenshot hasil uji.
- Waktu disarankan: 100 menit.

## Bagian A — Konsep Dasar Web (20 poin)

1. Jelaskan perbedaan peran HTML, CSS, JavaScript, Node.js, dan Express dalam aplikasi web modern.
2. Sebutkan tiga alasan penggunaan tag semantik pada HTML.
3. Jelaskan fungsi media query pada desain responsif.
4. Apa perbedaan antara `GET` dan `POST` dalam REST API?
5. Mengapa response API sebaiknya konsisten menggunakan format JSON?

## Bagian B — Analisis Kode (25 poin)

Perhatikan kode berikut:

```js
app.get('/produk/:id', (req, res) => {
  const produk = daftarProduk.find(item => item.id === req.params.id);
  res.json(produk);
});
```

Jawab:

1. Temukan minimal dua masalah pada kode tersebut.
2. Perbaiki kode agar id dibaca sebagai angka dan mengirim status `404` jika produk tidak ditemukan.
3. Jelaskan mengapa status code penting pada API.

## Bagian C — Desain REST API (25 poin)

Rancang kontrak endpoint untuk fitur **Produk UMKM** pada aplikasi “Asisten AI untuk UMKM”. Minimal memuat:

1. `GET /api/produk`
2. `GET /api/produk/:id`
3. `POST /api/produk`
4. `PUT /api/produk/:id`
5. `DELETE /api/produk/:id`

Untuk setiap endpoint, tuliskan method, path, request body bila ada, response sukses, dan response error.

## Bagian D — Praktik Mini (30 poin)

Gunakan starter code pada folder `src`. Lengkapi aplikasi agar memiliki:

1. Tampilan HTML semantik untuk daftar produk.
2. CSS responsif sederhana menggunakan Flexbox atau Grid.
3. JavaScript Fetch untuk membaca data dari `GET /api/produk`.
4. Endpoint `POST /api/produk` dengan validasi nama, kategori, harga, dan stok.
5. Screenshot pengujian dari browser dan Thunder Client/Postman/cURL.
