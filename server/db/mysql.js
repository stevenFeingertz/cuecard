const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '&d7&wXK#QKzB',
  database : 'cuecard.io',
  port     : 3306
});

module.exports = {
    connection: connection
}
