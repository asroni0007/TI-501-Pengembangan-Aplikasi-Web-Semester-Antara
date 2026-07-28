# Pertemuan 7 — REST API, HTTP Method, Kontrak Endpoint, dan JSON

**CPMK52 · Backend API dasar · Studi kasus Asisten AI untuk UMKM**

## Capaian Pembelajaran

Mahasiswa mampu mengintegrasikan frontend dan backend melalui REST API, memahami HTTP method, merancang kontrak endpoint, menggunakan format JSON, serta menguji API menggunakan browser, Thunder Client/Postman, atau cURL.

## Kesesuaian RPS

Materi ini sesuai Pertemuan 7 RPS TI-501:

- konsep REST API;
- HTTP method;
- kontrak endpoint;
- format JSON.

## Isi Folder

```text
07_rest-api-http-method-endpoint-json_Lengkap/
├── PANDUAN_UPLOAD.md
├── README.md
├── assets/
│   ├── rest-api-flow.svg
│   ├── http-method-crud.svg
│   └── json-contract.svg
├── demo-opsional/
│   └── index.html
├── materi/
│   └── PPT_Pertemuan_7_TI501_REST_API_HTTP_JSON_VALID.pptx
├── panduan/
│   └── Panduan_Praktikum_Pertemuan_7_TI501_REST_API_HTTP_JSON_VALID.docx
├── src/
│   ├── package.json
│   ├── server.js
│   ├── controllers/
│   │   └── produkController.js
│   ├── data/
│   │   └── produk.js
│   ├── routes/
│   │   └── produkRoutes.js
│   ├── utils/
│   │   └── apiResponse.js
│   ├── validators/
│   │   └── produkValidator.js
│   └── public/
│       ├── index.html
│       ├── style.css
│       └── app.js
└── tugas/
    ├── checklist-api.md
    ├── instruksi-tugas.md
    ├── rubrik-penilaian.md
    └── template-laporan.md
```

## Cara Menjalankan Source

```bash
cd src
npm install
npm run dev
```

Buka halaman frontend sederhana:

```text
http://localhost:3000
```

Uji endpoint API:

```text
GET    http://localhost:3000/api/status
GET    http://localhost:3000/api/produk
GET    http://localhost:3000/api/produk/1
POST   http://localhost:3000/api/produk
PUT    http://localhost:3000/api/produk/1
DELETE http://localhost:3000/api/produk/1
```

## Output Praktikum

1. Mahasiswa memahami resource, endpoint, request, response, dan JSON.
2. Endpoint REST API untuk data produk UMKM berjalan.
3. HTTP method GET, POST, PUT, dan DELETE dapat diuji.
4. Frontend sederhana dapat membaca dan menambah data melalui Fetch API.
5. Mahasiswa menulis kontrak endpoint dan hasil pengujian API.

## Catatan

Pertemuan ini masih memakai data dummy/in-memory agar fokus pada konsep REST API. Penyimpanan ke database MySQL dilanjutkan pada Pertemuan 9 sesuai RPS.
