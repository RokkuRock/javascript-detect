// protoPollute2.js
const express = require('express');
const _ = require('lodash');
const app = express();
app.use(express.json());

let config = { safe: true };
app.post('/merge', (req, res) => {
  // CWE-1321: 直接 merge user body
  _.merge(config, req.body);
  res.send('Merged');
});

app.listen(3005, () => console.log('Listening on 3005'));
