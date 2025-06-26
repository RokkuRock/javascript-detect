const http = require('http');
http.createServer((req, res) => {
  if (req.url.startsWith('/show?msg=')) {
    const msg = req.url.split('=')[1];
    const tmpl = new Function('return `' + msg + '`;');
    res.end(tmpl());
  }
}).listen(3002);
