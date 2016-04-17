// Find the form
var registrationForm = document.querySelector('#registration');

// get references to the input fields
	var usernameInput = document.querySelector("#username");
	var usernameMessage = document.querySelector("#username-message");     
	var nameInput = document.querySelector("#full-name");
	var nameMessage = document.querySelector("#full-name-message");
	var campusMessage = document.querySelector("#campus-message"); 
	var campusOptions = document.querySelectorAll("[name=campus]");
	var messageInput = document.querySelector('#message');
	var messageMessage = document.querySelector('#message-message')

// Listen for the blur event on the username inout field. Usimng "this" refers to usernameInput in start line
usernameInput.onblur = function(){

	// create a fake list of usernames that are in use
	var usernames = ["admin", "user","test","wayne.bishop","max"];

	//check if the username is in use. toLowerCase converts username input data to all lower case 
	if( usernames.indexOf( this.value.toLowerCase() ) >= 0 ) {
		usernameMessage.innerHTML = 'Username is in use';

	} else if ( this.value.length < 3 ) {
		usernameMessage.innerHTML = 'Username must be at least 3 characters'
	} else if ( this.value.length > 20 ) {
		usernameMessage.innerHTML = 'User name must be at most 20 characters'

	}	else	if( usernamePattern.test( this.value) ) {
		// Hide any existing messages
		usernameMessage.innerHTML = '';	

	} else {
		// Display an error message
		usernameMessage.innerHTML = 'Invalid username';
	}
}

messageInput.onkeyup = function() {

	var totalLetters = this.value.length;

	messageMessage.innerHTML = totalLetters + '/240';

}

























// Wait for the user to submit the form using an eventlistener i.e onsubmit
// registrationForm.onsubmit = function(event) {

// 	// Count how many errors there are
// 	var totalErrors = 0;

// 	// Check the username
// 	if( usernamePattern.test( usernameInput.value ) ) {
// 		//username is valid. Clears the message span tag to ensure empty 
// 		usernameMessage.innerHTML = ""; 
// 	} else {
// 		//Username is invalid. Puts invalid message in span tag
// 		usernameMessage.innerHTML = "Username is invalid";
// 		totalErrors++;
// 	}
	
// 	// Check the name
// 	if( namePattern.test( nameInput.value ) ) {
// 		// Name is valid. Clears the message span tag to ensure empty
// 		nameMessage.innerHTML = ""; 
// 	} else {
// 		//Name is invalid. Puts invalid message in span tag
// 		nameMessage.innerHTML = "Name is invalid";
// 		totalErrors++;
// 	}


// 	// CAMPUS section

// 	// Loop over all the campus options. Initially campusIsSelected set to false, then if any selected, will become true, but if not then still false i.e. no change/selection
// 	var campusIsSelected = false;	

// 	for(var i=0; i<campusOptions.length; i++ ) {
// 		//Check if this campus has been selected, and if yes then set camousIsSelected to true 
// 		if( campusOptions[i].checked) {
// 			campusIsSelected = true;
// 		}
// 	} 

// 	// If campusIsSelected is still false
// 	if( campusIsSelected == false ) {
// 		campusMessage.innerHTML = "Please select a campus";
// 		totalErrors++;
// 	} else {
// 		campusMessage.innerHTML = "";
// 	}

// 	// If the totalErros is greater than 0	
// 	if(totalErrors > 0) {
// 	// Stop the form from submitting
// 	event.preventDefault();
// 	} 
// }





