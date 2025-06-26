// respSplit.js
const http = require('http');
http.createServer((req,res) => {
  const u = new URL(req.url, 'http://a').searchParams.get('u');
  res.setHeader('X-Your-Url', u); // CWE‑116
  res.end('OK');
}).listen(6666);
