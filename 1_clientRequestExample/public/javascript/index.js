
function checkCounter(){
	//hit our GET / counter route
	$.get("http://localhost:3001/counter", function(res){
		var counter = res.counter; //pull out the conter variable from the JSON blob
		updateCounter(counter); //update the counter variable on the web page
	});
}

function updateCounter(counter){
	alert(counter); //make a popup with the vounter value
}


