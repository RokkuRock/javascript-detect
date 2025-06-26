// xxe2.js
const fs = require('fs');
const { DOMParser } = require('@xmldom/xmldom');
const xml = fs.readFileSync('user.xml', 'utf8');
const doc = new DOMParser().parseFromString(xml, 'application/xml'); // CWE-611
console.log(doc.documentElement.tagName);
