const request = require('supertest');
const app = require('../server');

describe('POST /api/assistant', () => {
  test('mengembalikan intent jam_buka', async () => {
    const res = await request(app)
      .post('/api/assistant')
      .send({ message: 'Jam buka toko sampai pukul berapa?' });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.intent).toBe('jam_buka');
    expect(res.body.data.reply).toMatch(/buka/i);
  });

  test('mengembalikan error jika message kosong', async () => {
    const res = await request(app)
      .post('/api/assistant')
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  test('mengembalikan fallback untuk pesan tidak dikenal', async () => {
    const res = await request(app)
      .post('/api/assistant')
      .send({ message: 'Halo' });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.intent).toBe('fallback');
  });
});
