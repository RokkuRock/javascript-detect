// protoMerge.js
const express = require('express'), _ = require('lodash');
const app = express();
app.use(express.json());
app.post('/merge', (req, res) => {
  const base = {};
  _.merge(base, req.body); // CWE-1321
  res.send('Merged');
});
app.listen(7777);
