const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const PORT = 3004;
const INDEX_HTML = path.join(__dirname, 'html/index.html');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

var counter = 0;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(INDEX_HTML);
});

//Note we are calling SERVER .listen now, not APP .listen
server.listen(PORT, function(){
	console.log('Example app listening on port ' + PORT);
	setInterval(incrementCounter, 3000);
});

function incrementCounter(){
	counter++;
	io.emit("counterChange", counter);
}
