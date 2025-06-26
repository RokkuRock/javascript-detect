// weakCrypto.js
const crypto = require('crypto');
// CWE-327: 使用 md5 作為 HMAC 演算法（不安全）
const hmac = crypto.createHmac('md5', 'static-key');
hmac.update('sensitive-data');
console.log(hmac.digest('hex'));
