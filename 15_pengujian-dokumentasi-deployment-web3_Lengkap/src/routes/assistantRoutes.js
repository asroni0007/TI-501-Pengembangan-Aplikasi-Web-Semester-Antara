const express = require('express');
const { buildAssistantReply } = require('../services/assistantService');
const router = express.Router();

router.post('/assistant', (req, res) => {
  const { message } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Field message wajib diisi dalam bentuk string.'
    });
  }

  const result = buildAssistantReply(message);
  return res.json({ success: true, data: result });
});

module.exports = router;
