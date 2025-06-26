// regexDos.js
const http = require('http');
http.createServer((req, res) => {
  // 用戶輸入決定正則，可能導致 ReDoS
  const pattern = new RegExp(req.url.slice(1)); // CWE-400
  // 不斷測試以放大資源耗盡
  for (let i = 0; i < 100000; i++) pattern.test('aaaaaaaaaaaaaaaaaaaa!');
  res.end('Done');
}).listen(3000);
