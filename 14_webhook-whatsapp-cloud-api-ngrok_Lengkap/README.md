# Pertemuan 14 — Webhook vs Polling, WhatsApp Cloud API, Verifikasi Webhook, dan Ngrok

**CPMK52 · Webhook · WhatsApp Cloud API · Verifikasi endpoint · Tunneling lokal menggunakan ngrok**

## Capaian Pembelajaran

Mahasiswa mampu mengembangkan integrasi layanan pesan lanjutan berbasis webhook, memahami perbedaan polling dan webhook, melakukan verifikasi webhook WhatsApp Cloud API, serta menggunakan ngrok untuk mengekspos server lokal saat praktikum.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 14 RPS TI-501:

- Webhook vs polling;
- WhatsApp Cloud API;
- verifikasi webhook;
- tunneling menggunakan ngrok;
- integrasi lanjutan studi kasus **“Asisten AI untuk UMKM”**.

## Isi Folder

```text
14_webhook-whatsapp-cloud-api-ngrok_Lengkap/
├── README.md
├── PANDUAN_UPLOAD.md
├── assets/
│   ├── webhook-vs-polling.svg
│   ├── whatsapp-cloud-flow.svg
│   └── ngrok-tunnel-flow.svg
├── materi/
│   └── PPT_Pertemuan_14_TI501_WhatsApp_Webhook_Ngrok_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_14_TI501_WhatsApp_Webhook_Ngrok_VALID.docx
├── src/
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   ├── routes/webhookRoutes.js
│   ├── services/umkmAssistantService.js
│   ├── services/whatsappService.js
│   └── utils/signature.js
├── tugas/
│   ├── instruksi-tugas.md
│   ├── rubrik-penilaian.md
│   ├── checklist-webhook-whatsapp.md
│   └── template-laporan.md
└── demo-opsional/
    └── index.html
```

## Cara Menjalankan Praktikum

1. Masuk ke folder `src`.
2. Salin `.env.example` menjadi `.env`.
3. Isi `VERIFY_TOKEN` dengan teks bebas yang sama dengan konfigurasi di Meta App Dashboard.
4. Isi `WHATSAPP_TOKEN` dan `PHONE_NUMBER_ID` jika ingin mengirim balasan nyata melalui WhatsApp Cloud API.
5. Jalankan project:

```bash
npm install
npm run dev
```

6. Jalankan tunnel lokal:

```bash
ngrok http 3000
```

7. Gunakan URL HTTPS dari ngrok sebagai callback URL:

```text
https://alamat-ngrok/webhook
```

8. Uji endpoint lokal:

```text
GET http://localhost:3000/webhook?hub.mode=subscribe&hub.verify_token=ti501_verify_token_demo&hub.challenge=12345
```

Jika token cocok, server mengembalikan `12345`.

## Catatan Dosen

Starter project dibuat aman untuk demonstrasi. Jika kredensial WhatsApp belum tersedia, mahasiswa tetap dapat memahami alur verifikasi webhook, struktur payload, dan simulasi penerimaan pesan melalui request lokal atau Postman. Pengiriman pesan nyata membutuhkan konfigurasi Meta Developer App, WhatsApp Business Account, nomor pengirim, access token, dan phone number ID.

## Referensi Resmi

- Meta for Developers — WhatsApp Webhooks.
- Meta for Developers — WhatsApp Cloud API Messages.
- ngrok Documentation — Share localhost using HTTP tunnels.
