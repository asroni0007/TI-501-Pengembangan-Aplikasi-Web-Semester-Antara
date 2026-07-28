CREATE DATABASE IF NOT EXISTS asisten_ai_umkm;
USE asisten_ai_umkm;

CREATE TABLE IF NOT EXISTS kategori (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL UNIQUE,
  deskripsi TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS produk (
  id INT AUTO_INCREMENT PRIMARY KEY,
  kategori_id INT NOT NULL,
  nama VARCHAR(150) NOT NULL,
  harga DECIMAL(12,2) NOT NULL,
  stok INT NOT NULL DEFAULT 0,
  target_pasar VARCHAR(150) DEFAULT 'pelanggan umum',
  deskripsi TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_produk_kategori FOREIGN KEY (kategori_id) REFERENCES kategori(id)
);

CREATE TABLE IF NOT EXISTS konten_ai (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produk_id INT NOT NULL,
  gaya VARCHAR(100) NOT NULL,
  hasil TEXT NOT NULL,
  provider VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_konten_produk FOREIGN KEY (produk_id) REFERENCES produk(id) ON DELETE CASCADE
);

INSERT IGNORE INTO kategori (id, nama, deskripsi) VALUES
(1, 'Kuliner', 'Produk makanan dan minuman UMKM'),
(2, 'Fashion', 'Produk pakaian dan aksesori'),
(3, 'Kerajinan', 'Produk kreatif buatan tangan');

INSERT IGNORE INTO produk (id, kategori_id, nama, harga, stok, target_pasar, deskripsi) VALUES
(1, 1, 'Brownies Mini Cokelat', 18000, 25, 'mahasiswa dan pekerja muda', 'Brownies ukuran mini dengan cokelat premium.'),
(2, 2, 'Totebag Kanvas Lokal', 45000, 15, 'remaja dan mahasiswa', 'Totebag kuat dengan desain minimalis.'),
(3, 3, 'Gantungan Kunci Akrilik', 12000, 40, 'komunitas dan event kampus', 'Souvenir custom untuk kegiatan komunitas.');
