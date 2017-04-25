var db = require('./db');
var connection = db.connection();

connection.connect();

var quert = connection.query(
    'UPDATE user SET name = ? WHERE id = ?', ['hebtea.dony', 2], 
    function (err, result){
        console.log(result);   
    });

connection.end();