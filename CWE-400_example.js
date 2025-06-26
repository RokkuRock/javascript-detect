const http = require('http');
http.createServer((req, res) => {
  const pattern = new RegExp(req.url.slice(1)); 
  for (let i = 0; i < 100000; i++) pattern.test('aaaaaaaaaaaaaaaaaaaa!');
  res.end('Done');
}).listen(3000);
