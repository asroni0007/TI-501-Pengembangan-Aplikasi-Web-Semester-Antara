function success(res, statusCode, message, data = null, meta = null) {
  const response = {
    sukses: true,
    pesan: message,
    data
  };

  if (meta) {
    response.meta = meta;
  }

  return res.status(statusCode).json(response);
}

function error(res, statusCode, message, details = null) {
  const response = {
    sukses: false,
    pesan: message
  };

  if (details) {
    response.errors = details;
  }

  return res.status(statusCode).json(response);
}

module.exports = { success, error };
