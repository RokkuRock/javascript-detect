// codeInjectFunc.js
const input = process.argv[2];
const fn = new Function('return ' + input)(); // CWE‑94
console.log(fn);
