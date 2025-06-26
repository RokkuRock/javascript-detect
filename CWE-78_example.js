// cmdInject.js
const { exec } = require('child_process');
const rl = require('readline').createInterface(process.stdin, process.stdout);
rl.question('Enter file name: ', fn => {
  exec('ls ' + fn, (e, out) => console.log(out)); // CWE-78
  rl.close();
});
