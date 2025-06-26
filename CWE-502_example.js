const http = require('http');
http.createServer((req, res) => {
  let body = '';
  req.on('data', b => body += b);
  req.on('end', () => {
    const obj = JSON.parse(body); 
    console.log(obj);
    res.end('OK');
  });
}).listen(9000);
