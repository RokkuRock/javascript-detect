// logInject.js
const fs = require('fs');
const input = process.argv[2];
fs.appendFileSync('access.log', new Date() + ' - ' + input + '\n'); // CWE-117
