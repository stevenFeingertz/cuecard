// ENVIRONMENT VARIABLES

// heroku sets to production
var env = process.env.NODE_ENV || 'development';

// production vars in heroku
if (env === 'development') {
	process.env.PORT = 3000;
	// process.env.DATABASE_HOST = 'localhost';
	// process.env.DATABASE_USERNAME = 'root';
	// process.env.DATABASE_PASSWORD = '&d7&wXK#QKzB';
	// process.env.DATABASE_NAME = 'cuecard.io';
}
