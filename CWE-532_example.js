// cleartextLog2.js
const fs = require('fs');
const apiKey = process.argv[2];
fs.appendFileSync('app.log', `API Key used: ${apiKey}\n`); // CWE-532
console.log('Logged API key');
