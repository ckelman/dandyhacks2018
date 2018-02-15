var socket = io.connect('ws://localhost:3003'); //create a web socket connection with our server

//add a handler for the "counterChange" subject
socket.on("counterChange", function(counter){
	updateCounter(counter); //Whenever we receive data on the "counterChange" subject, pass it to updateCounter
});

function updateCounter(counter){
	//and show the user the counter
	$("#counter").text(counter);

	if(counter % 2 == 0){
		$("#lame-joke").text("Looks like I CAN even right now!!");
	}
	else{
		$("#lame-joke").text("Well that's not what I was expecting... how odd. ¯\\_(ツ)_/¯");
	}
}