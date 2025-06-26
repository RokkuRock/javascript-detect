// openRedirect.js
const express = require('express');
const app = express();

app.get('/go', (req, res) => {
  const dest = req.query.dest; // user-controlled
  // CWE-601: 直接 redirect 到 user input
  res.redirect(dest);
});

app.listen(3007, () => console.log('Redirector on 3007'));
