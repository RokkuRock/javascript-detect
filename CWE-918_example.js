// ssrf.js
const http = require('http');
const url = process.argv[2];
http.get(url, resp => {
  resp.on('data', d => process.stdout.write(d));
}); // CWE-918
