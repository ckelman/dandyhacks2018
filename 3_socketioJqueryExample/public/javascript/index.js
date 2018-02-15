var socket = io.connect('ws://localhost:3003');

socket.on("counterChange", function(counter){
	updateCounter(counter);
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