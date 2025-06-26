// File: codeInject.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('JS> ', (code) => {
  try {
    const r = eval(code); // CWE‑94
    console.log('Result:', r);
  } catch(e) {
    console.error('Error:', e.message);
  }
  rl.close();
});
