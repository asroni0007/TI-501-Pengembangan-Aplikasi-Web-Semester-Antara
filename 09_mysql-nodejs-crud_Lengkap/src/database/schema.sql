CREATE DATABASE IF NOT EXISTS asisten_ai_umkm
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE asisten_ai_umkm;

DROP TABLE IF EXISTS produk;
DROP TABLE IF EXISTS kategori;

CREATE TABLE kategori (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL UNIQUE,
  deskripsi TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE produk (
  id INT AUTO_INCREMENT PRIMARY KEY,
  kategori_id INT NOT NULL,
  nama VARCHAR(150) NOT NULL,
  harga DECIMAL(12,2) NOT NULL DEFAULT 0,
  stok INT NOT NULL DEFAULT 0,
  deskripsi TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_produk_kategori
    FOREIGN KEY (kategori_id) REFERENCES kategori(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

INSERT INTO kategori (nama, deskripsi) VALUES
('Makanan', 'Produk makanan siap jual'),
('Minuman', 'Produk minuman dan bahan seduh'),
('Kerajinan', 'Produk kerajinan lokal');

INSERT INTO produk (kategori_id, nama, harga, stok, deskripsi) VALUES
(1, 'Brownies Mini', 25000, 12, 'Brownies cokelat ukuran kecil untuk hampers.'),
(2, 'Kopi Robusta Lokal', 45000, 20, 'Kopi robusta kemasan 250 gram.'),
(3, 'Totebag Batik', 65000, 8, 'Totebag kain motif batik produksi UMKM lokal.');
