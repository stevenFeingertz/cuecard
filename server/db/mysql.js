const mysql = require('mysql');
const fs = require('fs');

var connection = mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_NAME,
  port     : 3306,
  ssl  : {
    ca      : fs.readFileSync(__dirname + '/server/db/ssl/cleardb-ca.pem'),
    cert    : fs.readFileSync(__dirname + '/server/db/ssl/be81114c16f5d7-cert.pem'),
    key    : fs.readFileSync(__dirname + '/server/db/ssl/cleardb_id-key-no-password.pem')
  }
});

module.exports = {
    connection: connection
}
