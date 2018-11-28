// ENV VARS
require("dotenv").config();

// IMPORT
const express = require("express");
const bodyParser = require("body-parser");
const { connection } = require("./db/mysql.js");

// SETUP EXPRESS
var app = express();

// EXPRESS MIDDLEWARE
app.use(bodyParser.json());

// ROUTES (TEMP)
app.get("/", (req, res) => {
  res.status(400).send();
});

app.get("/test", (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM `account` WHERE `ownerID` = ? and `id` = ?",
      timeout: 40000, // 40s
      values: [22, 1]
    },
    function(error, results, fields) {
      if (error) throw error;

      res.json(results);

      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
    }
  );

  // Todo.find().then((todos) => {
  // 	res.send({todos});
  // }).catch((e) => {
  // 	res.status(400).send();
  // });
});

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is up on port ${process.env.PORT}.`);
});
