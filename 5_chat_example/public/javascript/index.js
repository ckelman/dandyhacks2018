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

//everytime the server sends out a new message, add it to the end of our vue instance's array of messages
socket.on("new-message", function(message){
	app.messages.push(message);
});


function submitMessage(){

	var messageBody = $("#messageInput").val(); //pull the text out of our input box
	$("#messageInput").val(""); //clear the input box

	//construct a message with our display name and the body of our message
	var message = {
		user: app.displayName,
		messagebody: messageBody
	};

	//send the message to the server
	socket.emit("submit-message", message);

	return false; 	//form submits reload the page unless the function called returns false
}


function submitUsername(){

	var username = $("#userNameInput").val();
	$("#userNameInput").val("");

	app.username = username; //tell our vue instance what our username is
	app.enteringName = false; //tell our vue instance we are no longer entering a username.  We use this along with v-if to know what should be displayed on the web page


	return false; 	//form submits reload the page unless the function called returns false
}