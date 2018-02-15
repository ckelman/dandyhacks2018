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

io.on('connection', function(socket){

	socket.on("submit-message", function(message){
		io.emit("new-message", message);
	});

});