var express = require('express');

var passport = require('passport');
var passportlocal = require('passport-local');


var app = express();

app.set('view engine', 'ejs')

app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res){
	res.render('index', {
		isAuthenticated: false,
		user: req.user
	});
});

app.get('/login', function(req, res) {
	res.render('login');
});

app.post(/login', function(req, res) {
	 
});

var port = process.env.PORT || 1337;
 

app.listen(port, function() {
	console.log('http://127.0.0.1:' + port + '/');
});
