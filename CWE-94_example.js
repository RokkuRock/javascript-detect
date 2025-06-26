// codeInject.js
const rl = require('readline').createInterface(process.stdin, process.stdout);
rl.question('Enter JS: ', code => {
  console.log(eval(code)); // CWE-94 :contentReference[oaicite:12]{index=12}
  rl.close();
});
