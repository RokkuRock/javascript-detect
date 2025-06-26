// zipSlip.js
const fs = require('fs'), unzipper = require('unzipper');
const zipPath = process.argv[2];
fs.createReadStream(zipPath)
  .pipe(unzipper.Parse())
  .on('entry', entry => {
    const filePath = "out/" + entry.path; // CWE-22: 未檢查 '../'
    entry.pipe(fs.createWriteStream(filePath));
  });
