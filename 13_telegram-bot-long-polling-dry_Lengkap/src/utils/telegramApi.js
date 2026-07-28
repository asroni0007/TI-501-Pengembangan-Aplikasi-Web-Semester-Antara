const BASE_URL = 'https://api.telegram.org/bot';

function getToken() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token || token.includes('ISI_TOKEN')) {
    return null;
  }
  return token;
}

async function telegramRequest(method, payload = {}) {
  const token = getToken();
  if (!token) {
    console.log('[Telegram] Token belum diisi. Bot long polling dilewati.');
    return null;
  }

  const response = await fetch(`${BASE_URL}${token}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  if (!data.ok) {
    throw new Error(`[Telegram] ${method} gagal: ${JSON.stringify(data)}`);
  }

  return data.result;
}

async function getUpdates(offset) {
  return telegramRequest('getUpdates', {
    offset,
    timeout: 20,
    allowed_updates: ['message']
  });
}

async function sendMessage(chatId, text) {
  return telegramRequest('sendMessage', {
    chat_id: chatId,
    text,
    parse_mode: 'HTML'
  });
}

module.exports = { getUpdates, sendMessage, getToken };
