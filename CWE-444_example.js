// insecureCookie.js
const http = require('http');
http.createServer((req, res) => {
  // CWE-444: 未設定 Secure/HttpOnly，cookie 易被盜
  res.setHeader('Set-Cookie', 'sessionId=abc123; Path=/');
  res.end('Cookie set');
}).listen(3008, () => console.log('Cookie server on 3008'));
