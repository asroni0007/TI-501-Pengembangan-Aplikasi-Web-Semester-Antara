# Checklist Praktikum WhatsApp Webhook

- [ ] File `.env` sudah dibuat dari `.env.example`.
- [ ] `VERIFY_TOKEN` di `.env` cocok dengan token pada request verifikasi.
- [ ] Server berjalan di port 3000.
- [ ] `ngrok http 3000` berjalan dan menghasilkan HTTPS URL.
- [ ] Callback URL menggunakan akhiran `/webhook`.
- [ ] Request GET verifikasi mengembalikan `hub.challenge`.
- [ ] Request POST simulasi mengembalikan HTTP 200.
- [ ] Payload pesan dapat dibaca dari struktur `entry[0].changes[0].value.messages[0]`.
- [ ] Logic balasan berada di file service.
- [ ] `AUTO_REPLY` dipahami sebagai pengaman agar pesan nyata tidak terkirim tanpa sengaja.
