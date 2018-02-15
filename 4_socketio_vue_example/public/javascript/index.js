var app = new Vue({
	el: '#app',
	data: {
		counter: 0
	},

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
	app.counter = counter;
}