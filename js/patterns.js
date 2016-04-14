//Patterns to use in validation [acceptable characters]. \- uses \ for special char. {min 3 characters, max 20} . ^ and $ means check as one group
	var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$"); 
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");





	