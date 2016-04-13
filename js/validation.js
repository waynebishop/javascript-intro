// Find the form

var registrationForm = document.querySelector('#registration');

// Wait for the user to submit the form using an eventlistener i.e onsubmit
registrationForm.onsubmit = function(event) {

	//Patterns to use in validation [acceptable characters]. \- uses \ for special char. {min 3 characters, max 20} . ^ and $ means check as one group
	var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$"); 
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");

	// get references to the input fields
	var usernameInput = document.querySelector("#username");
	var usernameMessage = document.querySelector("#username-message");     
	var nameInput = document.querySelector("#full-name");
	var nameMessage = document.querySelector("#full-name-message"); 

	// Check the username
	if( usernamePattern.test( usernameInput.value ) ) {
		//username is valid. Clears the message span tag to ensure empty 
		usernameMessage.innerHTML = ""; 
	} else {
		//Username is invalid. Puts invalid message in span tag
		usernameMessage.innerHTML = "Username is invalid";
	}
	
	// Check the name
	if( namePattern.test( nameInput.value ) ) {
		// Name is valid. Clears the message span tag to ensure empty
		nameMessage.innerHTML = ""; 
	} else {
		//Name is invalid. Puts invalid message in span tag
		nameMessage.innerHTML = "Name is invalid";
	}

	// Stop the form from submitting
	event.preventDefault();

}





