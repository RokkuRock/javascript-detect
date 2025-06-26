// insecureDownload.js
const fs = require('fs'), http = require('http');
const url = process.argv[2];
http.get(url, res => {
  const file = fs.createWriteStream("downloaded.bin");
  res.pipe(file);
}); // CWE-494: 使用者控制 download URL
