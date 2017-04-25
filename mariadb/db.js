var mysql      = require('mysql');

exports.connection = function() {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'devuser',
      password : 'kang0113',
      database : 'herbteadb'
    });
    
    return connection;
}