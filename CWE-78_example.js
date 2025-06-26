// cmdInject.js
const { execFile } = require('child_process');
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('Enter script name in ./scripts/: ', name => {
  // CWE-78: 未驗證 name，可注入 shell 參數
  execFile('bash', ['-c', `./scripts/${name}`], (err, stdout) => {
    if (err) console.error(err);
    else console.log(stdout);
    rl.close();
  });
});
