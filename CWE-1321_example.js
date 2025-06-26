// protoPollution.js
const http = require('http');

let config = { safe: true };
http.createServer((req, res) => {
  // 將 query string 直接 parse 串成物件
  const params = Object.fromEntries(new URL(req.url, 'http://a').searchParams);
  // CWE-1321: 直接合併未過濾造成 __proto__ 污染
  Object.assign(config, params);
  res.end(`Config: ${JSON.stringify(config)}`);
}).listen(3001);
