function getWhatsAppConfig() {
  return {
    version: process.env.GRAPH_API_VERSION || 'v25.0',
    token: process.env.WHATSAPP_TOKEN,
    phoneNumberId: process.env.PHONE_NUMBER_ID
  };
}

function isWhatsAppConfigured() {
  const { token, phoneNumberId } = getWhatsAppConfig();
  return Boolean(token && phoneNumberId && !token.includes('ISI_') && !phoneNumberId.includes('ISI_'));
}

async function sendTextMessage(to, body) {
  const { version, token, phoneNumberId } = getWhatsAppConfig();

  if (!isWhatsAppConfigured()) {
    console.log('[WhatsApp] Kredensial belum lengkap. Balasan tidak dikirim.');
    console.log('[WhatsApp] Simulasi balasan ke', to, ':', body);
    return { simulated: true, to, body };
  }

  const response = await fetch(`https://graph.facebook.com/${version}/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body }
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error('[WhatsApp] Gagal mengirim pesan: ' + JSON.stringify(data));
  }
  return data;
}

module.exports = { sendTextMessage, isWhatsAppConfigured };
