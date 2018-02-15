var app = new Vue({
	el: '#app',
	data: {
		messages: [],
		username: "",
		enteringName: true
	},

	computed: {
		isAnonymous: function(){
			return this.username == "";
		},

		displayName: function(){
			if(this.isAnonymous){
				return "Anonymous";
			}

			return this.username;
		}
	}

});

var socket = io.connect('ws://localhost:3005');

socket.on("new-message", function(message){
	app.messages.push(message);
});


function submitMessage(){

	var messageBody = $("#messageInput").val();
	$("#messageInput").val("");

	var message = {
		user: app.displayName,
		messagebody: messageBody
	};

	socket.emit("submit-message", message);

	//form submits reload the page unless the function called returns false
	return false;
}


function submitUsername(){
	//get the joke anc clear the input
	var username = $("#userNameInput").val();
	$("#userNameInput").val("");
	app.username = username;
	app.enteringName = false;


	//form submits reload the page unless the function called returns false
	return false;
}