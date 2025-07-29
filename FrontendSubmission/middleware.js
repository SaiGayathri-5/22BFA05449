
const Logger = {
  log(msg) {
    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.push({ message: msg, timestamp: new Date().toISOString() });
    localStorage.setItem('logs', JSON.stringify(logs));
  }
};

