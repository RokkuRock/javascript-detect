// protoPollute.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const key = req.query.prop; // attacker-controlled
  let obj = {};
  obj[key] = 'x'; // CWE-74 :contentReference[oaicite:14]{index=14}
  res.send('Done');
});
app.listen(8000);
