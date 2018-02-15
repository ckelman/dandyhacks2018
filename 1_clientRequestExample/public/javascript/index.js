
function checkCounter(){
	$.get("http://localhost:3001/counter", function(res){
		//get the counter 
		var counter = res.counter;
		updateCounter(counter);
	});
}

function updateCounter(counter){
	//and show the user the counter
	alert(counter);
}


