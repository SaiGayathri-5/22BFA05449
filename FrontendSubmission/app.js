document.getElementById('urlForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const longUrl = form.longUrl.value.trim();
  const validity = parseInt(form.validity.value.trim()) || 30;
  const customCode = form.customCode.value.trim();

  if (!isValidUrl(longUrl)) {
    return showResult('Invalid URL');
  }

  const code = customCode || generateCode();
  if (!/^[a-zA-Z0-9]{1,10}$/.test(code)) {
    return showResult('Invalid short code format');
  }

  if (Storage.exists(code)) {
    return showResult('Shortcode already exists');
  }

  const expiry = Date.now() + validity * 60 * 1000;
  const link = { longUrl, expiry, created: Date.now(), clicks: [] };
  Storage.save(code, link);
  Logger.log(`Shortened: ${code} -> ${longUrl}`);
  showResult(`Short URL: <a href="redirect.html?code=${code}">${location.origin}/redirect.html?code=${code}</a> (Expires in ${validity} mins)`);
});

function showResult(msg) {
  document.getElementById('result').innerHTML = msg;
}

function isValidUrl(str) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

function generateCode() {
  return Math.random().toString(36).substring(2, 8);
}

