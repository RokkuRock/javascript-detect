// clearLog.js
const fs = require('fs');
const pwd = process.argv[2];
fs.appendFileSync('log.txt', `User pwd=${pwd}\n`); // CWE-532
