
function checkCounter(){
	$.get("http://localhost:3002/counter", function(res){
		//get the counter 
		var counter = res.counter;
		updateCounter(counter);
	});
}

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