var express = require('express');
var path	= require('path');
var app		= express();
var server	= require('http').createServer(app);
var bodyParser = require('body-parser');

//need this for post
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var tweets = ["First call on animal calls!"]

app.get('/', function(req, res){
	res.render('home');
});

app.post('/tweets', function(req, res){
	console.log(req.body.tweet);
	tweets.push(req.body.tweet);
	res.render('home', {tweetsArray: tweets});
})


server.listen(3000, function(){
	console.log('yooo its on port 3000')
})

///bonus points if use login and password matches