// sqlInject.js
const sqlite = require('sqlite3').verbose();
const rl = require('readline').createInterface(process.stdin, process.stdout);
const db = new sqlite.Database(':memory:');
db.serialize(() => {
  db.run("CREATE TABLE u(p)");
  db.run("INSERT INTO u VALUES('secret')");
});
rl.question('Password: ', pw => {
  db.get("SELECT * FROM u WHERE p='" + pw + "'", (e, row) => {
    console.log(row ? 'Success' : 'Fail'); // CWE-89
    rl.close();
    db.close();
  });
});
