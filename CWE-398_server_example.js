// crashLoop.js
const rl = require('readline').createInterface(process.stdin, process.stdout);
rl.question('Loop count: ', n => {
  for (let i = 0; i < Number(n); i++) { /* empty */ }
  console.log('Done');
  rl.close(); // CWE-398: 資源耗盡風險
});
