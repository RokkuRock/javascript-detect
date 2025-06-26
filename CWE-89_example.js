// File: sqlInject.js
const sqlite3 = require('sqlite3').verbose();
const readline = require('readline');

const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run('CREATE TABLE users(u,p)');
  db.run(`INSERT INTO users VALUES('admin','secret')`);
});

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('User: ', (u) => {
  rl.question('Pass: ', (p) => {
    const q = `SELECT * FROM users WHERE u='${u}' AND p='${p}'`; // CWE-89
    db.get(q, (e, row) => {
      if (row) console.log('Login OK'); else console.log('Login FAIL');
      rl.close();
      db.close();
    });
  });
});
