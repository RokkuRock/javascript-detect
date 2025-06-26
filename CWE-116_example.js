// respSplitting.js
const http = require('http');
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://a').searchParams.get('u');
  res.writeHead(200, { 'Set-Cookie': 'id=' + url }); // CWE-116
  res.end('Done');
}).listen(3001);
