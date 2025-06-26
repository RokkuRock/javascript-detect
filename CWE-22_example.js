// path_traversal.js
const http = require('http');
const fs   = require('fs');

http.createServer((req, res) => {
  const file = new URL(req.url, 'http://a').searchParams.get('file');
  // CWE-22: 未過濾 "../" 可讀取任意檔案
  try {
    const data = fs.readFileSync(`storage/${file}`, 'utf8');
    res.end(data);
  } catch {
    res.statusCode = 404;
    res.end('Not found');
  }
}).listen(3000);
