
function checkCounter(){
	$.get("http://localhost:3002/counter", function(res){
		var counter = res.counter;
		updateCounter(counter);
	});
}

function updateCounter(counter){
	$("#counter").text(counter); //find the DOM element with id="counter", and set it's text to be the value of counter

	if(counter % 2 == 0){
		$("#lame-joke").text("Looks like I CAN even right now!!"); //if counter was even, set DOM element with id="lame-joke" to be our even lame joke
	}
	else{
		$("#lame-joke").text("Well that's not what I was expecting... how odd. ¯\\_(ツ)_/¯"); //if counter was odd, set DOM element with id="lame-joke" to be our odd lame joke
	}
}