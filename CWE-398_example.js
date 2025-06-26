// domEval.js
const http = require('http');
http.createServer((req, res) => {
  const msg = new URL(req.url, 'http://a').searchParams.get('msg');
  const template = `<div>${msg}</div>`;
  res.end(template); // CWE-398: HTML 未 escape
}).listen(3003);
