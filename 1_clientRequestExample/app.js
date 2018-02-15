const express = require('express');
const path = require('path');

const PORT = 3001;
const INDEX_HTML = path.join(__dirname, 'html/index.html');

var counter = 0; //our counter variable to send to the client

//A function to increment our counter variable
function incrementCounter(){
	counter++;
}

var app = express();
app.use(express.static(__dirname + '/public')); //send all files in the /public folder to the client

app.get('/', function(req, res){
  res.sendFile(INDEX_HTML);
});

//tell express to how respond to GET /counter 
app.get('/counter', function(req, res){
  var json = {};
  json.counter = counter;
  
  res.send(json); //respond with a JSON blob containing our counter
});

app.listen(PORT, function(){
	console.log('Example app listening on port ' + PORT);
	setInterval(incrementCounter, 1000); //once app is listening, increment the counter variable every second
});