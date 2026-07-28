# Pertemuan 13 — Bot Messaging, Long Polling, Telegram Bot API, dan Prinsip DRY

**CPMK52 · Bot messaging · Long polling · Telegram Bot API · Reuse logic · DRY**

## Capaian Pembelajaran

Mahasiswa mampu mengintegrasikan aplikasi web dengan platform percakapan berbasis polling melalui Telegram Bot API, memahami konsep bot messaging dan long polling, serta menerapkan prinsip **DRY (Don't Repeat Yourself)** agar logic layanan aplikasi dapat digunakan ulang pada REST API dan bot.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 13 RPS TI-501:

- konsep bot messaging;
- long polling;
- Telegram Bot API;
- pemisahan service logic dari controller/handler;
- reuse logic dengan prinsip DRY pada studi kasus **“Asisten AI untuk UMKM”**.

## Isi Folder

```text
13_telegram-bot-long-polling-dry_Lengkap/
├── README.md
├── PANDUAN_UPLOAD.md
├── assets/
│   ├── bot-messaging-flow.svg
│   ├── long-polling-loop.svg
│   └── dry-reuse-logic.svg
├── materi/
│   └── PPT_Pertemuan_13_TI501_Telegram_Bot_Long_Polling_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_13_TI501_Telegram_Bot_Long_Polling_VALID.docx
├── src/
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   ├── handlers/telegramHandler.js
│   ├── services/umkmAssistantService.js
│   └── utils/telegramApi.js
├── tugas/
│   ├── instruksi-tugas.md
│   ├── rubrik-penilaian.md
│   ├── checklist-bot-polling.md
│   └── template-laporan.md
└── demo-opsional/
    └── index.html
```

## Cara Menjalankan Praktikum

1. Masuk ke folder `src`.
2. Salin `.env.example` menjadi `.env`.
3. Isi `TELEGRAM_BOT_TOKEN` dari BotFather.
4. Jalankan instalasi dependency:

```bash
npm install
```

5. Jalankan server sekaligus long polling bot:

```bash
npm run dev
```

6. Uji REST API melalui browser/Postman:

```text
GET http://localhost:3000/api/assistant?message=buatkan caption produk kopi
```

7. Uji bot Telegram dengan perintah:

```text
/start
/menu
/caption kopi arabika ukuran 250 gram
```

## Catatan Dosen

Starter project sengaja menggunakan logic sederhana tanpa database agar fokus praktikum berada pada integrasi Telegram Bot API, konsep polling, struktur handler-service, dan penerapan DRY. Logic dapat digabungkan dengan database dan API generatif dari pertemuan sebelumnya.
