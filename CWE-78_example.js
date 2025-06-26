// cmd_inject.js
const { exec } = require('child_process');
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.question('Enter filename to list: ', fn => {
  // CWE-78: 未驗證 fn，可注入如 "; rm -rf /tmp/x"
  exec(`ls ${fn}`, (err, out) => {
    if (err) console.error(err);
    else console.log(out);
    rl.close();
  });
});
