var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book',function(req,res){
	var books = [
		{title:'Angular',price: 800 , amount: 5},
		{title:'Node.js',price: 600 , amount: 3},
		{title:'CSS',price: 500 , amount: 7}
	];
	res.send(books);
})

var server = app.listen(3000, function () {
	console.log("server is running")
})
