// respSplitNew.js
const http = require('http');
http.createServer((req, res) => {
  const v = new URL(req.url,'http://a').searchParams.get('v');
  res.writeHead(200, { 'X-Info': v }); // CWE-116 HTTP 分割 :contentReference[oaicite:10]{index=10}
  res.end('Done');
}).listen(3004);
