// basicAuth2.js
const http = require('http');
http.createServer((req, res) => {
  const auth = req.headers['authorization'];
  if (auth && auth.startsWith('Basic ')) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Authenticated: ' + auth);
  } else {
    res.writeHead(401, {'WWW-Authenticate':'Basic realm="simple"'});
    res.end('Unauthorized');
  }
}).listen(8086);
