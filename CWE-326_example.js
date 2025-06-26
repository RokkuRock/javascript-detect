// weak_crypto.js
const crypto = require('crypto');
const key = 'hardcodedkey';
const hmac = crypto.createHmac('md5', key); // CWE-326
hmac.update('sensitive-data');
console.log(hmac.digest('hex'));
