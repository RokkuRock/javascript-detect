// pathTraversal.js
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const file = new URL(req.url, 'http://a').searchParams.get('file');
  // CWE-22: 未過濾 ../
  let stream = fs.createReadStream(`data/${file}`);
  stream.pipe(res);
}).listen(3002);
