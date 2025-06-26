// cleartext_log.js
const fs = require('fs');
const token = process.argv[2];
if (!token) {
  console.error('Usage: node cleartext_log.js <token>');
  process.exit(1);
}
// CWE-532: 明文寫入敏感資料
fs.appendFileSync('app.log', `Token=${token}\n`);
console.log('Logged token');
