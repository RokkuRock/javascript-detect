// sqlInject2.js
const sqlite3 = require('sqlite3').verbose();
const rl = require('readline').createInterface(process.stdin, process.stdout);
let db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run("CREATE TABLE users(name, pwd)");
  db.run("INSERT INTO users VALUES('admin','secret')");
});

rl.question('User: ', u => {
  rl.question('Pass: ', p => {
    // CWE-89: 直接串接 user input
    const q = `SELECT * FROM users WHERE name='${u}' AND pwd='${p}'`;
    db.get(q, (e, row) => {
      console.log(row ? 'Login OK' : 'Login FAIL');
      rl.close();
      db.close();
    });
  });
});
