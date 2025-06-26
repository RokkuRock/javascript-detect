// sqlInject.js
const sqlite = require('sqlite3').verbose(), rl = require('readline').createInterface(process.stdin, process.stdout);
const db = new sqlite.Database(':memory:');
db.serialize(() => {
  db.run("CREATE TABLE foo(q)");
  db.run("INSERT INTO foo VALUES('bar')");
});
rl.question('Search: ', q => {
  db.all("SELECT * FROM foo WHERE q='" + q + "'", (e, rows) => {
    console.log(rows); // CWE-89
    rl.close();
    db.close();
  });
});
