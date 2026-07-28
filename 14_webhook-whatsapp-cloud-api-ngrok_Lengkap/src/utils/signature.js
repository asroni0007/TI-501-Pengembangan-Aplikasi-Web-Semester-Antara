const crypto = require('crypto');

function verifyMetaSignature(req) {
  const appSecret = process.env.APP_SECRET;

  // Untuk kelas/praktikum awal, APP_SECRET boleh dikosongkan.
  // Jika APP_SECRET diisi, signature X-Hub-Signature-256 akan dicek.
  if (!appSecret || appSecret.includes('OPSIONAL')) {
    return true;
  }

  const signature = req.get('x-hub-signature-256');
  if (!signature) return false;

  const expected = 'sha256=' + crypto
    .createHmac('sha256', appSecret)
    .update(req.rawBody || '')
    .digest('hex');

  try {
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch (error) {
    return false;
  }
}

module.exports = { verifyMetaSignature };
