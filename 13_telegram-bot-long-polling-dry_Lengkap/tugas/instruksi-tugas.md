# Instruksi Tugas Pertemuan 13

Buat pengembangan kecil pada starter project Telegram Bot API berikut.

## Ketentuan

1. Jalankan REST API dan bot Telegram menggunakan long polling.
2. Tambahkan minimal satu perintah baru, misalnya:
   - `/produk` untuk daftar produk contoh;
   - `/promo nama produk` untuk membuat promo singkat;
   - `/faq` untuk pertanyaan umum pelanggan.
3. Letakkan logic utama di folder `services/`, bukan langsung di handler Telegram.
4. Pastikan logic tersebut dapat dipanggil dari REST API dan Telegram Bot.
5. Dokumentasikan contoh chat Telegram dan contoh request REST API.

## Output Dikumpulkan

- Link repository atau folder project.
- Screenshot bot Telegram saat menerima perintah.
- Screenshot endpoint REST API yang menggunakan logic yang sama.
- Penjelasan singkat penerapan prinsip DRY.
