const http = require('http');
http.createServer((req, res) => {
  res.setHeader('Set-Cookie', 'sessionId=abc123; Path=/');
  res.end('Cookie set');
}).listen(3008, () => console.log('Cookie server on 3008'));
