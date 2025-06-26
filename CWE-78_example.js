// File: cmdInject.js
const { exec } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Enter file to list: ', (f) => {
  exec(`ls ${f}`, (e, stdout, stderr) => {
    console.log(stdout);
    if (stderr) console.error(stderr);
  });
  rl.close();
});
