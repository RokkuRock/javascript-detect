// weakcrypto2.js
const crypto = require('crypto');
const key = Buffer.from('0123456789abcdef0123456789abcdef', 'hex');
const iv = Buffer.alloc(16, 0); // CWE-326: 固定 IV
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let out = cipher.update('secret data', 'utf8', 'hex') + cipher.final('hex');
console.log(out);
