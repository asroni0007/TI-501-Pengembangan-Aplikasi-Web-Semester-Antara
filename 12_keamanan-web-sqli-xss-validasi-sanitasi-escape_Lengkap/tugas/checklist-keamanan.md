# Checklist Keamanan Pertemuan 12

- [ ] Validasi keamanan tidak hanya bergantung pada HTML/JavaScript browser.
- [ ] Tipe, panjang, format, rentang, dan aturan bisnis divalidasi server-side.
- [ ] Input tidak digabungkan langsung ke string SQL.
- [ ] Query memakai `execute(sql, values)` atau prepared statement setara.
- [ ] Data tidak tepercaya ditampilkan dengan `textContent`/safe sink.
- [ ] `innerHTML` tidak dipakai untuk data tidak tepercaya.
- [ ] Jika HTML diizinkan, sanitasi memakai kebijakan allowlist dan library tepercaya.
- [ ] Pesan error untuk pengguna tidak memuat stack trace, query, atau kredensial.
- [ ] Security headers dan batas ukuran JSON aktif.
- [ ] Sedikitnya 8 pengujian negatif lulus.
- [ ] `.env` dan data nyata tidak masuk repository.
- [ ] Pengujian dilakukan secara etis dan berizin.
