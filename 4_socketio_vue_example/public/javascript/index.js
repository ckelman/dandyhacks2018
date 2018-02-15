var app = new Vue({
	el: '#app', //Tell vue that all special vue-html tags will be within the DOM element with id='app'
	
	//data{} stores teh data that our vue instance keeps track of.  Can hold strings, numbers, arrays, objects, booleans, etc
	//access with app.counter
	data: {
		counter: 0 //The only data our vue instance keeps track of is a counter
	},

	//computed stores functions witch calculate values based on data{}
	//our vue instance makes these available the same way it does data
	//would access lame joke with app.lameJoke
	computed: {
		lameJoke: function(){
			//important to use "this."!!!!
			if(this.counter % 2 == 0){
				return "Looks like I CAN even right now!!";
			}
			
			return "Well that's not what I was expecting... how odd. ¯\\_(ツ)_/¯";
		}
	}

});


var socket = io.connect('ws://localhost:3004');

socket.on("counterChange", function(counter){
	updateCounter(counter);
});

function updateCounter(counter){
	app.counter = counter; //now our update counter function just needs to update our vue instance's counter variable.  Vue takes care of updateing our lame joke, and updating the DOM!
}