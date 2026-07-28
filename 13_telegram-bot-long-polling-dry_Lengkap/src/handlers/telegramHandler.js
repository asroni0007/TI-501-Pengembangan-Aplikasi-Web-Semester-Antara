const { getUpdates, sendMessage, getToken } = require('../utils/telegramApi');
const { buildAssistantReply } = require('../services/umkmAssistantService');

let offset = 0;
let isRunning = false;

async function handleMessage(message) {
  const chatId = message.chat.id;
  const text = message.text || '';
  const result = buildAssistantReply(text);
  await sendMessage(chatId, result.reply);
}

async function pollOnce() {
  const updates = await getUpdates(offset);
  if (!updates || updates.length === 0) return;

  for (const update of updates) {
    offset = update.update_id + 1;
    if (update.message) {
      await handleMessage(update.message);
    }
  }
}

function startLongPolling() {
  if (!getToken()) return;
  if (isRunning) return;

  isRunning = true;
  const interval = Number(process.env.POLLING_INTERVAL_MS || 2000);
  console.log('[Telegram] Long polling aktif.');

  setInterval(async () => {
    try {
      await pollOnce();
    } catch (error) {
      console.error('[Telegram] Error polling:', error.message);
    }
  }, interval);
}

module.exports = { startLongPolling, handleMessage };
