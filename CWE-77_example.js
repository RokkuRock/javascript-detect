// cmdInject.js
const { execFile } = require('child_process'), rl = require('readline').createInterface(process.stdin, process.stdout);
rl.question('Script name: ', script => {
  execFile('/bin/sh', ['-c', `./scripts/${script}`], (err, stdout) => {
    console.log(stdout);
  }); // CWE-77: user 控制 script 參數
  rl.close();
});
