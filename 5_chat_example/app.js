const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const PORT = 3005;
const INDEX_HTML = path.join(__dirname, 'html/index.html');

var app = express();
var server = http.Server(app);
var io = socketIO(server);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(INDEX_HTML);
});

//Note we are calling SERVER .listen now, not APP .listen
server.listen(PORT, function(){
	console.log('Example app listening on port ' + PORT);
});

//whenever sokcet.io establishes a new connection to a socket (client)
io.on('connection', function(socket){

	//listen for messages on the "submit-message" subject from that socket (will be all sockets)
	socket.on("submit-message", function(message){
		io.emit("new-message", message); //when we receive a message, broadcast it out to all sockets
	});

});