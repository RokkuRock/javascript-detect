// sandboxInject.js
const vm = require('vm');
const readline = require('readline').createInterface(process.stdin, process.stdout);
readline.question('Code to execute: ', code => {
  vm.runInNewContext(code, {}); // CWE-94
  readline.close();
});
