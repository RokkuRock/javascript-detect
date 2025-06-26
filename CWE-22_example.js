// File: pathTraversal.js
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Which file in safe/ to load: ', (fn) => {
  fs.readFile(`safe/${fn}`, 'utf8', (e, d) => { // CWE‑22
    if (e) return console.error(e);
    console.log(d);
  });
  rl.close();
});
