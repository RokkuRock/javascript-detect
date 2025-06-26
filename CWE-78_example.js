// cmdExec.js
const { exec } = require('child_process');
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('File to list: ', file => {
  // CWE-78: 直接拼接 user input
  exec(`ls ${file}`, (err, stdout) => {
    if (err) console.error(err);
    else console.log(stdout);
    rl.close();
  });
});
