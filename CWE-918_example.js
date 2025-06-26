// ssrf2.js
const http = require('http');
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('Enter URL: ', url => {
  // CWE-918: 任意 URL 請求
  http.get(url, res => res.pipe(process.stdout));
  rl.close();
});
