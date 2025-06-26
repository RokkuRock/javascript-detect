const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const key = req.query.prop; 
  let obj = {};
  obj[key] = 'x'; 
  res.send('Done');
});
app.listen(8000);
