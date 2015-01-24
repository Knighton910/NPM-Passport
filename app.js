var express = require('express');

var app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('index');
});

var port = process.env.PORT || 1337;
 

app.listen(port, function() {
	console.log('http://127.0.0.1:' + port + '/');
});