// pathInject.js
const fs = require('fs');
const rl = require('readline').createInterface(process.stdin, process.stdout);
rl.question('Filename in safe/: ', fn => {
  const data = fs.readFileSync('safe/' + fn, 'utf8'); // CWE-73
  console.log(data);
  rl.close();
});
