// ENVIRONMENT VARIABLES

// process.env.NODE_ENV will be set by heroku by default as 'production'.
// if we are local, it will set to development
var env = process.env.NODE_ENV || 'development';

// configure database
if (env === 'development') {
	process.env.PORT = 3000;
	process.env.DATABASE_HOST = 'localhost';
	process.env.DATABASE_USERNAME = 'root';
	process.env.DATABASE_PASSWORD = '&d7&wXK#QKzB';
	process.env.DATABASE_NAME = 'cuecard.io';
}

if (env === 'production') {
	process.env.DATABASE_HOST = 'us-cdbr-iron-east-01.cleardb.net';
	process.env.DATABASE_USERNAME = 'be81114c16f5d7';
	process.env.DATABASE_PASSWORD = '65241429';
	process.env.DATABASE_NAME = 'heroku_45f49aa72bc6398';
}
