// REQUIRE
const express = require('express');
const hbs = require('hbs');

// HEROKU PORT
const port = process.env.PORT || 3000;

// SETUP EXPRESS AS SERVER
var app = express();

// EXPRESS MIDDLEWARE VIEW ENGINE (HANDLEBARS)
app.set('view engine', 'hbs');






// START SERVER ON PORT ??
app.listen(port, () => {
	console.log(`Server is up on port ${port}.`);
});