const request = require('supertest');
const app = require('../server');

describe('Health check', () => {
  test('GET /health mengembalikan status ok', async () => {
    const res = await request(app).get('/health');

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body).toHaveProperty('timestamp');
  });

  test('GET endpoint tidak dikenal mengembalikan 404', async () => {
    const res = await request(app).get('/tidak-ada');

    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
  });
});
