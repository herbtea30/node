var db = require('./db');
var connection = db.connection();

connection.connect();

connection.query('SELECT now() AS time', function(err, rows, fields) {
  if (err) throw err;

  console.log('The time is: ', rows[0].time);
});

connection.end();