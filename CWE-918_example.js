// ssrf.js
const http = require('http');
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('Enter URL to fetch: ', url => {
  // CWE-918: 任意 URL
  http.get(url, r => r.pipe(process.stdout));
  rl.close();
});
