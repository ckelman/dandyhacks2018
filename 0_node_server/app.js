const express = require('express'); //include the node module 'express' which was retrieved with 'npm install'
const path = require('path');

const PORT = 3000;
const INDEX_HTML = path.join(__dirname, 'html/index.html');

var app = express(); //create a new Express instance

//Tell Express how to handle GET requests to path "/"
app.get('/', function(req, res){
  res.sendFile(INDEX_HTML); //respond with our index.html file
});

//tell Express to start listening for requests
app.listen(PORT, function(){
	console.log('Example app listening on port ' + PORT);
});