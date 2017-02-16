var express = require('express');
var http = require('http');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/reverse', function (req, res) {
   var input = "madam";
   res.end(input.split("").reverse().join(""));
});

app.get('/help', function (req, res) {
	var outputArray = [];
	outputArray.push("reverse <ANY_TEXT> - Return the reverse of inputted text");
	
	res.contentType('application/json');
	res.send(JSON.stringify(outputArray));
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});