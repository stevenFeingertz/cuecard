const mysql = require('mysql');
const fs = require('fs');

var connection = mysql.createConnection({
  host     : process.env.JAWSDB_HOST,
  user     : process.env.JAWSDB_USER,
  password : process.env.JAWSDB_PASSWORD,
  database : process.env.JAWSDB_DATABASE,
  port     : 3306,
  timezone : 'Z',
  ssl      : {
        ca      : fs.readFileSync(__dirname + '/ssl/rds-combined-ca-bundle.pem')
  }
});

module.exports = {
    connection: connection
}
