// weakCrypto.js
const crypto = require('crypto');
const key = Buffer.alloc(16, 'A');
const iv = Buffer.alloc(16, 0); // CWE‑326 (fixed IV)
const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
let out = cipher.update('secret', 'utf8', 'hex') + cipher.final('hex');
console.log(out);
