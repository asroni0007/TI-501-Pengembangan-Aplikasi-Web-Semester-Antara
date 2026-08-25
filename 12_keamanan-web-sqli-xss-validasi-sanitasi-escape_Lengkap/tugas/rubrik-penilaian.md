# Rubrik Penilaian Pertemuan 12

| Komponen | Bobot | Kriteria unggul |
|---|---:|---|
| Validasi server-side | 25% | Mencakup tipe, panjang, format/rentang, aturan bisnis, respons 4xx konsisten |
| Pencegahan SQL Injection | 25% | Semua input query terparameterisasi; tidak ada concatenation berbahaya |
| Pencegahan XSS | 25% | Safe sink/escape sesuai konteks; sanitasi dijelaskan dan diterapkan tepat guna |
| Pengujian dan bukti | 15% | ≥8 uji negatif, hasil sebelum–sesudah, bukti mudah diverifikasi |
| Amanah, etika, dan kualitas kode | 10% | Tanpa rahasia/data nyata; error aman; struktur rapi; batas pengujian dipatuhi |
| **Total** | **100%** | |

Kesalahan kritis: menguji sistem pihak lain tanpa izin, mengunggah kredensial, atau tetap menggunakan query hasil concatenation untuk input pengguna.
