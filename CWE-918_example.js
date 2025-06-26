// ssrf-new.js
const http = require('http');
const url = process.argv[2];
http.get(url, res => {
  res.pipe(process.stdout);
}); // CWE-918: 不驗證任意 URL 即發請求 :contentReference[oaicite:9]{index=9}
