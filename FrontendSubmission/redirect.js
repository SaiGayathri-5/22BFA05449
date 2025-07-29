const params = new URLSearchParams(window.location.search);
const code = params.get('code');

if (code && Storage.exists(code)) {
  const link = Storage.get(code);
  if (Date.now() < link.expiry) {
    link.clicks.push({ time: Date.now(), source: document.referrer || 'Direct', geo: 'IN' });
    Storage.save(code, link);
    Logger.log(`Redirected: ${code}`);
    location.href = link.longUrl;
  } else {
    document.body.innerHTML = '<h2>Link Expired</h2>';
  }
} else {
  document.body.innerHTML = '<h2>Invalid Shortcode</h2>';
}