// File: infoLeak.js
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Filename to open: ', (fn) => {
  try {
    const d = fs.readFileSync(fn, 'utf8');
    console.log(d);
  } catch (err) {
    console.error('Oops error happened:', err); // CWE‑200
  }
  rl.close();
});
