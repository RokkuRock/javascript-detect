// sql_inject.js
const sqlite3 = require('sqlite3').verbose();
const rl = require('readline').createInterface(process.stdin, process.stdout);
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE creds(user, pass)");
  db.run("INSERT INTO creds VALUES('admin','secret')");
});

rl.question('User: ', u => {
  rl.question('Pass: ', p => {
    // CWE-89: 直接串接 u, p
    const q = `SELECT * FROM creds WHERE user='${u}' AND pass='${p}'`;
    db.get(q, (e, row) => {
      console.log(row ? 'OK' : 'FAIL');
      rl.close();
      db.close();
    });
  });
});
