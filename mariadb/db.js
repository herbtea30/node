var mysql      = require('mysql');

exports.connection = function() {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'devuser',
      password : '1111',
      database : 'herbteadb'
    });
    
    return connection;
}