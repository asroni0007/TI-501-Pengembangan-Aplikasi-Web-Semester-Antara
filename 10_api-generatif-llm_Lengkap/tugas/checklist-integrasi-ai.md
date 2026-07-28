# Checklist Integrasi AI

- [ ] Database `asisten_ai_umkm` berhasil dibuat.
- [ ] Data produk berhasil muncul dari endpoint `/api/produk`.
- [ ] File `.env` dibuat lokal dan tidak diunggah.
- [ ] `AI_PROVIDER=mock` dapat menghasilkan konten.
- [ ] Endpoint `/api/ai/generate-konten` menerima `produk_id`, `gaya`, dan `kanal`.
- [ ] Prompt memuat data produk dari database.
- [ ] Hasil generate tersimpan ke tabel `konten_ai`.
- [ ] Frontend menampilkan hasil AI dengan rapi.
- [ ] Error input kosong/produk tidak ditemukan sudah ditangani.
- [ ] Screenshot pengujian sudah disiapkan.
