const mysql = require('mysql');
const fs = require('fs');

var connection = mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_NAME,
  port     : 3306
  // ssl      : {
  //       ca      : fs.readFileSync(__dirname + '/ssl/rds-combined-ca-bundle.pem')
  // }
});

module.exports = {
    connection: connection
}
