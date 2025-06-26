// cmdInject2.js
const { spawnSync } = require('child_process');
const readline = require('readline').createInterface(process.stdin, process.stdout);
readline.question('File to run: ', f => {
  const res = spawnSync('sh', ['-c', f]); // CWE-78
  console.log(res.stdout.toString());
  readline.close();
});
