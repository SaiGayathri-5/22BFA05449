const statsDiv = document.getElementById('stats');
const data = Storage.getAll();

Object.entries(data).forEach(([code, link]) => {
  const linkStats = `<div class="card">
    <p><strong>${location.origin}/redirect.html?code=${code}</strong></p>
    <p>Original: ${link.longUrl}</p>
    <p>Created: ${new Date(link.created).toLocaleString()}</p>
    <p>Expires: ${new Date(link.expiry).toLocaleString()}</p>
    <p>Clicks: ${link.clicks.length}</p>
    <ul>${link.clicks.map(c => `<li>${new Date(c.time).toLocaleString()} - ${c.source} - ${c.geo}</li>`).join('')}</ul>
  </div>`;
  statsDiv.innerHTML += linkStats;
});