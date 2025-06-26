// error_leak.js
const fs = require('fs');
try {
  // 假設 user.txt 理應存在
  const data = fs.readFileSync('user.txt', 'utf8');
  console.log(data);
} catch (e) {
  // CWE-200: 洩漏堆疊與路徑等敏感資訊
  console.error('Error reading file:', e);
}
