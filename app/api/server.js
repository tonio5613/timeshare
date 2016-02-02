require('dotenv').load();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

var path = require('path');

var port = process.env.PORT || 3000;
<<<<<<< HEAD

var mongoose = require('mongoose');

var config = require('./config');
app.set('superSecret', config.secret);

=======
var config = require('./config');
var mongoose   = require('mongoose');
>>>>>>> 95eb02c00c442c022011051243a7decfd33f06bf

app.use(function(err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		res.status(401);
		res.json({
			"message": err.name + ": " + err.message
		});
	}
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
// configure body parser so we can get http body data
app.use(express.static(__dirname + '/../../public'))
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

var passport = require('passport');
require('./config/passport');
app.use(passport.initialize());

app.use(require('./controllers'));

var server;

<<<<<<< HEAD


app.boot = function(config) {
=======
app.boot = function(config){
>>>>>>> 95eb02c00c442c022011051243a7decfd33f06bf

mongoose.set('debug', true);
	mongoose.connect(config.db.mongodb); // connect to our database

	server = app.listen(port, function() {
		console.log('Listening on port ' + port)
	})
}

app.shutdown = function() {
	console.log('Shutdown server on port ' + port)
	server.close();
}

//if launched via command line or used as a module (e.g tests) @see http://stackoverflow.com/questions/8864365/can-i-know-in-node-js-if-my-script-is-being-run-directly-or-being-loaded-by-an
if (require.main === module) {
	app.boot(require('./config'));
} else {
	console.info('Running app as a module')

	module.exports = app;
}