const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const PORT = 3003;
const INDEX_HTML = path.join(__dirname, 'html/index.html');

var app = express();
var server = http.Server(app); //create an instance of an http server which uses our espress instance
var io = socketIO(server); // create an instance of socket.io using our http server

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
	io.emit("counterChange", counter); //now whenever we increment our counter, we send the updated value to all connectected web sockets
}