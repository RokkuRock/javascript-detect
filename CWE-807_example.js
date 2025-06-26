// bypassAuth.js
const rl = require('readline').createInterface(process.stdin, process.stdout);
rl.question('Your role: ', role => {
  if (role === 'admin' || role === process.argv[2]) {
    console.log('Access granted'); // CWE-807
  } else {
    console.log('Denied');
  }
  rl.close();
});
