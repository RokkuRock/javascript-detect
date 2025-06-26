// xss.js
const http = require('http');
http.createServer((req, res) => {
  const msg = new URL(req.url, 'http://a').searchParams.get('msg') || '';
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(`<div>${msg}</div>`); // CWE-79
}).listen(8080);
