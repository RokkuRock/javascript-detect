// ssrf.js
const http = require('http'), rl = require('readline').createInterface(process.stdin, process.stdout);
rl.question('Enter URL: ', url => {
  http.get(url, resp => { resp.pipe(process.stdout); }); // CWE-918
  rl.close();
});
