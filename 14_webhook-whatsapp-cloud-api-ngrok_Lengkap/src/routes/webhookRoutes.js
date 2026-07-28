const express = require('express');
const router = express.Router();
const { verifyMetaSignature } = require('../utils/signature');
const { buildAssistantReply } = require('../services/umkmAssistantService');
const { sendTextMessage } = require('../services/whatsappService');

// 1) Endpoint verifikasi saat callback URL didaftarkan di Meta App Dashboard.
router.get('/', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    console.log('[Webhook] Verifikasi berhasil.');
    return res.status(200).send(challenge);
  }

  console.warn('[Webhook] Verifikasi gagal. Periksa VERIFY_TOKEN.');
  return res.sendStatus(403);
});

// 2) Endpoint penerimaan event pesan WhatsApp.
router.post('/', async (req, res) => {
  if (!verifyMetaSignature(req)) {
    console.warn('[Webhook] Signature tidak valid.');
    return res.sendStatus(401);
  }

  // Selalu balas 200 agar platform tidak mengirim ulang event terus-menerus.
  res.sendStatus(200);

  try {
    const entry = req.body.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const message = value?.messages?.[0];

    if (!message) {
      console.log('[Webhook] Event bukan pesan baru:', JSON.stringify(req.body));
      return;
    }

    const from = message.from;
    const text = message.text?.body || '';
    console.log(`[Webhook] Pesan dari ${from}: ${text}`);

    const assistant = buildAssistantReply(text);

    if (process.env.AUTO_REPLY === 'true') {
      await sendTextMessage(from, assistant.reply);
    } else {
      console.log('[Webhook] AUTO_REPLY=false. Balasan simulasi:', assistant.reply);
    }
  } catch (error) {
    console.error('[Webhook] Error memproses event:', error.message);
  }
});

module.exports = router;
