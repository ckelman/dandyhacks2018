const express = require('express');
const path = require('path');

const PORT = 3000;
const INDEX_HTML = path.join(__dirname, 'html/index.html');

var app = express();

//Tell Express how to handle GET requests to path "/"
app.get('/', function(req, res){
  res.sendFile(INDEX_HTML);
});

//tell Express to start listening for requests
app.listen(PORT, function(){
	console.log('Example app listening on port ' + PORT);
});