-- Skema acuan jika ingin menghubungkan UI Pertemuan 11 dengan database Pertemuan 9 dan 10.
CREATE DATABASE IF NOT EXISTS asisten_ai_umkm;
USE asisten_ai_umkm;

CREATE TABLE IF NOT EXISTS produk (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(150) NOT NULL,
  kategori VARCHAR(100) NOT NULL,
  harga INT NOT NULL DEFAULT 0,
  status ENUM('aktif', 'draft', 'arsip') DEFAULT 'draft',
  stok INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS konten_ai (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produk_id INT NOT NULL,
  kanal VARCHAR(50) NOT NULL,
  gaya VARCHAR(50) NOT NULL,
  judul VARCHAR(150) NOT NULL,
  status ENUM('draft', 'siap', 'arsip') DEFAULT 'draft',
  hasil TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (produk_id) REFERENCES produk(id)
);
