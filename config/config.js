var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'nodejs-server'
		},
		port: 3000,
		db: 'mongodb://home-server:maksimalna-parola@ds013579.mlab.com:13579/nodejs-server-development'
	},

	test: {
		root: rootPath,
		app: {
			name: 'nodejs-server'
		},
		port: 3000,
		db: 'mongodb://localhost/nodejs-server-test'
	},

	production: {
		root: rootPath,
		app: {
			name: 'nodejs-server'
		},
		port: 3000,
		db: 'mongodb://localhost/nodejs-server-production'
	}
};

module.exports = config[env];
