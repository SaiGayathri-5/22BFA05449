const Storage = {
  get(code) {
    return JSON.parse(localStorage.getItem(code));
  },
  save(code, data) {
    localStorage.setItem(code, JSON.stringify(data));
  },
  exists(code) {
    return localStorage.getItem(code) !== null;
  },
  getAll() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = JSON.parse(localStorage.getItem(key));
    }
    return data;
  }
};


