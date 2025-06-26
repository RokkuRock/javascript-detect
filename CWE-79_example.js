// File: xss.js
const http = require('http');
http.createServer((req, res) => {
  const msg = new URL(req.url, 'http://localhost').searchParams.get('msg') || '';
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(`<h1>You said: ${msg}</h1>`); // CWE-79
}).listen(8080, () => console.log('Server at http://localhost:8080/?msg=...'));
