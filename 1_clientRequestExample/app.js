const express = require('express');
const path = require('path');

const PORT = 3001;
const INDEX_HTML = path.join(__dirname, 'html/index.html');

var counter = 0;

function incrementCounter(){
	counter++;
}

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(INDEX_HTML);
});

app.get('/counter', function(req, res){
  var json = {};
  json.counter = counter;
  
  res.send(json);
});

app.listen(PORT, function(){
	console.log('Example app listening on port ' + PORT);
	setInterval(incrementCounter, 1000);
});