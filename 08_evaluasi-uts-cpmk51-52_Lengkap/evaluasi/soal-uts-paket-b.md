# Soal UTS TI-501 — Paket B

## Ketentuan Umum

- Kerjakan secara mandiri.
- Gunakan bahasa yang jelas dan ringkas.
- Untuk bagian praktik, sertakan kode dan screenshot hasil uji.
- Waktu disarankan: 100 menit.

## Bagian A — Konsep Dasar Web (20 poin)

1. Jelaskan alur request dari browser menuju server Express hingga kembali menjadi response JSON.
2. Apa fungsi atribut `required`, `type`, dan `label` pada HTML form?
3. Bandingkan Flexbox dan Grid untuk layout halaman web.
4. Jelaskan peran middleware pada Express.
5. Sebutkan minimal tiga contoh status code HTTP yang umum pada API.

## Bagian B — Analisis Kode (25 poin)

Perhatikan kode berikut:

```js
fetch('/api/produk')
  .then(response => response.text())
  .then(data => {
    list.innerHTML = data;
  });
```

Jawab:

1. Temukan minimal dua masalah pada kode tersebut jika API mengirim JSON.
2. Perbaiki kode agar data JSON dapat ditampilkan sebagai daftar produk.
3. Jelaskan risiko penggunaan `innerHTML` jika data berasal dari input pengguna.

## Bagian C — Desain REST API (25 poin)

Rancang kontrak endpoint untuk fitur **Rekomendasi Promosi Produk UMKM**. Minimal memuat:

1. `GET /api/promosi`
2. `GET /api/promosi/:id`
3. `POST /api/promosi`
4. `PUT /api/promosi/:id`
5. `DELETE /api/promosi/:id`

Untuk setiap endpoint, tuliskan method, path, request body bila ada, response sukses, dan response error.

## Bagian D — Praktik Mini (30 poin)

Gunakan starter code pada folder `src`. Lengkapi aplikasi agar memiliki:

1. Halaman web responsif untuk menampilkan produk UMKM.
2. Form HTML untuk menambah produk.
3. JavaScript event handling untuk submit form.
4. Endpoint `POST /api/produk` dan response JSON konsisten.
5. Screenshot hasil uji GET dan POST.
