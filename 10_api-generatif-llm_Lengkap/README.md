# Pertemuan 10 — Integrasi API Generatif/LLM, API Key, dan Prompt Engineering

**CPMK52 · Integrasi API cerdas · Gemini/OpenAI server-side · Prompt engineering · Keamanan `.env`**

## Capaian Pembelajaran

Mahasiswa mampu mengintegrasikan aplikasi web dengan API kecerdasan buatan generatif, menjaga keamanan API key melalui konfigurasi server-side `.env`, menyusun prompt yang terstruktur, dan menampilkan hasil generatif pada studi kasus aplikasi web **“Asisten AI untuk UMKM”**.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 10 RPS TI-501:

- konsep API generatif/LLM;
- keamanan API key melalui `.env`;
- prompt engineering;
- integrasi Gemini/OpenAI API di sisi server;
- pembuatan fitur AI untuk menghasilkan konten promosi produk UMKM.

## Isi Folder

```text
10_api-generatif-llm_Lengkap/
├── README.md
├── PANDUAN_UPLOAD.md
├── assets/
│   ├── ai-api-flow.svg
│   ├── prompt-template.svg
│   └── api-key-security.svg
├── materi/
│   └── PPT_Pertemuan_10_TI501_API_Generatif_LLM_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_10_TI501_API_Generatif_LLM_VALID.docx
├── src/
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   ├── config/db.js
│   ├── controllers/aiController.js
│   ├── controllers/produkController.js
│   ├── database/schema.sql
│   ├── public/index.html
│   ├── public/style.css
│   ├── public/app.js
│   ├── routes/aiRoutes.js
│   ├── routes/produkRoutes.js
│   ├── services/aiService.js
│   └── validators/aiValidator.js
├── tugas/
│   ├── instruksi-tugas.md
│   ├── rubrik-penilaian.md
│   ├── checklist-integrasi-ai.md
│   └── template-laporan.md
└── demo-opsional/
    └── index.html
```

## Cara Menjalankan Praktikum

1. Buat database MySQL dengan menjalankan `src/database/schema.sql`.
2. Salin `src/.env.example` menjadi `src/.env`.
3. Isi konfigurasi database dan pilih provider AI:
   - `AI_PROVIDER=mock` untuk uji lokal tanpa API key;
   - `AI_PROVIDER=gemini` untuk Gemini API;
   - `AI_PROVIDER=openai` untuk OpenAI API.
4. Masuk ke folder `src`, lalu jalankan:

```bash
npm install
npm run dev
```

5. Buka `http://localhost:3000`.
6. Pilih produk, masukkan gaya promosi, lalu klik **Generate Konten AI**.

## Catatan Dosen

Mode `mock` disediakan agar praktikum tetap bisa berjalan walaupun mahasiswa belum memiliki API key. Saat demonstrasi API asli, tekankan bahwa API key tidak boleh ditulis di JavaScript frontend dan tidak boleh diunggah ke GitHub.
