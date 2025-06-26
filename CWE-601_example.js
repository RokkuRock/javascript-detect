const express = require('express');
const app = express();

app.get('/go', (req, res) => {
  const dest = req.query.dest;
  res.redirect(dest);
});

app.listen(3007, () => console.log('Redirector on 3007'));
