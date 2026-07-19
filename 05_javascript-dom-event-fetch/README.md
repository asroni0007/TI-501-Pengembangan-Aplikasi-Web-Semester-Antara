# Pertemuan 5 — JavaScript DOM, Event, dan Fetch API

**CPMK52 · Interaktivitas web · DOM manipulation · Event handling · Fetch API**

## Capaian Pembelajaran

Setelah mengikuti pertemuan ini, mahasiswa mampu:

1. Menjelaskan peran JavaScript dalam aplikasi web sisi klien.
2. Memilih elemen HTML menggunakan DOM selector.
3. Mengubah konten dan atribut elemen melalui manipulasi DOM.
4. Menangani aksi pengguna menggunakan event listener.
5. Melakukan validasi input sederhana pada form.
6. Mengambil data contoh menggunakan Fetch API.

## Kaitan dengan RPS

Pertemuan 5 pada RPS membahas: **DOM manipulation, event handling, asynchronous JavaScript, dan Fetch API**. Materi ini menjadi jembatan dari halaman statis menuju aplikasi web interaktif sebelum masuk ke Node.js dan Express.js pada Pertemuan 6.

## Studi Kasus

Mahasiswa mengembangkan halaman **Asisten Caption UMKM**. Pengguna memasukkan nama produk, keunggulan produk, dan platform promosi. JavaScript memproses input, melakukan validasi, lalu menampilkan caption promosi sederhana.

## Struktur Folder

```text
05_javascript-dom-event-fetch/
├── README.md
├── PANDUAN_UPLOAD.md
├── assets/
│   ├── dom-event-fetch-flow.svg
│   ├── arsitektur-js-asisten-ai-umkm.svg
│   └── event-loop-ui.svg
├── demo-opsional/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── data/contoh-produk.json
├── materi/
│   └── PPT_Pertemuan_5_TI501_JavaScript_DOM_Event_Fetch_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_5_TI501_JavaScript_DOM_Event_Fetch_VALID.docx
├── src/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── data/contoh-produk.json
└── tugas/
    ├── checklist-interaktivitas.md
    ├── instruksi-tugas.md
    ├── rubrik-penilaian.md
    └── template-tugas-individu.md
```

## Cara Menjalankan

1. Buka folder `src/` menggunakan Visual Studio Code.
2. Jalankan dengan ekstensi **Live Server**.
3. Buka halaman di browser.
4. Isi form dan klik **Buat Caption**.
5. Klik **Ambil Contoh Produk** untuk mencoba Fetch API.

> Catatan: Fetch API ke file JSON lokal biasanya tidak berjalan jika file dibuka langsung melalui `file://`. Gunakan Live Server.

## File Pembelajaran

- Slide: `materi/PPT_Pertemuan_5_TI501_JavaScript_DOM_Event_Fetch_VALID.pptx`
- Panduan praktikum: `panduan/Panduan_Praktikum_Pertemuan_5_TI501_JavaScript_DOM_Event_Fetch_VALID.docx`
- Source awal: `src/`
- Demo dosen: `demo-opsional/`
- Tugas mahasiswa: `tugas/`
