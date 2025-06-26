// insecureRandom.js
const http = require('http');
http.createServer((req, res) => {
  // CWE-338: 使用 Math.random 生成安全 token
  const token = Math.random().toString(36).slice(2);
  res.end(`Your session: ${token}`);
}).listen(3006, () => console.log('Token server on 3006'));
