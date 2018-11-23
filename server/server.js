// ENV SETUP
require('./config/config.js');

// IMPORT
const express = require('express');
const bodyParser = require('body-parser');

// SETUP EXPRESS
var app = express();

// HEROKU PORT VAR
const port = process.env.PORT;

// EXPRESS MIDDLEWARE
app.use(bodyParser.json());






// START SERVER ON PORT ??
app.listen(port, () => {
	console.log(`Server is up on port ${port}.`);
});
