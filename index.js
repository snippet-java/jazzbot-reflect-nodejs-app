var express = require('express');
var http = require('http');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/reverse', function (req, res) {
   var input = req.query.text;
   res.end(input.split("").reverse().join(""));
})

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
