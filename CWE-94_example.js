// codeInjectVm.js
const vm = require('vm'), rl = require('readline').createInterface(process.stdin, process.stdout);
rl.question('Enter JS code: ', code => {
  vm.runInThisContext(code); // CWE‑94
  rl.close();
});
