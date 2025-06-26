// sqlInject.js
const sqlite3 = require('sqlite3').verbose();
const rl = require('readline').createInterface(process.stdin, process.stdout);

let db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run("CREATE TABLE users(name, pw)");
  db.run("INSERT INTO users VALUES('admin','secret')");
});

rl.question('Username: ', u => {
  rl.question('Password: ', p => {
    // CWE-89: 直接串接 user input
    let q = "SELECT * FROM users WHERE name='" + u + "' AND pw='" + p + "'";
    db.get(q, (e, row) => {
      console.log(row ? 'Welcome' : 'Denied');
      rl.close();
      db.close();
    });
  });
});
