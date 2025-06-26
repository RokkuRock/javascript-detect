// protoPollute2.js
const rl = require('readline').createInterface(process.stdin, process.stdout);
const _ = require('lodash');
let base = {};
rl.question('Provide JSON to merge: ', input => {
  try {
    const obj = JSON.parse(input);
    _.merge(base, obj); // CWE-1321
    console.log('Merged: ', base);
  } catch {}
  rl.close();
});
