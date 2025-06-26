// xxe.js
const fs = require('fs');
const xml2js = require('xml2js');
const xml = fs.readFileSync('user.xml');
xml2js.parseString(xml, (e, obj) => { // CWE‑611
  console.log(obj);
});
