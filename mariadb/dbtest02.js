var db = require('./db');
var connection = db.connection();

connection.connect();

var post = {name:'herbtea3', 
            email:'herbtea3@gg.co.kr', 
            passwd:'1111'
};
var query = connection.query('INSERT INTO user SET ?', post, function(err, result){
    console.log(result);
});
connection.end();

console.log(query.sql);