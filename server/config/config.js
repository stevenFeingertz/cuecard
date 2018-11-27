// ENVIRONMENT VARIABLES

// heroku sets to production
var env = process.env.NODE_ENV || 'development';

// production vars in heroku
if (env === 'development') {
	process.env.PORT = 3000;
	process.env.DATABASE_HOST = 'us-cdbr-iron-east-01.cleardb.net';
	process.env.DATABASE_USERNAME = 'be81114c16f5d7';
	process.env.DATABASE_PASSWORD = '65241429';
	process.env.DATABASE_NAME = 'heroku_45f49aa72bc6398';
}
