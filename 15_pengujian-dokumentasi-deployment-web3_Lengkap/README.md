# Pertemuan 15 — Pengujian, Dokumentasi README, Deployment, dan Pengayaan Web3

**CPMK53 · Testing · Dokumentasi teknis · Deployment · Client-server vs dApp/Web3**

## Capaian Pembelajaran

Mahasiswa mampu melakukan pengujian fungsional otomatis, menyusun dokumentasi teknis README, menyiapkan aplikasi untuk deployment, serta menjelaskan perbedaan arsitektur client-server dengan arsitektur dApp/smart contract sebagai pengayaan wawasan Web3.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 15 RPS TI-501:

- pengujian fungsional otomatis;
- dokumentasi teknis README;
- konsep deployment;
- arsitektur dApps;
- smart contract sebagai perbandingan dengan arsitektur client-server;
- persiapan demo akhir studi kasus **“Asisten AI untuk UMKM”**.

## Isi Folder

```text
15_pengujian-dokumentasi-deployment-web3_Lengkap/
├── README.md
├── PANDUAN_UPLOAD.md
├── assets/
│   ├── testing-pyramid.svg
│   ├── deployment-flow.svg
│   ├── client-server-vs-dapp.svg
│   └── release-checklist.svg
├── materi/
│   └── PPT_Pertemuan_15_TI501_Testing_Documentation_Deployment_Web3_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_15_TI501_Testing_Documentation_Deployment_Web3_VALID.docx
├── src/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   ├── routes/assistantRoutes.js
│   ├── services/assistantService.js
│   ├── tests/assistant.test.js
│   └── tests/health.test.js
├── deployment/
│   ├── Dockerfile
│   ├── Procfile
│   ├── render.yaml
│   └── vercel.json
├── tugas/
│   ├── instruksi-tugas.md
│   ├── rubrik-penilaian.md
│   ├── checklist-release.md
│   └── template-laporan.md
└── demo-opsional/
    └── index.html
```

## Cara Menjalankan Praktikum

1. Masuk ke folder `src`.
2. Salin `.env.example` menjadi `.env`.
3. Install dependency.

```bash
npm install
```

4. Jalankan aplikasi.

```bash
npm run dev
```

5. Jalankan pengujian otomatis.

```bash
npm test
```

6. Buka endpoint utama.

```text
GET http://localhost:3000/health
POST http://localhost:3000/api/assistant
```

## Catatan Dosen

Pertemuan 15 berfungsi sebagai jembatan menuju UAS. Fokusnya bukan menambah fitur besar, tetapi memastikan aplikasi siap diuji, terdokumentasi, dan dapat dijelaskan dari sisi arsitektur. Pengayaan Web3 cukup sebagai pembanding konsep agar mahasiswa dapat melihat perbedaan antara backend client-server dan smart contract/dApp.
