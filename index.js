var express = require('express');
var http = require('http');
var app = express();

app.get('/reverse', function (req, res) {
   var input = req.query.text;
   res.send(process(input));
});

app.get('/help', function (req, res) {
	var outputArray = [];
	outputArray.push("reverse <ANY_TEXT> - Return the reverse of inputted text");
	
	res.contentType('application/json');
	res.send(JSON.stringify(outputArray));
});

function process(input) {
  return input.split("").reverse().join("");
}

if (require.main === module) {
  console.log(process("reverse me"));
} else {

app.set('port', process.env.PORT || 3000);  
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
  
}