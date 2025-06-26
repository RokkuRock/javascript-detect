// ssrf.js
const http = require('http');
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('Enter URL to fetch: ', url => {
  // CWE-918: 任意 URL，可用於內網掃描
  http.get(url, r => r.pipe(process.stdout));
  rl.close();
});
