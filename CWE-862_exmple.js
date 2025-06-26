// File: missingAuthz.js
const http = require('http');
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const role = url.searchParams.get('role');
  if (url.pathname === '/read') {
    const fn = url.searchParams.get('fn');
    // CWE‑862：未檢查角色，所有人都可讀檔
    fs.readFile(fn, 'utf8', (e, d) => {
      if (e) res.writeHead(404), res.end('Not found');
      else res.end(d);
    });
  }
});
server.listen(8888, () => console.log('Auth API at 8888'));
