var db = require('./db');
var connection = db.connection();

connection.connect();

var query = connection.query(
    'DELETE FROM user WHERE id = ?', [2], 
    function(err, result){
        console.log(result);
    });

connection.end();